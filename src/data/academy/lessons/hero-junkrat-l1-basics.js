export default {
  id: 'hero-junkrat-l1-basics',
  pathId: 'hero-junkrat',
  title: 'Junkrat: Introduction',
  subtitle: 'Role, stats, and what makes Junkrat unique',
  difficulty: 3,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Junkrat is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Junkrat\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '250 Health — 250 total HP, Movement speed: 5.5 m/s, Difficulty: 3/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Total Mayhem / Damage',
      body: 'Drops bombs on death and is immune to his own explosives. Applies Damage role healing reduction through damage.',
    },
    {
      type: 'text',
      body: 'Jamison Fawkes is a manic, cackling explosives enthusiast born in the irradiated ruins of the Australian Outback, where years of scavenging and exposure to the omnium\'s fallout left him lean, wild-eyed, and terrifyingly creative with anything that de',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Junkrat',
      body: 'Junkrat works well on: King\'s Row, Eichenwalde, Lijiang Control Center. May struggle on: Circuit Royal, Havana.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Junkrat fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Junkrat is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Junkrat\'s total HP?',
        options: [
          { id: 'a', text: '200' },
          { id: 'b', text: '250' },
          { id: 'c', text: '300' },
          { id: 'd', text: '350' },
        ],
        correctId: 'b',
        explanation: 'Junkrat\'s total HP is 250 (250 Health — 250 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Junkrat?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Circuit Royal' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Junkrat performs best on King\'s Row and may struggle on Circuit Royal.',
      },
    ],
  },
};