export default {
  id: 'hero-jetpackcat-l2-weapon',
  pathId: 'hero-jetpackcat',
  title: 'Jetpack Cat: Biotic Pawjectiles',
  subtitle: 'Mastering Jetpack Cat\'s primary combat tool',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Biotic Pawjectiles — Overview',
      body: 'Type: Mid-range projectile spread · Ammo: Magazine based · Damage: Heals allies or damages enemies per pellet; up to 45 damage if all 5 pellets headshot · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Fire a spread of 5 projectiles that heal allies or damage enemies on contact.',
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
      body: 'New Jetpack Cat players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Jetpack Cat\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Biotic Pawjectiles' },
          { id: 'b', text: 'Frenetic Flight' },
          { id: 'c', text: 'Catnapper' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Jetpack Cat\'s primary weapon is the Biotic Pawjectiles.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Biotic Pawjectiles?',
        options: [
          { id: 'a', text: 'Heals allies or damages enemies per pellet; up to 45 damage if all 5 pellets headshot' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Biotic Pawjectiles\'s output is: Heals allies or damages enemies per pellet; up to 45 damage if all 5 pellets headshot.',
      },
    ],
  },
};