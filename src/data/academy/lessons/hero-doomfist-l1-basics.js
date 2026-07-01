export default {
  id: 'hero-doomfist-l1-basics',
  pathId: 'hero-doomfist',
  title: 'Doomfist: Introduction',
  subtitle: 'Role, stats, and what makes Doomfist unique',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Doomfist is a Tank hero whose job is to absorb damage, create space, and anchor fights. Understanding the basics of Doomfist\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '375 Health — 375 total HP, Movement speed: 5.5 m/s, Difficulty: 4/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — The Best Defense...',
      body: 'Doomfist gains temporary overhealth when he deals damage with abilities.',
    },
    {
      type: 'text',
      body: 'Akande Ogundimu is a Nigerian warrior-philosopher who lost his right arm in a conflict and replaced it with a devastating cybernetic gauntlet. He believes human conflict is a crucible that forges a stronger species, and rose to lead Talon\'s extremist',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Doomfist',
      body: 'Doomfist works well on: Numbani, Dorado, Oasis. May struggle on: Circuit Royal, Havana.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Doomfist fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'a',
        explanation: 'Doomfist is a Tank hero whose main purpose is to absorb damage, create space, and anchor fights.',
      },
      {
        id: 'q2',
        text: 'What is Doomfist\'s total HP?',
        options: [
          { id: 'a', text: '325' },
          { id: 'b', text: '375' },
          { id: 'c', text: '425' },
          { id: 'd', text: '475' },
        ],
        correctId: 'b',
        explanation: 'Doomfist\'s total HP is 375 (375 Health — 375 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Doomfist?',
        options: [
          { id: 'a', text: 'Numbani' },
          { id: 'b', text: 'Circuit Royal' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Doomfist performs best on Numbani and may struggle on Circuit Royal.',
      },
    ],
  },
};