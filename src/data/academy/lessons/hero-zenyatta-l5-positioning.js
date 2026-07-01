export default {
  id: 'hero-zenyatta-l5-positioning',
  pathId: 'hero-zenyatta',
  title: 'Zenyatta: Positioning & Playstyle',
  subtitle: 'Where to stand and how to approach each fight',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Effective positioning is the difference between a Zenyatta who survives the whole fight and one who is eliminated early. Support heroes must balance aggression with self-preservation.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Movement Speed',
      body: 'Zenyatta moves at 5.5 m/s. As a Support, stay close enough to heal while far enough to avoid concentrated fire.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Strong Map Environments',
      body: 'Zenyatta excels on: King\'s Row, Rialto, Midtown, Blizzard World, Hollywood, Paraíso, Runasapi, Shambali Monastery, Hanaoka, Throne of Anubis, Esperança.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Weak Map Environments',
      body: 'Zenyatta may struggle on: Lijiang Control Center, Nepal Sanctum. Adjust positioning to compensate.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Map Awareness',
      body: 'Always track enemy positions using the minimap and sound cues. Zenyatta\'s effectiveness varies by environment — recognise when the map favours your kit.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which map is listed as a strong environment for Zenyatta?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Lijiang Control Center' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Control maps only' },
        ],
        correctId: 'a',
        explanation: 'Zenyatta performs well on King\'s Row and may struggle on Lijiang Control Center.',
      },
      {
        id: 'q2',
        text: 'Why is positioning critical for Zenyatta as a Support?',
        options: [
          { id: 'a', text: 'Focusing only on healing and ignoring self-preservation' },
          { id: 'b', text: 'It isn\'t — Zenyatta can survive anywhere.' },
          { id: 'c', text: 'Only to use the ultimate more easily.' },
          { id: 'd', text: 'To respawn faster.' },
        ],
        correctId: 'a',
        explanation: 'Support heroes must position to fulfil their role. Zenyatta\'s kit is designed around their intended engagement range.',
      },
    ],
  },
};