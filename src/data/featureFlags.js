// Friends and Direct Messages currently only work if two accounts happen to
// share the same browser's localStorage — there's no real backend, so a
// friend request or DM sent from one real device can never reach another.
// Flip this to true once storage.js's friend/DM functions are backed by an
// actual server (e.g. Supabase) with real cross-device sync.
export const SOCIAL_FEATURES_ENABLED = false;
