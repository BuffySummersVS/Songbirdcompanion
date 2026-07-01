export default {
  id: 'hero-roadhog-l5-positioning',
  pathId: 'hero-roadhog',
  title: 'Roadhog: Positioning & Playstyle',
  subtitle: 'Where to stand and how to approach each fight',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Effective positioning is the difference between a Roadhog who survives the whole fight and one who is eliminated early. Tank heroes must balance aggression with self-preservation.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Movement Speed',
      body: 'Roadhog moves at 5.5 m/s. As a Tank, positioning near the front lets you absorb damage for your team while creating space.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Strong Map Environments',
      body: 'Roadhog excels on: Ilios Well, Nepal Sanctum, Lijiang Garden.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Weak Map Environments',
      body: 'Roadhog may struggle on: Circuit Royal, Junkertown, Blizzard World, Hanaoka, Hollywood, Paraíso, Throne of Anubis, Colosseo. Adjust positioning to compensate.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Map Awareness',
      body: 'Always track enemy positions using the minimap and sound cues. Roadhog\'s effectiveness varies by environment — recognise when the map favours your kit.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which map is listed as a strong environment for Roadhog?',
        options: [
          { id: 'a', text: 'Ilios Well' },
          { id: 'b', text: 'Circuit Royal' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Control maps only' },
        ],
        correctId: 'a',
        explanation: 'Roadhog performs well on Ilios Well and may struggle on Circuit Royal.',
      },
      {
        id: 'q2',
        text: 'Why is positioning critical for Roadhog as a Tank?',
        options: [
          { id: 'a', text: 'Chasing kills and leaving the team unprotected' },
          { id: 'b', text: 'It isn\'t — Roadhog can survive anywhere.' },
          { id: 'c', text: 'Only to use the ultimate more easily.' },
          { id: 'd', text: 'To respawn faster.' },
        ],
        correctId: 'a',
        explanation: 'Tank heroes must position to fulfil their role. Roadhog\'s kit is designed around their intended engagement range.',
      },
    ],
  },
};