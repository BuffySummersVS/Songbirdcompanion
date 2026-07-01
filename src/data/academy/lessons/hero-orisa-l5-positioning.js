export default {
  id: 'hero-orisa-l5-positioning',
  pathId: 'hero-orisa',
  title: 'Orisa: Positioning & Playstyle',
  subtitle: 'Where to stand and how to approach each fight',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Effective positioning is the difference between a Orisa who survives the whole fight and one who is eliminated early. Tank heroes must balance aggression with self-preservation.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Movement Speed',
      body: 'Orisa moves at 5.5 m/s. As a Tank, positioning near the front lets you absorb damage for your team while creating space.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Strong Map Environments',
      body: 'Orisa excels on: King\'s Row, Esperança, Midtown.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Weak Map Environments',
      body: 'Orisa may struggle on: Watchpoint: Gibraltar, Dorado, Antarctic Peninsula, Blizzard World, Colosseo, Esperança, Hollywood, Runasapi, Samoa, Shambali Monastery. Adjust positioning to compensate.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Map Awareness',
      body: 'Always track enemy positions using the minimap and sound cues. Orisa\'s effectiveness varies by environment — recognise when the map favours your kit.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which map is listed as a strong environment for Orisa?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Watchpoint: Gibraltar' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Control maps only' },
        ],
        correctId: 'a',
        explanation: 'Orisa performs well on King\'s Row and may struggle on Watchpoint: Gibraltar.',
      },
      {
        id: 'q2',
        text: 'Why is positioning critical for Orisa as a Tank?',
        options: [
          { id: 'a', text: 'Chasing kills and leaving the team unprotected' },
          { id: 'b', text: 'It isn\'t — Orisa can survive anywhere.' },
          { id: 'c', text: 'Only to use the ultimate more easily.' },
          { id: 'd', text: 'To respawn faster.' },
        ],
        correctId: 'a',
        explanation: 'Tank heroes must position to fulfil their role. Orisa\'s kit is designed around their intended engagement range.',
      },
    ],
  },
};