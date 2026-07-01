export default {
  id: 'hero-bastion-l6-counters',
  pathId: 'hero-bastion',
  title: 'Bastion: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 4,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Bastion counters, which heroes counter Bastion, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Bastion Counters',
      body: 'Reinhardt, Winston, Mauga, Roadhog — Bastion\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Bastion',
      body: 'Genji, D.Va, Sigma, Ana, Sombra — these heroes have tools that reduce Bastion\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Baptiste, Mercy, Sigma, Orisa — these heroes amplify Bastion\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Smart Bomb — A-36 Tactical Grenade\'s self-knockback increases 25%; no longer damages Bastion. / Armored Artillery — Configuration: Artillery grants 300 temporary overhealth. · Major: Lindholm Explosives — Configuration: Assault fires explosive shells instead of the rotary cannon. / Self-Repair — Press E to rapidly heal yourself.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Bastion counter?',
        options: [
          { id: 'a', text: 'Reinhardt' },
          { id: 'b', text: 'Genji' },
          { id: 'c', text: 'Baptiste' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Bastion\'s kit is particularly effective against Reinhardt.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Bastion?',
        options: [
          { id: 'a', text: 'Reinhardt' },
          { id: 'b', text: 'Genji' },
          { id: 'c', text: 'Baptiste' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Genji has tools that reduce Bastion\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Bastion?',
        options: [
          { id: 'a', text: 'Genji' },
          { id: 'b', text: 'Reinhardt' },
          { id: 'c', text: 'Baptiste' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Baptiste has abilities that complement Bastion\'s strengths.',
      },
    ],
  },
};