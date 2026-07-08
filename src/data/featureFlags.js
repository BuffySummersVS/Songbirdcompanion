// Friends are backed by Supabase (Phase 3) and work cross-device — live.
export const FRIENDS_ENABLED = true;

// Direct Messages now have a real Supabase backend (dm_messages table + RPCs).
// TEMPORARILY flipped to true for the live verification pass — flip back to
// false if verification fails, or leave true and commit once it passes.
export const DM_ENABLED = true;
