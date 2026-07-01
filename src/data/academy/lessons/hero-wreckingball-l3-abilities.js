export default {
  id: 'hero-wreckingball-l3-abilities',
  pathId: 'hero-wreckingball',
  title: 'Wrecking Ball: Core Abilities',
  subtitle: 'How to use Wrecking Ball\'s active abilities effectively',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Wrecking Ball\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Wrecking Ball players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Roll (Mobility)',
      body: 'Cooldown: Form swap · Damage: Collision damage at high speed · Transform into a ball and roll quickly around the map.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Grappling Claw (Mobility)',
      body: 'Cooldown: 5 seconds · Damage: High-speed collision damage · Attach a claw to terrain and swing to build speed, boop enemies, and engage from unusual angles.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Adaptive Shield (Defensive)',
      body: 'Cooldown: 15 seconds · Damage: None · Gain temporary shields based on nearby enemies.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Piledriver (Crowd control / burst)',
      body: 'Cooldown: 8 seconds · Damage: Slam damage · Slam downward from the air, damaging and launching enemies upward.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Wrecking Ball\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Roll?',
        options: [
          { id: 'a', text: 'Mobility' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Roll is a Mobility ability with a cooldown of Form swap.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Roll?',
        options: [
          { id: 'a', text: 'Form swap' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Roll has a cooldown of Form swap.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Wrecking Ball have (excluding ultimate)?',
        options: [
          { id: 'a', text: '3' },
          { id: 'b', text: '4' },
          { id: 'c', text: '6' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Wrecking Ball has 4 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
