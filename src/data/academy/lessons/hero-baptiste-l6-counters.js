export default {
  id: 'hero-baptiste-l6-counters',
  pathId: 'hero-baptiste',
  title: 'Baptiste: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Baptiste counters, which heroes counter Baptiste, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Baptiste Counters',
      body: 'Reaper, Roadhog, Mauga — Baptiste\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Baptiste',
      body: 'Sombra, Genji, Tracer, Winston — these heroes have tools that reduce Baptiste\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Sigma, Orisa, Bastion, Widowmaker — these heroes amplify Baptiste\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Field Medicine — Immortality Field restores 80 health to nearby allies and 40 to Baptiste when destroyed. / Automated Healing — After placing Amplification Matrix, Shoulder Turret fires up to 12 shots periodically, each restoring 25 health to allies. · Major: Assault Burst — Regenerative Burst grants 20% attack speed for four seconds; no longer instantly heals. / Rocket Boots — While airborne from Exo Boots, press Space to dash horizontally.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Baptiste counter?',
        options: [
          { id: 'a', text: 'Reaper' },
          { id: 'b', text: 'Sombra' },
          { id: 'c', text: 'Sigma' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Baptiste\'s kit is particularly effective against Reaper.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Baptiste?',
        options: [
          { id: 'a', text: 'Reaper' },
          { id: 'b', text: 'Sombra' },
          { id: 'c', text: 'Sigma' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Sombra has tools that reduce Baptiste\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Baptiste?',
        options: [
          { id: 'a', text: 'Sombra' },
          { id: 'b', text: 'Reaper' },
          { id: 'c', text: 'Sigma' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Sigma has abilities that complement Baptiste\'s strengths.',
      },
    ],
  },
};