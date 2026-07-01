export default {
  id: 'hero-sombra-l3-abilities',
  pathId: 'hero-sombra',
  title: 'Sombra: Core Abilities',
  subtitle: 'How to use Sombra\'s active abilities effectively',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Sombra\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Sombra players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hack (Disruption)',
      body: 'Cooldown: 6 seconds · Damage: None · Hacks enemies or health packs, interrupting certain abilities and revealing targets.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Virus (Damage over time projectile)',
      body: 'Cooldown: 8 seconds · Damage: Impact and damage over time · Fires a projectile that damages enemies over time, especially effective after Hack.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Translocator (Mobility / escape)',
      body: 'Cooldown: 6 seconds · Damage: None · Throws a beacon and teleports to it, enabling engages and escapes.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Stealth (Invisibility)',
      body: 'Cooldown: Passive/automatic depending on current patch · Damage: None · Sombra becomes invisible, allowing scouting and backline access.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Sombra\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Hack?',
        options: [
          { id: 'a', text: 'Disruption' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Hack is a Disruption ability with a cooldown of 6 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Hack?',
        options: [
          { id: 'a', text: '6 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Hack has a cooldown of 6 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Sombra have (excluding ultimate)?',
        options: [
          { id: 'a', text: '3' },
          { id: 'b', text: '4' },
          { id: 'c', text: '6' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Sombra has 4 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
