export default {
  id: 'hero-echo-l3-abilities',
  pathId: 'hero-echo',
  title: 'Echo: Core Abilities',
  subtitle: 'How to use Echo\'s active abilities effectively',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Echo\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Echo players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Sticky Bombs (Explosive burst)',
      body: 'Cooldown: 6 seconds · Damage: Multiple sticky explosions · Fires sticky bombs that attach and explode shortly after.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Flight (Mobility)',
      body: 'Cooldown: 6 seconds · Damage: None · Echo launches forward and gains free flight for repositioning and aerial pressure.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Focusing Beam (Execute beam)',
      body: 'Cooldown: 8 seconds · Damage: Increased damage to low-health targets · Channels a beam that deals much higher damage to targets below half health.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Echo\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Sticky Bombs?',
        options: [
          { id: 'a', text: 'Explosive burst' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Sticky Bombs is a Explosive burst ability with a cooldown of 6 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Sticky Bombs?',
        options: [
          { id: 'a', text: '6 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Sticky Bombs has a cooldown of 6 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Echo have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Echo has 3 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
