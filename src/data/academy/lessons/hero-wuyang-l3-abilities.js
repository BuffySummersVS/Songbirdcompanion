export default {
  id: 'hero-wuyang-l3-abilities',
  pathId: 'hero-wuyang',
  title: 'Wuyang: Core Abilities',
  subtitle: 'How to use Wuyang\'s active abilities effectively',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Wuyang\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Wuyang players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Restorative Stream (Sustained healing)',
      body: 'Cooldown: Resource based · Damage: None · Place a passive healing stream on an ally at 25 HPS. Hold the button to manually channel at 75 HPS total, consuming healing resource that regenerates over time.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Rushing Torrent (Mobility / resource sustain)',
      body: 'Cooldown: Resource based · Damage: None · Ride a wave of water to move faster and jump higher. Restores 10 ammo and 33% of healing resource on activation.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Guardian Wave (Team protection / knockback)',
      body: 'Cooldown: 8 sec · Damage: 40–80 (distance dependent) · Send a water wave forward that amplifies healing received by nearby allies by 50% and knocks back enemies. Heals nearby allies for 80 HP and Wuyang for 40 HP.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Wuyang\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Restorative Stream?',
        options: [
          { id: 'a', text: 'Sustained healing' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Restorative Stream is a Sustained healing ability with a cooldown of Resource based.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Restorative Stream?',
        options: [
          { id: 'a', text: 'Resource based' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Restorative Stream has a cooldown of Resource based.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Wuyang have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Wuyang has 3 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};