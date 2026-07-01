export default {
  id: 'hero-wreckingball-l5-positioning',
  pathId: 'hero-wreckingball',
  title: 'Wrecking Ball: Positioning & Playstyle',
  subtitle: 'Where to stand and how to approach each fight',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Effective positioning is the difference between a Wrecking Ball who survives the whole fight and one who is eliminated early. Tank heroes must balance aggression with self-preservation.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Movement Speed',
      body: 'Wrecking Ball moves at 5.5 m/s. As a Tank, positioning near the front lets you absorb damage for your team while creating space.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Strong Map Environments',
      body: 'Wrecking Ball excels on: Ilios, Lijiang Garden, Dorado, Colosseo, Hollywood.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Weak Map Environments',
      body: 'Wrecking Ball may struggle on: King\'s Row, Nepal Village. Adjust positioning to compensate.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Map Awareness',
      body: 'Always track enemy positions using the minimap and sound cues. Wrecking Ball\'s effectiveness varies by environment — recognise when the map favours your kit.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which map is listed as a strong environment for Wrecking Ball?',
        options: [
          { id: 'a', text: 'Ilios' },
          { id: 'b', text: 'King\'s Row' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Control maps only' },
        ],
        correctId: 'a',
        explanation: 'Wrecking Ball performs well on Ilios and may struggle on King\'s Row.',
      },
      {
        id: 'q2',
        text: 'Why is positioning critical for Wrecking Ball as a Tank?',
        options: [
          { id: 'a', text: 'Chasing kills and leaving the team unprotected' },
          { id: 'b', text: 'It isn\'t — Wrecking Ball can survive anywhere.' },
          { id: 'c', text: 'Only to use the ultimate more easily.' },
          { id: 'd', text: 'To respawn faster.' },
        ],
        correctId: 'a',
        explanation: 'Tank heroes must position to fulfil their role. Wrecking Ball\'s kit is designed around their intended engagement range.',
      },
    ],
  },
};