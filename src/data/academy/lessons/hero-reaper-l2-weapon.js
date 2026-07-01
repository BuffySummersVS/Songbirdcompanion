export default {
  id: 'hero-reaper-l2-weapon',
  pathId: 'hero-reaper',
  title: 'Reaper: Hellfire Shotguns',
  subtitle: 'Mastering Reaper\'s primary combat tool',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Hellfire Shotguns — Overview',
      body: 'Type: Dual shotguns · Ammo: Magazine based · Damage: High close-range pellet damage · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Dual shotguns that deal massive damage at close range and fall off at distance.',
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
      body: 'New Reaper players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Reaper\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Hellfire Shotguns' },
          { id: 'b', text: 'Wraith Form' },
          { id: 'c', text: 'Death Blossom' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Reaper\'s primary weapon is the Hellfire Shotguns.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Hellfire Shotguns?',
        options: [
          { id: 'a', text: 'High close-range pellet damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Hellfire Shotguns\'s output is: High close-range pellet damage.',
      },
    ],
  },
};