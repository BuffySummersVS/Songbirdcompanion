export default {
  id: 'hero-reaper-l1-basics',
  pathId: 'hero-reaper',
  title: 'Reaper: Introduction',
  subtitle: 'Role, stats, and what makes Reaper unique',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Reaper is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Reaper\'s kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '300 Health — 300 total HP, Movement speed: 5.5 m/s, Difficulty: 2/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — The Reaping / Damage',
      body: 'Reaper heals from a portion of damage dealt and applies Damage role healing reduction through damage.',
    },
    {
      type: 'text',
      body: 'Gabriel Reyes co-founded Overwatch alongside Jack Morrison and commanded its covert division Blackwatch, until betrayal and a catastrophic confrontation left him in a state between life and death — capable of phasing through the physical world and ab',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Reaper',
      body: 'Reaper works well on: King\'s Row, Lijiang Control Center, Nepal Village, Hanaoka, New Junk City, Runasapi, Throne of Anubis. May struggle on: Havana, Circuit Royal.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Reaper fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Reaper is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Reaper\'s total HP?',
        options: [
          { id: 'a', text: '250' },
          { id: 'b', text: '300' },
          { id: 'c', text: '350' },
          { id: 'd', text: '400' },
        ],
        correctId: 'b',
        explanation: 'Reaper\'s total HP is 300 (300 Health — 300 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Reaper?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Havana' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Reaper performs best on King\'s Row and may struggle on Havana.',
      },
    ],
  },
};