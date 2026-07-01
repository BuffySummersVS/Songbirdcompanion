export default {
  id: 'hero-hazard-l5-positioning',
  pathId: 'hero-hazard',
  title: 'Hazard: Positioning & Playstyle',
  subtitle: 'Where to stand and how to approach each fight',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Effective positioning is the difference between a Hazard who survives the whole fight and one who is eliminated early. Tank heroes must balance aggression with self-preservation.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Movement Speed',
      body: 'Hazard moves at 5.5 m/s. As a Tank, positioning near the front lets you absorb damage for your team while creating space.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Strong Map Environments',
      body: 'Hazard excels on: King\'s Row, New Junk City, Lijiang Tower.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Weak Map Environments',
      body: 'Hazard may struggle on: Havana, Circuit Royal. Adjust positioning to compensate.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Map Awareness',
      body: 'Always track enemy positions using the minimap and sound cues. Hazard\'s effectiveness varies by environment — recognise when the map favours your kit.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which map is listed as a strong environment for Hazard?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Havana' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Control maps only' },
        ],
        correctId: 'a',
        explanation: 'Hazard performs well on King\'s Row and may struggle on Havana.',
      },
      {
        id: 'q2',
        text: 'Why is positioning critical for Hazard as a Tank?',
        options: [
          { id: 'a', text: 'Chasing kills and leaving the team unprotected' },
          { id: 'b', text: 'It isn\'t — Hazard can survive anywhere.' },
          { id: 'c', text: 'Only to use the ultimate more easily.' },
          { id: 'd', text: 'To respawn faster.' },
        ],
        correctId: 'a',
        explanation: 'Tank heroes must position to fulfil their role. Hazard\'s kit is designed around their intended engagement range.',
      },
    ],
  },
};