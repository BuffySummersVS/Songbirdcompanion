export default {
  id: 'hero-sombra-l1-basics',
  pathId: 'hero-sombra',
  title: 'Sombra: Introduction',
  subtitle: 'Role, stats, and what makes Sombra unique',
  difficulty: 4,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Since Season 5 (October 2026), Sombra is a Support hero in the Tactician subrole. Her job is to keep allies alive with Hotfix and Cyberspace while Weakening enemies and disrupting the enemy team with EMP. Understanding the basics of Sombra\'s reworked kit sets the foundation for every advanced concept in this course.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hero Stats',
      body: '225 Health — 225 total HP, Movement speed: 5.5 m/s, Difficulty: 4/5.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Passive — Conspirator',
      body: 'Fully charged enemy ultimates are revealed to Sombra. As a Tactician, excess ultimate charge carries over to her next ultimate.',
    },
    {
      type: 'text',
      body: 'An orphan from Mexico City\'s post-Crisis slums who survived by learning to exploit the secrets of the powerful, Sombra grew into the world\'s most dangerous information broker — invisible, irreplaceable, and loyal to absolutely no one permanently. She discovered the edges of a global conspiracy so vast it swallowed Talon whole without even noticing, and she has been quietly pulling threads ever since. Her true agenda is the only thing she has never hacked her way out of.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Sombra',
      body: 'Sombra works well on: Dorado, Watchpoint: Gibraltar, Numbani. May struggle on: King\'s Row, Lijiang Control Center.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Sombra fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'c',
        explanation: 'Sombra moved from Damage to Support in Season 5 and now heals allies with Hotfix and Cyberspace.',
      },
      {
        id: 'q2',
        text: 'What is Sombra\'s total HP?',
        options: [
          { id: 'a', text: '200' },
          { id: 'b', text: '225' },
          { id: 'c', text: '250' },
          { id: 'd', text: '300' },
        ],
        correctId: 'b',
        explanation: 'Sombra\'s total HP is 225 (225 Health — 225 total HP).',
      },
      {
        id: 'q3',
        text: 'What does Sombra\'s Conspirator passive do?',
        options: [
          { id: 'a', text: 'Reveals low-health enemies' },
          { id: 'b', text: 'Reveals fully charged enemy ultimates' },
          { id: 'c', text: 'Grants permanent invisibility' },
          { id: 'd', text: 'Increases healing received' },
        ],
        correctId: 'b',
        explanation: 'Conspirator reveals enemies whose ultimates are fully charged.',
      },
    ],
  },
};