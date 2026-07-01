const LIST = [
  'asshole','bastard','bitch','bollocks','bullshit','cockhead','cunt',
  'dickhead','douchebag','fuckface','faggot','fucktard',
  'jackass','motherfucker','nigger','prick','shithead','slut',
  'twat','wanker','whore','cuck','fuck','shit','nigga',
];

export function containsProfanity(text) {
  const lower = text.toLowerCase().replace(/[^a-z]/g, '');
  return LIST.some(w => lower.includes(w));
}
