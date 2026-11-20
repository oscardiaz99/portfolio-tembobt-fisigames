// Build the public TikTok LIVE metadata from the draft saved by the OBS panel.
// Category stays separate so LIVE Studio can select the actual game entry.
function prepareTikTokMetadata(draft) {
  if (!draft?.channels?.includes('tiktok')) throw Error('Marca TikTok en Destinos.');
  const game = draft.game?.trim();
  const title = draft.title?.trim();
  if (!game || !title) throw Error('Completa el juego y el título del directo.');
  const hashtags = [];
  const seen = new Set();
  for (const hashtag of (draft.tags ?? '').match(/#[\p{L}\p{N}_]+/gu) ?? []) {
    const key = hashtag.toLowerCase();
    if (seen.has(key) || title.toLowerCase().split(/\s+/).includes(key)) continue;
    seen.add(key);
    hashtags.push(hashtag);
  }
  return { account: 'fisigames', game, title, hashtags };
}

module.exports = { prepareTikTokMetadata };
