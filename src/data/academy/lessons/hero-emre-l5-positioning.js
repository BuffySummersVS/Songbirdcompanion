export default {
  id: 'hero-emre-l5-positioning',
  pathId: 'hero-emre',
  title: 'Emre: Positioning & Playstyle',
  subtitle: 'Where to stand and how to approach each fight',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Effective positioning is the difference between a Emre who survives the whole fight and one who is eliminated early. Damage heroes must balance aggression with self-preservation.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Movement Speed',
      body: 'Emre moves at 5.5 m/s. As a Damage hero, find angles that let you attack safely without overextending.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Strong Map Environments',
      body: 'Emre excels on: Midtown, Route 66, King\'s Row.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Weak Map Environments',
      body: 'Emre may struggle on: Watchpoint: Gibraltar, Dorado. Adjust positioning to compensate.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Map Awareness',
      body: 'Always track enemy positions using the minimap and sound cues. Emre\'s effectiveness varies by environment — recognise when the map favours your kit.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which map is listed as a strong environment for Emre?',
        options: [
          { id: 'a', text: 'Midtown' },
          { id: 'b', text: 'Watchpoint: Gibraltar' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Control maps only' },
        ],
        correctId: 'a',
        explanation: 'Emre performs well on Midtown and may struggle on Watchpoint: Gibraltar.',
      },
      {
        id: 'q2',
        text: 'Why is positioning critical for Emre as a Damage?',
        options: [
          { id: 'a', text: 'Engaging without cover and overextending' },
          { id: 'b', text: 'It isn\'t — Emre can survive anywhere.' },
          { id: 'c', text: 'Only to use the ultimate more easily.' },
          { id: 'd', text: 'To respawn faster.' },
        ],
        correctId: 'a',
        explanation: 'Damage heroes must position to fulfil their role. Emre\'s kit is designed around their intended engagement range.',
      },
    ],
  },
};