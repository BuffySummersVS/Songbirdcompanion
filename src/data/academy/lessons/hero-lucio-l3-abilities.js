export default {
  id: 'hero-lucio-l3-abilities',
  pathId: 'hero-lucio',
  title: 'Lúcio: Core Abilities',
  subtitle: 'How to use Lúcio\'s active abilities effectively',
  difficulty: 4,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Lúcio\'s abilities form the backbone of their kit. Each ability has a defined cooldown and role — understanding when to use them separates good Lúcio players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Crossfade (Aura toggle)',
      body: 'Cooldown: None · Damage: None · Switch between Heal Song (passively heals nearby allies at 20 HPS) and Speed Song (increases ally movement and attack speed by 20%).',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Amp It Up (Song amplifier)',
      body: 'Cooldown: 12 sec · Damage: None · Greatly amplify the current song for a short burst, massively increasing healing output or speed boost.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Soundwave (Knockback)',
      body: 'Cooldown: 5 sec · Damage: 25 damage · Blast nearby enemies away. Wall riding empowers the next Soundwave with 25% extra knockback and 50% extra damage.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Look for synergies within Lúcio\'s own kit. Using abilities in the right sequence can significantly increase their impact.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What type of ability is Crossfade?',
        options: [
          { id: 'a', text: 'Aura toggle' },
          { id: 'b', text: 'Passive' },
          { id: 'c', text: 'Ultimate' },
          { id: 'd', text: 'Secondary fire' },
        ],
        correctId: 'a',
        explanation: 'Crossfade is a Aura toggle ability with a cooldown of None.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Crossfade?',
        options: [
          { id: 'a', text: 'None' },
          { id: 'b', text: '5 seconds' },
          { id: 'c', text: '20 seconds' },
          { id: 'd', text: 'Unlimited uses' },
        ],
        correctId: 'a',
        explanation: 'Crossfade has a cooldown of None.',
      },
      {
        id: 'q3',
        text: 'How many active abilities does Lúcio have (excluding ultimate)?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '5' },
          { id: 'd', text: '0' },
        ],
        correctId: 'b',
        explanation: 'Lúcio has 3 active abilities in addition to primary weapon and ultimate.',
      },
    ],
  },
};