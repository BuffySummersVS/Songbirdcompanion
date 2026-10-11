export default {
  id: 'hero-sombra-l5-positioning',
  pathId: 'hero-sombra',
  title: 'Sombra: Positioning & Playstyle',
  subtitle: 'Where to stand and how to approach each fight',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Effective positioning is the difference between a Sombra who survives the whole fight and one who is eliminated early. Support heroes must stay alive and in range of the allies they heal.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Movement Speed',
      body: 'Sombra moves at 5.5 m/s. As a Support, keep your Hotfix targets within 17 m and use Translocator to reposition, not to dive alone.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Strong Map Environments',
      body: 'Sombra excels on: Dorado, Watchpoint: Gibraltar, Numbani.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Weak Map Environments',
      body: 'Sombra may struggle on: King\'s Row, Lijiang Control Center. Adjust positioning to compensate.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Map Awareness',
      body: 'Always track enemy positions using the minimap and sound cues. Stealth lets you take off-angles for Cyberspace, but with 225 health you can\'t afford to be caught alone.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which map is listed as a strong environment for Sombra?',
        options: [
          { id: 'a', text: 'Dorado' },
          { id: 'b', text: 'King\'s Row' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Control maps only' },
        ],
        correctId: 'a',
        explanation: 'Sombra performs well on Dorado and may struggle on King\'s Row.',
      },
      {
        id: 'q2',
        text: 'Why is positioning critical for Sombra as a Support?',
        options: [
          { id: 'a', text: 'She must stay within range of the allies she heals without being caught alone' },
          { id: 'b', text: 'It isn\'t — Sombra can survive anywhere.' },
          { id: 'c', text: 'Only to use the ultimate more easily.' },
          { id: 'd', text: 'To respawn faster.' },
        ],
        correctId: 'a',
        explanation: 'As a Support with 225 health, Sombra must stay close enough to heal while using Stealth and Translocator to avoid being picked.',
      },
    ],
  },
};