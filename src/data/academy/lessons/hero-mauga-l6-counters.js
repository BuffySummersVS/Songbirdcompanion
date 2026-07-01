export default {
  id: 'hero-mauga-l6-counters',
  pathId: 'hero-mauga',
  title: 'Mauga: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Mauga counters, which heroes counter Mauga, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Mauga Counters',
      body: 'Reinhardt, Roadhog, Winston — Mauga\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Mauga',
      body: 'Ana, Zenyatta, Sigma, D.Va — these heroes have tools that reduce Mauga\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Bastion, Reaper, Kiriko, Baptiste — these heroes amplify Mauga\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Kinetic Bandolier — Overrun reloads up to 150 ammo while charging. / Two Hearts — On objectives, counts as two heroes for progress; regenerates 20 health/second while on the objective. · Major: Firewalker — Overrun ignites all enemies hit. / Combat Fuel — Critical hits grant two temporary overhealth on Cardiac Overdrive\'s next use; maximum 100.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Mauga counter?',
        options: [
          { id: 'a', text: 'Reinhardt' },
          { id: 'b', text: 'Ana' },
          { id: 'c', text: 'Bastion' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Mauga\'s kit is particularly effective against Reinhardt.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Mauga?',
        options: [
          { id: 'a', text: 'Reinhardt' },
          { id: 'b', text: 'Ana' },
          { id: 'c', text: 'Bastion' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Ana has tools that reduce Mauga\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Mauga?',
        options: [
          { id: 'a', text: 'Ana' },
          { id: 'b', text: 'Reinhardt' },
          { id: 'c', text: 'Bastion' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Bastion has abilities that complement Mauga\'s strengths.',
      },
    ],
  },
};