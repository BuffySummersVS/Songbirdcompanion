// Friends are backed by Supabase (Phase 3) and work cross-device — live.
export const FRIENDS_ENABLED = true;

// Direct Messages are still localStorage-only and were never migrated —
// the component is unfinished/untested, so it stays hidden behind its own
// flag even though Friends is now live. Flip this only after DMs get a
// real backend and a verification pass.
export const DM_ENABLED = false;
