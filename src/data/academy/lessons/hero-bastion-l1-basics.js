export default {
  id: 'hero-bastion-l1-basics',
  pathId: 'hero-bastion',
  title: 'Bastion: Introduction',
  subtitle: 'Role, stats, and what makes Bastion unique',
  difficulty: 2,
  xp: 50,
  estimatedMinutes: 6,
  content: [
    {
      type: 'text',
      body: 'Bastion is a Damage hero whose job is to eliminate high-priority targets and create picks. Understanding the basics of Bastion\'s kit sets the foundation for every advanced concept in this course.',
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
      title: 'Passive — Ironclad / Damage',
      body: 'Bastion has extra durability during key forms and applies the Damage role healing reduction through damage.',
    },
    {
      type: 'text',
      body: 'Unit SST Laboratories Siege Automaton E54 is a Bastion omnic unit from the Omnic Crisis that spent decades dormant in a German forest, all battle protocols intact but weapons silent. Reawakened to a world at uneasy peace, Bastion formed an unlikely f',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'When to Pick Bastion',
      body: 'Bastion works well on: King\'s Row, Rialto, Circuit Royal. May struggle on: Watchpoint: Gibraltar, Dorado.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What role does Bastion fill?',
        options: [
          { id: 'a', text: 'Tank' },
          { id: 'b', text: 'Damage' },
          { id: 'c', text: 'Support' },
          { id: 'd', text: 'All roles' },
        ],
        correctId: 'b',
        explanation: 'Bastion is a Damage hero whose main purpose is to eliminate high-priority targets and create picks.',
      },
      {
        id: 'q2',
        text: 'What is Bastion\'s total HP?',
        options: [
          { id: 'a', text: '250' },
          { id: 'b', text: '300' },
          { id: 'c', text: '350' },
          { id: 'd', text: '400' },
        ],
        correctId: 'b',
        explanation: 'Bastion\'s total HP is 300 (300 Health — 300 total HP).',
      },
      {
        id: 'q3',
        text: 'Which map type tends to favour Bastion?',
        options: [
          { id: 'a', text: 'King\'s Row' },
          { id: 'b', text: 'Watchpoint: Gibraltar' },
          { id: 'c', text: 'All maps equally' },
          { id: 'd', text: 'Maps with water hazards only' },
        ],
        correctId: 'a',
        explanation: 'Bastion performs best on King\'s Row and may struggle on Watchpoint: Gibraltar.',
      },
    ],
  },
};