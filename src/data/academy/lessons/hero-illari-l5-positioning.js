export default {
  id: 'hero-illari-l5-positioning',
  pathId: 'hero-illari',
  title: 'Illari: Positioning & Playstyle',
  subtitle: 'Where to stand and how to approach each fight',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Effective positioning is the difference between a Illari who survives the whole fight and one who is eliminated early. Support heroes must balance aggression with self-preservation.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Movement Speed',
      body: 'Illari moves at 5.5 m/s. As a Support, stay close enough to heal while far enough to avoid concentrated fire.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Strong Map Environments',
      body: 'Illari excels on: Circuit Royal, Watchpoint: Gibraltar, Havana, Samoa.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Weak Map Environments',
      body: 'Illari may struggle on: Lijiang Control Center, Nepal Village. Adjust positioning to compensate.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Map Awareness',
      body: 'Always track enemy positions using the minimap and sound cues. Illari\'s effectiveness varies by environment — recognise when the map favours your kit.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which map is listed as a strong environment for Illari?',
        options: [
          { id: 'a', text: 'Circuit Royal' },
          { id: 'b', text: 'Lijiang Control Center' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Control maps only' },
        ],
        correctId: 'a',
        explanation: 'Illari performs well on Circuit Royal and may struggle on Lijiang Control Center.',
      },
      {
        id: 'q2',
        text: 'Why is positioning critical for Illari as a Support?',
        options: [
          { id: 'a', text: 'Focusing only on healing and ignoring self-preservation' },
          { id: 'b', text: 'It isn\'t — Illari can survive anywhere.' },
          { id: 'c', text: 'Only to use the ultimate more easily.' },
          { id: 'd', text: 'To respawn faster.' },
        ],
        correctId: 'a',
        explanation: 'Support heroes must position to fulfil their role. Illari\'s kit is designed around their intended engagement range.',
      },
    ],
  },
};