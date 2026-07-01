export default {
  id: 'hero-juno-l5-positioning',
  pathId: 'hero-juno',
  title: 'Juno: Positioning & Playstyle',
  subtitle: 'Where to stand and how to approach each fight',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Effective positioning is the difference between a Juno who survives the whole fight and one who is eliminated early. Support heroes must balance aggression with self-preservation.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Movement Speed',
      body: 'Juno moves at 5.5 m/s. As a Support, stay close enough to heal while far enough to avoid concentrated fire.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Strong Map Environments',
      body: 'Juno excels on: Dorado, Watchpoint: Gibraltar, Numbani.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Weak Map Environments',
      body: 'Juno may struggle on: Lijiang Control Center, Nepal Sanctum. Adjust positioning to compensate.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Map Awareness',
      body: 'Always track enemy positions using the minimap and sound cues. Juno\'s effectiveness varies by environment — recognise when the map favours your kit.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which map is listed as a strong environment for Juno?',
        options: [
          { id: 'a', text: 'Dorado' },
          { id: 'b', text: 'Lijiang Control Center' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Control maps only' },
        ],
        correctId: 'a',
        explanation: 'Juno performs well on Dorado and may struggle on Lijiang Control Center.',
      },
      {
        id: 'q2',
        text: 'Why is positioning critical for Juno as a Support?',
        options: [
          { id: 'a', text: 'Focusing only on healing and ignoring self-preservation' },
          { id: 'b', text: 'It isn\'t — Juno can survive anywhere.' },
          { id: 'c', text: 'Only to use the ultimate more easily.' },
          { id: 'd', text: 'To respawn faster.' },
        ],
        correctId: 'a',
        explanation: 'Support heroes must position to fulfil their role. Juno\'s kit is designed around their intended engagement range.',
      },
    ],
  },
};