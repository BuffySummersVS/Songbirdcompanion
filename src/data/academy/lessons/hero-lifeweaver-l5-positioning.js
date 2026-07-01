export default {
  id: 'hero-lifeweaver-l5-positioning',
  pathId: 'hero-lifeweaver',
  title: 'Lifeweaver: Positioning & Playstyle',
  subtitle: 'Where to stand and how to approach each fight',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Effective positioning is the difference between a Lifeweaver who survives the whole fight and one who is eliminated early. Support heroes must balance aggression with self-preservation.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Movement Speed',
      body: 'Lifeweaver moves at 5.5 m/s. As a Support, stay close enough to heal while far enough to avoid concentrated fire.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Strong Map Environments',
      body: 'Lifeweaver excels on: Lijiang Control Center, Nepal, Oasis.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Weak Map Environments',
      body: 'Lifeweaver may struggle on: Watchpoint: Gibraltar, Dorado. Adjust positioning to compensate.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Map Awareness',
      body: 'Always track enemy positions using the minimap and sound cues. Lifeweaver\'s effectiveness varies by environment — recognise when the map favours your kit.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which map is listed as a strong environment for Lifeweaver?',
        options: [
          { id: 'a', text: 'Lijiang Control Center' },
          { id: 'b', text: 'Watchpoint: Gibraltar' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Control maps only' },
        ],
        correctId: 'a',
        explanation: 'Lifeweaver performs well on Lijiang Control Center and may struggle on Watchpoint: Gibraltar.',
      },
      {
        id: 'q2',
        text: 'Why is positioning critical for Lifeweaver as a Support?',
        options: [
          { id: 'a', text: 'Focusing only on healing and ignoring self-preservation' },
          { id: 'b', text: 'It isn\'t — Lifeweaver can survive anywhere.' },
          { id: 'c', text: 'Only to use the ultimate more easily.' },
          { id: 'd', text: 'To respawn faster.' },
        ],
        correctId: 'a',
        explanation: 'Support heroes must position to fulfil their role. Lifeweaver\'s kit is designed around their intended engagement range.',
      },
    ],
  },
};