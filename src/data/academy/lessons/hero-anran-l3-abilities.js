export default {
  id: 'hero-anran-l3-abilities',
  pathId: 'hero-anran',
  title: 'Anran: Core Abilities',
  subtitle: 'How to use Anran\'s active abilities effectively',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Anran\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Anran players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Fan the Flames (Secondary fire / burn amplifier)',
      body: 'Cooldown: Weapon action · Damage: Amplifies burning damage · Creates a heated wind blast that increases pressure on burning targets.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Inferno Rush (Mobility / damage)',
      body: 'Cooldown: 8 sec (2 charges) · Damage: Dash impact fire damage · Propels Anran forward in flame, damaging enemies she impacts.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Dancing Blaze (Evasion / area damage)',
      body: 'Cooldown: 8 sec · Damage: Nearby strike damage · Strikes nearby enemies while briefly avoiding incoming damage, letting Anran dodge danger during an engage.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Anran\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Fan the Flames?',
        options: [
          { id: 'a', text: 'Secondary fire / burn amplifier' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Fan the Flames is a Secondary fire / burn amplifier ability with a cooldown of Weapon action.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Fan the Flames?',
        options: [
          { id: 'a', text: 'Weapon action' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Fan the Flames has a cooldown of Weapon action.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Anran have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Anran has 3 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};