export default {
  id: 'hero-soldier76-l3-abilities',
  pathId: 'hero-soldier76',
  title: 'Soldier: 76: Core Abilities',
  subtitle: 'How to use Soldier: 76\'s active abilities effectively',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Soldier: 76\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Soldier: 76 players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Helix Rockets (Burst projectile)',
      body: 'Cooldown: 8 seconds · Damage: Direct and splash rocket damage · Fires a burst of rockets for finishing targets or burst damage.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Sprint (Mobility)',
      body: 'Cooldown: None · Damage: None · Run faster while not firing.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Biotic Field (Self/team sustain)',
      body: 'Cooldown: 15 seconds · Damage: None · Places a field that heals Soldier: 76 and nearby allies.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Soldier: 76\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Helix Rockets?',
        options: [
          { id: 'a', text: 'Burst projectile' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Helix Rockets is a Burst projectile ability with a cooldown of 8 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Helix Rockets?',
        options: [
          { id: 'a', text: '8 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Helix Rockets has a cooldown of 8 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Soldier: 76 have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Soldier: 76 has 3 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
