export default {
  id: 'hero-sojourn-l5-positioning',
  pathId: 'hero-sojourn',
  title: 'Sojourn: Positioning & Playstyle',
  subtitle: 'Where to stand and how to approach each fight',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Effective positioning is the difference between a Sojourn who survives the whole fight and one who is eliminated early. Damage heroes must balance aggression with self-preservation.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Movement Speed',
      body: 'Sojourn moves at 5.5 m/s. As a Damage hero, find angles that let you attack safely without overextending.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Strong Map Environments',
      body: 'Sojourn excels on: Midtown, Circuit Royal, Dorado.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Weak Map Environments',
      body: 'Sojourn may struggle on: Lijiang Control Center, Nepal Village, Antarctic Peninsula, Blizzard World, Colosseo, Hanaoka, Hollywood, Paraíso, Runasapi, Samoa, Suravasa, Throne of Anubis, Esperança, Shambali Monastery, New Junk City. Adjust positioning to compensate.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Map Awareness',
      body: 'Always track enemy positions using the minimap and sound cues. Sojourn\'s effectiveness varies by environment — recognise when the map favours your kit.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which map is listed as a strong environment for Sojourn?',
        options: [
          { id: 'a', text: 'Midtown' },
          { id: 'b', text: 'Lijiang Control Center' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Control maps only' },
        ],
        correctId: 'a',
        explanation: 'Sojourn performs well on Midtown and may struggle on Lijiang Control Center.',
      },
      {
        id: 'q2',
        text: 'Why is positioning critical for Sojourn as a Damage?',
        options: [
          { id: 'a', text: 'Engaging without cover and overextending' },
          { id: 'b', text: 'It isn\'t — Sojourn can survive anywhere.' },
          { id: 'c', text: 'Only to use the ultimate more easily.' },
          { id: 'd', text: 'To respawn faster.' },
        ],
        correctId: 'a',
        explanation: 'Damage heroes must position to fulfil their role. Sojourn\'s kit is designed around their intended engagement range.',
      },
    ],
  },
};