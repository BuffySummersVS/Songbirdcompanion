export default {
  id: 'hero-emre-l3-abilities',
  pathId: 'hero-emre',
  title: 'Emre: Core Abilities',
  subtitle: 'How to use Emre\'s active abilities effectively',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Emre\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Emre players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Cyber Frag (Bouncing explosive)',
      body: 'Cooldown: 10 seconds (2 charges) · Damage: Grenade explosion damage · Throws a bouncing grenade to pressure corners and finish damaged enemies.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Siphon Blaster (Temporary sidearm / mobility tool)',
      body: 'Cooldown: 11 sec · Damage: Rapid sidearm damage · Equips a temporary blaster that improves Emre\'s close-range pressure and mobility flow.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Emre\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Cyber Frag?',
        options: [
          { id: 'a', text: 'Bouncing explosive' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Cyber Frag is a Bouncing explosive ability with a cooldown of 10 seconds (2 charges).',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Cyber Frag?',
        options: [
          { id: 'a', text: '10 seconds (2 charges)' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Cyber Frag has a cooldown of 10 seconds (2 charges).',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Emre have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'a',
        explanation: 'Emre has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};