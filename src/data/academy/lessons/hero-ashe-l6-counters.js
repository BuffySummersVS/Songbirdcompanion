export default {
  id: 'hero-ashe-l6-counters',
  pathId: 'hero-ashe',
  title: 'Ashe: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Ashe counters, which heroes counter Ashe, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Ashe Counters',
      body: 'Pharah, Echo, Mercy, Widowmaker — Ashe\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Ashe',
      body: 'Winston, D.Va, Sombra, Genji — these heroes have tools that reduce Ashe\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Mercy, Zenyatta, Baptiste, Sigma — these heroes amplify Ashe\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Rapid Fire — Unscoped shots gain 30% attack speed but deal 15% less damage. / Sidewinder — Coach Gun pushes Ashe and enemies 20% farther. · Major: Viper\'s Sting — Hitting two consecutive scoped shots on a target deals 25 extra damage and reloads two ammo. / Airburst — Dynamite has 40% increased detonation radius while airborne and refunds three ammo when thrown.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Ashe counter?',
        options: [
          { id: 'a', text: 'Pharah' },
          { id: 'b', text: 'Winston' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Ashe\'s kit is particularly effective against Pharah.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Ashe?',
        options: [
          { id: 'a', text: 'Pharah' },
          { id: 'b', text: 'Winston' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Winston has tools that reduce Ashe\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Ashe?',
        options: [
          { id: 'a', text: 'Winston' },
          { id: 'b', text: 'Pharah' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Mercy has abilities that complement Ashe\'s strengths.',
      },
    ],
  },
};