export default {
  id: 'hero-sombra-l2-weapon',
  pathId: 'hero-sombra',
  title: 'Sombra: Machine Pistol & Hotfix',
  subtitle: 'Mastering Sombra\'s weapon and her healing hack',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Machine Pistol — Overview',
      body: 'Type: Automatic hitscan SMG · Ammo: 60 rounds · Damage: 7 per bullet (falloff 20–35 m) · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'A rapid-fire machine pistol best used at close range from off angles. It reaches its maximum 2° spread after 10 shots, so short bursts stay accurate.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hotfix — Secondary Fire',
      body: 'Heals an ally for 65 instantly plus 25 per second, up to 175 total healing over 12 seconds. 2 charges, 8-second cooldown, 17 m range. It can also hack health packs (30 seconds) and most enemy deployables on a separate 6-second cooldown.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Core Usage Tips',
      body: 'Hotfix is your main healing tool, so keep both charges cycling on allies who are taking damage. Use Machine Pistol to finish Weakened targets between Hotfix casts rather than as your main job.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Common Mistake',
      body: 'Taking damage interrupts Hotfix\'s cast. Hack from cover, and don\'t try to Hotfix while you are being focused.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Sombra\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Machine Pistol' },
          { id: 'b', text: 'Hotfix' },
          { id: 'c', text: 'EMP' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Sombra\'s primary weapon is the Machine Pistol.',
      },
      {
        id: 'q2',
        text: 'How much damage does each Machine Pistol bullet deal?',
        options: [
          { id: 'a', text: '5' },
          { id: 'b', text: '7' },
          { id: 'c', text: '8' },
          { id: 'd', text: '12' },
        ],
        correctId: 'b',
        explanation: 'Machine Pistol deals 7 damage per bullet since Season 5.',
      },
      {
        id: 'q3',
        text: 'What does Hotfix do?',
        options: [
          { id: 'a', text: 'Damages enemies over time' },
          { id: 'b', text: 'Heals an ally and can hack health packs and deployables' },
          { id: 'c', text: 'Teleports Sombra' },
          { id: 'd', text: 'Reveals enemy ultimates' },
        ],
        correctId: 'b',
        explanation: 'Hotfix heals an ally for 65 instantly plus 25 per second, and can hack health packs and most enemy deployables.',
      },
    ],
  },
};