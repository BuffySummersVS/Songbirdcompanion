export default {
  id: 'hero-bastion-l2-weapon',
  pathId: 'hero-bastion',
  title: 'Bastion: Configuration: Recon',
  subtitle: 'Mastering Bastion\'s primary combat tool',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 7,
  content: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Configuration: Recon — Overview',
      body: 'Type: Automatic rifle · Ammo: Magazine based · Damage: Sustained hitscan damage · Cooldown: Reload',
    },
    {
      type: 'text',
      body: 'Bastion\'s mobile rifle mode. Useful for consistent pressure while repositioning.',
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
      body: 'New Bastion players often overcommit on primary fire when an ability would be more efficient. Balance your resource usage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is Bastion\'s primary weapon called?',
        options: [
          { id: 'a', text: 'Configuration: Recon' },
          { id: 'b', text: 'Configuration: Assault' },
          { id: 'c', text: 'Configuration: Artillery' },
          { id: 'd', text: 'Standard Issue Rifle' },
        ],
        correctId: 'a',
        explanation: 'Bastion\'s primary weapon is the Configuration: Recon.',
      },
      {
        id: 'q2',
        text: 'What is the damage or healing output of the Configuration: Recon?',
        options: [
          { id: 'a', text: 'Sustained hitscan damage' },
          { id: 'b', text: '100 per shot' },
          { id: 'c', text: '200 per second' },
          { id: 'd', text: 'Varies by altitude only' },
        ],
        correctId: 'a',
        explanation: 'The Configuration: Recon\'s output is: Sustained hitscan damage.',
      },
    ],
  },
};