export default {
  id: 'hero-sojourn-l3-abilities',
  pathId: 'hero-sojourn',
  title: 'Sojourn: Core Abilities',
  subtitle: 'How to use Sojourn\'s active abilities effectively',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Sojourn\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Sojourn players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Power Slide (Mobility)',
      body: 'Cooldown: 7 seconds · Damage: None · Slides along the ground and can jump out for vertical mobility.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Disruptor Shot (Area denial)',
      body: 'Cooldown: 15 seconds · Damage: Damage over time / slow depending on current patch · Launches an energy field that pressures and controls an area.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Sojourn\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Power Slide?',
        options: [
          { id: 'a', text: 'Mobility' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Power Slide is a Mobility ability with a cooldown of 7 seconds.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Power Slide?',
        options: [
          { id: 'a', text: '7 seconds' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Power Slide has a cooldown of 7 seconds.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Sojourn have (excluding ultimate)?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '4' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Sojourn has 2 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};
