export default {
  id: 'hero-roadhog-l3-abilities',
  pathId: 'hero-roadhog',
  title: 'Roadhog: Core Abilities',
  subtitle: 'How to use Roadhog\'s active abilities effectively',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Roadhog\'s abilities form the backbone of his kit. Each ability has a defined cooldown and role — understanding when to use them separates good Roadhog players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Chain Hook (Pick tool)',
      body: 'Cooldown: 6 seconds (7 in 6v6) · Damage: Hook impact damage · Throw a hook that pulls an enemy 4.5 metres in front of Roadhog and stuns them for 0.3 seconds for a follow-up shot.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Take a Breather (Self-sustain)',
      body: 'Cooldown: Resource-based (2-second cooldown) · Damage: None · Heal 200 health per second and take 35% less damage while inhaling, for up to 2 seconds.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Trash Compactor (Secondary fire)',
      body: 'Cooldown: 10 seconds · Damage: 75–200 explosion · Absorb projectiles for 2 seconds, then fire them back as an explosive shot.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Hook into a full Scrap Gun volley is still Roadhog\'s core combo. Use Trash Compactor to soak an enemy\'s burst, then Take a Breather to top up once the pressure eases.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Chain Hook?',
        options: [
          { id: 'a', text: 'Pick tool' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Chain Hook is a Pick tool ability with a cooldown of 6 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Chain Hook?',
        options: [
          { id: 'a', text: '6 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '8 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Chain Hook\'s cooldown dropped from 7 to 6 seconds in Season 5.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Roadhog have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Roadhog has Chain Hook, Take a Breather and Trash Compactor, in addition to his primary weapon and ultimate.',
      },
    ],
  },
};