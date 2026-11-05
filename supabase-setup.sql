-- Attune: accounts and saved scans.
-- Paste this whole file into Supabase → SQL Editor → New query → Run.

-- One row per person who signs up.
create table if not exists public.profiles (
  id          uuid primary key references auth.users on delete cascade,
  email       text,
  created_at  timestamptz not null default now()
);

-- Scans people save to their account.
create table if not exists public.scans (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null default auth.uid() references auth.users on delete cascade,
  title       text not null default 'Untitled scan',
  audience    text not null default '',
  body        text not null,
  score       integer,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  constraint body_size check (char_length(body) <= 20000),
  constraint title_size check (char_length(title) <= 200),
  constraint audience_size check (char_length(audience) <= 1000)
);
create index if not exists scans_user_recent on public.scans (user_id, updated_at desc);

-- Row-level security: each person can only see and change their own rows.
alter table public.profiles enable row level security;
alter table public.scans    enable row level security;

drop policy if exists "read own profile" on public.profiles;
create policy "read own profile" on public.profiles for select using (auth.uid() = id);

drop policy if exists "read own scans"   on public.scans;
drop policy if exists "add own scans"    on public.scans;
drop policy if exists "edit own scans"   on public.scans;
drop policy if exists "delete own scans" on public.scans;
create policy "read own scans"   on public.scans for select using (auth.uid() = user_id);
create policy "add own scans"    on public.scans for insert with check (auth.uid() = user_id);
create policy "edit own scans"   on public.scans for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "delete own scans" on public.scans for delete using (auth.uid() = user_id);

-- Keep at most 100 saved scans per person (oldest are removed first).
create or replace function public.trim_old_scans() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  delete from public.scans
   where user_id = new.user_id
     and id in (select id from public.scans where user_id = new.user_id order by updated_at desc offset 100);
  return new;
end $$;
drop trigger if exists scans_trim on public.scans;
create trigger scans_trim after insert on public.scans for each row execute function public.trim_old_scans();

-- New sign-ups automatically get a profile.
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email) values (new.id, new.email) on conflict (id) do nothing;
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- Let signed-in users reach their tables through the website (the rules above still limit them to their own rows).
grant usage on schema public to authenticated;
grant select on public.profiles to authenticated;
grant select, insert, update, delete on public.scans to authenticated;
