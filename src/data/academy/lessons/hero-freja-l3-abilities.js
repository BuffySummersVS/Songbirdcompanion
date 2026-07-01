export default {
  id: 'hero-freja-l3-abilities',
  pathId: 'hero-freja',
  title: 'Freja: Core Abilities',
  subtitle: 'How to use Freja\'s active abilities effectively',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Freja\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Freja players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Take Aim (Charged precision shot)',
      body: 'Cooldown: Cooldown/weapon action · Damage: High precision burst · Freja focuses a powerful shot for pick pressure.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Quick Dash (Mobility)',
      body: 'Cooldown: 4.5 seconds (2 charges) · Damage: None · A fast repositioning dash for taking angles or escaping pressure.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Updraft (Vertical mobility)',
      body: 'Cooldown: 10 sec · Damage: None · Launches Freja upward to reach high ground and create firing angles.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Freja\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Take Aim?',
        options: [
          { id: 'a', text: 'Charged precision shot' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Take Aim is a Charged precision shot ability with a cooldown of Cooldown/weapon action.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Take Aim?',
        options: [
          { id: 'a', text: 'Cooldown/weapon action' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Take Aim has a cooldown of Cooldown/weapon action.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Freja have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Freja has 3 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};