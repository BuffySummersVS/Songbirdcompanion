export default {
  id: 'hero-widowmaker-l5-positioning',
  pathId: 'hero-widowmaker',
  title: 'Widowmaker: Positioning & Playstyle',
  subtitle: 'Where to stand and how to approach each fight',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Effective positioning is the difference between a Widowmaker who survives the whole fight and one who is eliminated early. Damage heroes must balance aggression with self-preservation.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Movement Speed',
      body: 'Widowmaker moves at 5.5 m/s. As a Damage hero, find angles that let you attack safely without overextending.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Strong Map Environments',
      body: 'Widowmaker excels on: Circuit Royal, Havana, Junkertown.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Weak Map Environments',
      body: 'Widowmaker may struggle on: Lijiang Control Center, Nepal Village, Antarctic Peninsula, Colosseo, Hanaoka, New Junk City, Runasapi, Samoa, Suravasa, Throne of Anubis. Adjust positioning to compensate.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Map Awareness',
      body: 'Always track enemy positions using the minimap and sound cues. Widowmaker\'s effectiveness varies by environment — recognise when the map favours your kit.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which map is listed as a strong environment for Widowmaker?',
        options: [
          { id: 'a', text: 'Circuit Royal' },
          { id: 'b', text: 'Lijiang Control Center' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Control maps only' },
        ],
        correctId: 'a',
        explanation: 'Widowmaker performs well on Circuit Royal and may struggle on Lijiang Control Center.',
      },
      {
        id: 'q2',
        text: 'Why is positioning critical for Widowmaker as a Damage?',
        options: [
          { id: 'a', text: 'Engaging without cover and overextending' },
          { id: 'b', text: 'It isn\'t — Widowmaker can survive anywhere.' },
          { id: 'c', text: 'Only to use the ultimate more easily.' },
          { id: 'd', text: 'To respawn faster.' },
        ],
        correctId: 'a',
        explanation: 'Damage heroes must position to fulfil their role. Widowmaker\'s kit is designed around their intended engagement range.',
      },
    ],
  },
};