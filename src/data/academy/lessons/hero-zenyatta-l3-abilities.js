export default {
  id: 'hero-zenyatta-l3-abilities',
  pathId: 'hero-zenyatta',
  title: 'Zenyatta: Core Abilities',
  subtitle: 'How to use Zenyatta\'s active abilities effectively',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Zenyatta\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Zenyatta players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Orb of Harmony (Single-target healing)',
      body: 'Cooldown: None · Damage: None · Attach a healing orb to an ally, restoring their health over time. The orb persists as long as Zenyatta maintains line of sight.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Orb of Discord (Enemy debuff)',
      body: 'Cooldown: None · Damage: Amplifies all damage taken by the target by 30% · Attach a debuff orb to an enemy, causing them to take 30% more damage from all sources. Removed if line of sight is broken for 1.5 seconds.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Zenyatta\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Orb of Harmony?',
        options: [
          { id: 'a', text: 'Single-target healing' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Orb of Harmony is a Single-target healing ability with a cooldown of None.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Orb of Harmony?',
        options: [
          { id: 'a', text: 'None' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Orb of Harmony has a cooldown of None.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Zenyatta have (excluding ultimate)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Zenyatta has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};