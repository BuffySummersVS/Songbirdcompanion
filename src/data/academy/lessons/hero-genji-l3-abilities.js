export default {
  id: 'hero-genji-l3-abilities',
  pathId: 'hero-genji',
  title: 'Genji: Core Abilities',
  subtitle: 'How to use Genji\'s active abilities effectively',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Genji\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Genji players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Deflect (Defensive / projectile reflect)',
      body: 'Cooldown: 8 seconds · Damage: Reflects incoming projectiles · Deflects many incoming projectiles back toward enemies.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Swift Strike (Mobility / execute)',
      body: 'Cooldown: Resets on elimination assist/final blow · Damage: Dash damage · Dashes through enemies, dealing damage and resetting when Genji helps secure an elimination.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Genji\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Deflect?',
        options: [
          { id: 'a', text: 'Defensive / projectile reflect' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Deflect is a Defensive / projectile reflect ability with a cooldown of 8 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Deflect?',
        options: [
          { id: 'a', text: '8 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Deflect has a cooldown of 8 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Genji have (excluding ultimate)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Genji has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};