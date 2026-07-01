export default {
  id: 'hero-kiriko-l5-positioning',
  pathId: 'hero-kiriko',
  title: 'Kiriko: Positioning & Playstyle',
  subtitle: 'Where to stand and how to approach each fight',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Effective positioning is the difference between a Kiriko who survives the whole fight and one who is eliminated early. Support heroes must balance aggression with self-preservation.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Movement Speed',
      body: 'Kiriko moves at 5.5 m/s. As a Support, stay close enough to heal while far enough to avoid concentrated fire.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Strong Map Environments',
      body: 'Kiriko excels on: Nepal, Oasis, Dorado.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Weak Map Environments',
      body: 'Kiriko may struggle on: Circuit Royal, Havana. Adjust positioning to compensate.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Map Awareness',
      body: 'Always track enemy positions using the minimap and sound cues. Kiriko\'s effectiveness varies by environment — recognise when the map favours your kit.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which map is listed as a strong environment for Kiriko?',
        options: [
          { id: 'a', text: 'Nepal' },
          { id: 'b', text: 'Circuit Royal' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Control maps only' },
        ],
        correctId: 'a',
        explanation: 'Kiriko performs well on Nepal and may struggle on Circuit Royal.',
      },
      {
        id: 'q2',
        text: 'Why is positioning critical for Kiriko as a Support?',
        options: [
          { id: 'a', text: 'Focusing only on healing and ignoring self-preservation' },
          { id: 'b', text: 'It isn\'t — Kiriko can survive anywhere.' },
          { id: 'c', text: 'Only to use the ultimate more easily.' },
          { id: 'd', text: 'To respawn faster.' },
        ],
        correctId: 'a',
        explanation: 'Support heroes must position to fulfil their role. Kiriko\'s kit is designed around their intended engagement range.',
      },
    ],
  },
};