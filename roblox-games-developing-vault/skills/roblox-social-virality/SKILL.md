---
name: roblox-social-virality
description: Design Roblox social and virality features - party/friend join, invite prompts (SocialService), friend and group bonuses, co-op and rivalry mechanics, server-wide shared moments, clip-able/shareable moments, spectating, private servers, content-creator programs and codes, and community (Discord/group) strategy within Roblox policy. Use when the user wants the game to spread, add friends/party/invites, work with YouTubers/TikTokers, or make moments shareable.
---

# Social & Virality

## Mechanics that make players bring friends
- **Co-op goals** that are easier together (survival runs, bosses, raids).
- **Rivalry**: counterable PvP stealing/raiding with defense options; leaderboards per server.
- **Friend bonus**: +X% income per friend in server (cap it).
- **Party system**: join friends, teleport parties together (`TeleportService:TeleportAsync` with TeleportOptions/reserved servers).
- **Shared moments**: server-wide weather, meteor, boss, admin event – everyone reacts at once.

## Invites
```lua
local SocialService = game:GetService("SocialService")
local ok, can = pcall(SocialService.CanSendGameInviteAsync, SocialService, player)
if ok and can then SocialService:PromptGameInvite(player) end
```
Reward on **successful join** of an invited friend (server checks), not on prompt (abusable). Check current invite/referral APIs and rules on Creator Hub.

## Clip-able moments (design them on purpose)
- Big reveal (egg/crate opening with suspense, rarity color burst, sound sting).
- Last-second steal / save; comeback mechanics.
- Huge numbers and absurd scale.
- Jump scares with build-up (horror).
- Funny physics/ragdoll.
Make them visible to others nearby (server announce: "X hatched a SECRET!").

## Creators
- Codes system (`/code` UI, server-validated, one-time per player, expiry).
- Creator-friendly: private servers, spectate/freecam for owners, no copyrighted music, streamer mode (hide names).
- Roblox Creator/affiliate programs: check Creator Hub for current terms.
- Give creators early access to updates in a private server (NDA-free, simple).

## Community
- Roblox group (group rewards in-game), official Discord only if age-appropriate rules (Discord is 13+ – don't require it).
- Update log in-game; polls for next content.

## Policy
- No rewards for off-platform actions (likes/follows on other sites) and no external links except allowed social links.
- Filter all player text; respect privacy (no personal info).
