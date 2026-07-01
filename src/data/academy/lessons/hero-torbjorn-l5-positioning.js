export default {
  id: 'hero-torbjorn-l5-positioning',
  pathId: 'hero-torbjorn',
  title: 'Torbjörn: Positioning & Playstyle',
  subtitle: 'Where to stand and how to approach each fight',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Effective positioning is the difference between a Torbjörn who survives the whole fight and one who is eliminated early. Damage heroes must balance aggression with self-preservation.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Movement Speed',
      body: 'Torbjörn moves at 5.5 m/s. As a Damage hero, find angles that let you attack safely without overextending.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Strong Map Environments',
      body: 'Torbjörn excels on: King\'s Row, Rialto, Route 66, Antarctic Peninsula, Blizzard World, Hollywood, Paraíso, Shambali Monastery, Suravasa, Hanaoka, Throne of Anubis.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Weak Map Environments',
      body: 'Torbjörn may struggle on: Watchpoint: Gibraltar, Dorado. Adjust positioning to compensate.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Map Awareness',
      body: 'Always track enemy positions using the minimap and sound cues. Torbjörn\'s effectiveness varies by environment — recognise when the map favours your kit.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which map is listed as a strong environment for Torbjörn?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Watchpoint: Gibraltar' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Control maps only' },
        ],
        correctId: 'a',
        explanation: 'Torbjörn performs well on King\'s Row and may struggle on Watchpoint: Gibraltar.',
      },
      {
        id: 'q2',
        text: 'Why is positioning critical for Torbjörn as a Damage?',
        options: [
          { id: 'a', text: 'Engaging without cover and overextending' },
          { id: 'b', text: 'It isn\'t — Torbjörn can survive anywhere.' },
          { id: 'c', text: 'Only to use the ultimate more easily.' },
          { id: 'd', text: 'To respawn faster.' },
        ],
        correctId: 'a',
        explanation: 'Damage heroes must position to fulfil their role. Torbjörn\'s kit is designed around their intended engagement range.',
      },
    ],
  },
};