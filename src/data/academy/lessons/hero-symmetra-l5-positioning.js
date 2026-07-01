export default {
  id: 'hero-symmetra-l5-positioning',
  pathId: 'hero-symmetra',
  title: 'Symmetra: Positioning & Playstyle',
  subtitle: 'Where to stand and how to approach each fight',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Effective positioning is the difference between a Symmetra who survives the whole fight and one who is eliminated early. Damage heroes must balance aggression with self-preservation.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Movement Speed',
      body: 'Symmetra moves at 5.5 m/s. As a Damage hero, find angles that let you attack safely without overextending.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Strong Map Environments',
      body: 'Symmetra excels on: Lijiang Control Center, King\'s Row, Nepal Village, Antarctic Peninsula, Suravasa, Shambali Monastery, Hanaoka, Throne of Anubis, New Junk City.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Weak Map Environments',
      body: 'Symmetra may struggle on: Circuit Royal, Havana. Adjust positioning to compensate.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Map Awareness',
      body: 'Always track enemy positions using the minimap and sound cues. Symmetra\'s effectiveness varies by environment — recognise when the map favours your kit.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which map is listed as a strong environment for Symmetra?',
        options: [
          { id: 'a', text: 'Lijiang Control Center' },
          { id: 'b', text: 'Circuit Royal' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Control maps only' },
        ],
        correctId: 'a',
        explanation: 'Symmetra performs well on Lijiang Control Center and may struggle on Circuit Royal.',
      },
      {
        id: 'q2',
        text: 'Why is positioning critical for Symmetra as a Damage?',
        options: [
          { id: 'a', text: 'Engaging without cover and overextending' },
          { id: 'b', text: 'It isn\'t — Symmetra can survive anywhere.' },
          { id: 'c', text: 'Only to use the ultimate more easily.' },
          { id: 'd', text: 'To respawn faster.' },
        ],
        correctId: 'a',
        explanation: 'Damage heroes must position to fulfil their role. Symmetra\'s kit is designed around their intended engagement range.',
      },
    ],
  },
};