export default {
  id: 'hero-emre-l6-counters',
  pathId: 'hero-emre',
  title: 'Emre: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Emre counters, which heroes counter Emre, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Emre Counters',
      body: 'Soldier: 76, Reaper, Bastion — Emre\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Emre',
      body: 'Widowmaker, Ashe, Sojourn, D.Va — these heroes have tools that reduce Emre\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Mercy, Baptiste, Zenyatta, Sigma — these heroes amplify Emre\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Suppressive Security — Override Protocol slows enemies 30% for 1 second. / Enhanced Agility — Siphon Blaster movement speed increases 20% when not firing. · Major: Heat Sink — Direct hits refund 60% heat; duration increases 0.1 seconds. / Cyber Adhesion — Cyber Frag sticks on contact and deals 40 extra damage to the stuck target.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Emre counter?',
        options: [
          { id: 'a', text: 'Soldier: 76' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Emre\'s kit is particularly effective against Soldier: 76.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Emre?',
        options: [
          { id: 'a', text: 'Soldier: 76' },
          { id: 'b', text: 'Widowmaker' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Widowmaker has tools that reduce Emre\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Emre?',
        options: [
          { id: 'a', text: 'Widowmaker' },
          { id: 'b', text: 'Soldier: 76' },
          { id: 'c', text: 'Mercy' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Mercy has abilities that complement Emre\'s strengths.',
      },
    ],
  },
};