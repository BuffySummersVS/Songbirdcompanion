export default {
  id: 'hero-dva-l3-abilities',
  pathId: 'hero-dva',
  title: 'D.Va: Core Abilities',
  subtitle: 'How to use D.Va\'s active abilities effectively',
  difficulty: 3,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'D.Va\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good D.Va players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Boosters (Mobility)',
      body: 'Cooldown: 5 seconds · Damage: Impact damage · Fly forward, knock enemies back, chase targets, escape danger, or contest high ground.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Defense Matrix (Defensive utility)',
      body: 'Cooldown: Resource meter · Damage: None · Deletes many incoming projectiles in front of D.Va, including dangerous burst damage and some ultimates.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Micro Missiles (Burst damage)',
      body: 'Cooldown: 7 seconds · Damage: Rocket volley · Fires a volley of explosive missiles that can be used while firing Fusion Cannons or Boosters.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within D.Va\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Boosters?',
        options: [
          { id: 'a', text: 'Mobility' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Boosters is a Mobility ability with a cooldown of 5 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Boosters?',
        options: [
          { id: 'a', text: '5 seconds' },
          { id: 'b', text: '3 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Boosters has a cooldown of 5 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does D.Va have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'D.Va has 3 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
