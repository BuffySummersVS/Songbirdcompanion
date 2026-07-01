export default {
  id: 'hero-kiriko-l2-weapon',
  pathId: 'hero-kiriko',
  title: 'Kiriko: Healing Ofuda',
  subtitle: 'Mastering Kiriko\'s primary combat tool',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Healing Ofuda — Overview',
      body: 'Type: Seeking healing talismans · Ammo: 6 charges per burst · Damage: None — up to 120 total healing per burst to a targeted ally · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Channel a burst of paper talismans that automatically seek and heal a targeted ally.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Secondary — Kunai',
      body: 'Throw precise kunai at enemies. Headshots deal triple damage. (Precision thrown projectile, Ammo: 3 per throw, Damage: 40 per kunai; headshots deal 120)',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Core Usage Tips',
      body: 'Understand when to use your primary weapon versus your abilities. Aim to maximise damage or healing throughput depending on the situation.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Common Mistake',
      body: 'New Kiriko players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Kiriko\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Healing Ofuda' },
          { id: 'b', text: 'Swift Step' },
          { id: 'c', text: 'Kitsune Rush' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Kiriko\'s primary weapon is the Healing Ofuda.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Healing Ofuda?',
        options: [
          { id: 'a', text: 'None — up to 120 total healing per burst to a targeted ally' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Healing Ofuda\'s output is: None — up to 120 total healing per burst to a targeted ally.',
      },
    ],
  },
};