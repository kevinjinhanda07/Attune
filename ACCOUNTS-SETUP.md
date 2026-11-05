# Turning on sign-in for the Attune website

The website already has **Log in**, **Sign up**, an account menu and **My scans**. They stay hidden until you connect a free Supabase project. Until then the site works exactly as before.

It takes about 20 minutes. You only do it once. Everything is free.

You will need:
- `backend/supabase/setup.sql` (from this project)
- `config.js` (in the upload zip)

---

## 1. Create a Supabase project (5 min)

1. Go to **supabase.com** → **Start your project** → sign in with GitHub.
2. Click **New project**.
   - Name: `attune`
   - Database password: click **Generate a password** and save it in a safe place. Attune doesn't need it, but you might later.
   - Region: the one closest to you
   - Click **Create new project**, then wait about 2 minutes.

## 2. Create the tables (2 min)

1. In the left menu, open **SQL Editor** → **New query**.
2. Open `backend/supabase/setup.sql` in Notepad. Copy all of it, paste it into the editor, and click **Run**.
3. You should see **Success. No rows returned**.

This creates the place where saved scans are kept. It also adds rules so each person can only ever see their own scans.

## 3. Tell Supabase where your website is (2 min)

Left menu → **Authentication** → **URL Configuration**:

- **Site URL**: `https://kevinjinhanda07.github.io/Attune/`
- **Redirect URLs** → **Add URL**: `https://kevinjinhanda07.github.io/Attune/**`

Click **Save**.

Email sign-in links now work. That is enough to start, and you can skip ahead to step 5 and add Google later.

## 4. Turn on "Continue with Google" (10 min)

**4a. In Supabase:** go to **Authentication** → **Sign In / Providers** → **Google**. Copy the **Callback URL** shown there. It looks like `https://abcd1234.supabase.co/auth/v1/callback`. Leave the tab open.

**4b. In Google Cloud:**
1. Open **console.cloud.google.com**. At the top, create a new project named `Attune`.
2. Search for **Google Auth Platform** and open it → **Get started**.
   - App name: `Attune`
   - Support email: your email
   - Audience: **External**
   - Contact email: your email
   - Click **Create**.
3. Go to **Clients** → **Create client**.
   - Application type: **Web application**
   - **Authorized JavaScript origins**: `https://kevinjinhanda07.github.io`
   - **Authorized redirect URIs**: paste the Callback URL from 4a.
   - Click **Create**. Copy the **Client ID** and **Client secret**.
4. Go to **Audience** → **Publish app**. Without this step, only test users you add by hand can sign in.

**4c. Back in Supabase (the Google provider page):** turn on **Enable Sign in with Google**. Paste the Client ID and Client secret, then click **Save**.

## 5. Connect the website (3 min)

1. In Supabase, open **Project Settings** (the gear icon) → **API Keys** (on some accounts it's just **API**). Copy:
   - the **Project URL** (`https://abcd1234.supabase.co`; also shown under **Data API**)
   - the **anon public** key (a long text starting with `eyJ`), or the **publishable** key (starting with `sb_publishable_`)

   **Never** use the `service_role` or `secret` key. That one must stay private.
2. Open `config.js` in Notepad and fill in the two values between the quotes:
   ```js
   window.ATTUNE_CONFIG = {
     supabaseUrl: 'https://abcd1234.supabase.co',
     supabaseAnonKey: 'eyJ...your long key...'
   };
   ```
3. On GitHub, open your **Attune** repository → **Add file** → **Upload files**. Drag in `config.js` and the other files from the upload zip, then click **Commit changes**.
4. Wait 1 to 2 minutes, then open `https://kevinjinhanda07.github.io/Attune/` and press **Ctrl+Shift+R**. **Log in** and **Sign up** now show at the top right.

Putting the anon key in a public file is normal and safe. It can only do what the rules from step 2 allow, which is people reading and changing their own scans.

---

## How it works for visitors

- Anyone can still scan without an account.
- When someone is signed in, every scan saves to their account automatically. **Re-check** updates the same saved scan instead of making a copy.
- **My scans** (in the account menu, and in the left rail on the results page) lists up to 50 recent scans. Click one to open it, or **×** to delete it. Each account keeps up to 100 scans; the oldest are removed first.
- When someone isn't signed in, the results page shows **Sign in to save this scan**. If they sign in from there, that scan is saved.

## Seeing your users

In Supabase:
- **Authentication** → **Users** lists everyone who signed up.
- **Table Editor** → **scans** shows saved scans.
- To delete someone's account, open **Users**, click the **⋯** next to their name, then **Delete user**. Their scans are removed too.

## If something goes wrong

| Problem | Fix |
|---|---|
| No Log in button | `config.js` wasn't uploaded, or still has empty quotes. Press Ctrl+Shift+R. |
| Google says "redirect_uri_mismatch" | The redirect URI in Google Cloud (4b) must exactly match the Supabase Callback URL. |
| Google sign-in sends you back but you're not signed in | Check the Site URL and Redirect URLs in step 3. Watch for the capital **A** in `/Attune/`. |
| Email link doesn't arrive | Check your spam folder. Supabase's free email service only sends a few emails per hour. For more, add your own email service in **Authentication** → **Emails** → **SMTP Settings**. |
| "Couldn't save" | Run `setup.sql` again (step 2). It's safe to run more than once. |

## Later: payments

The Premium plan and credits code is saved in `backend/later-payments/` and is **not** turned on. Nothing on the website charges money.
