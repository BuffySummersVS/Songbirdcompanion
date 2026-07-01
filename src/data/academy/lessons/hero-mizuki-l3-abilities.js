export default {
  id: 'hero-mizuki-l3-abilities',
  pathId: 'hero-mizuki',
  title: 'Mizuki: Core Abilities',
  subtitle: 'How to use Mizuki\'s active abilities effectively',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Mizuki\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Mizuki players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Healing Kasa (Multi-target bounce heal)',
      body: 'Cooldown: 10 sec · Damage: None · Throw your kasa hat to heal a targeted ally. The hat then bounces between nearby allies, healing each one in turn before returning to heal Mizuki.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Katashiro Return (Mobility / repositioning)',
      body: 'Cooldown: 8 sec · Damage: None · Leap forward, leaving behind a paper doll. Reactivate to teleport back to the doll\'s position. Grants increased movement speed (30%) while active.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Binding Chain (Crowd control)',
      body: 'Cooldown: 12 sec · Damage: None · Launch a chain at an enemy that hinders their movement, preventing them from using movement abilities or walking away from the tether.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Mizuki\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Healing Kasa?',
        options: [
          { id: 'a', text: 'Multi-target bounce heal' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Healing Kasa is a Multi-target bounce heal ability with a cooldown of 10 sec.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Healing Kasa?',
        options: [
          { id: 'a', text: '10 sec' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Healing Kasa has a cooldown of 10 sec.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Mizuki have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Mizuki has 3 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};