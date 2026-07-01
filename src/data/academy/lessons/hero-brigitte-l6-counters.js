export default {
  id: 'hero-brigitte-l6-counters',
  pathId: 'hero-brigitte',
  title: 'Brigitte: Counters & Synergies',
  subtitle: 'Match-up knowledge and team coordination',
  difficulty: 4,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding which heroes Brigitte counters, which heroes counter Brigitte, and who to pair with determines how effective your games feel.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Brigitte Counters',
      body: 'Tracer, Genji, Sombra — Brigitte\'s kit is especially effective against these heroes.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Brigitte',
      body: 'Reaper, Junkrat, Echo, Pharah — these heroes have tools that reduce Brigitte\'s effectiveness.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Reinhardt, Zarya, Ramattra, Lúcio — these heroes amplify Brigitte\'s strengths or cover weaknesses.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perks Worth Knowing',
      body: 'Minor: Combat Medic — Melee attacks reduce Repair Pack cooldown by 0.75 seconds. / Morale Boost — Inspire lasts 3 seconds longer when triggered by Whip Shot. · Major: Inspiring Strike — Shield Bash grants 30% movement speed for 2 seconds and instantly activates Inspire. / Whiplash — Whip Shot wall slam deals 60 extra damage.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which hero does Brigitte counter?',
        options: [
          { id: 'a', text: 'Tracer' },
          { id: 'b', text: 'Reaper' },
          { id: 'c', text: 'Reinhardt' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'a',
        explanation: 'Brigitte\'s kit is particularly effective against Tracer.',
      },
      {
        id: 'q2',
        text: 'Which hero counters Brigitte?',
        options: [
          { id: 'a', text: 'Tracer' },
          { id: 'b', text: 'Reaper' },
          { id: 'c', text: 'Reinhardt' },
          { id: 'd', text: 'No hero specifically' },
        ],
        correctId: 'b',
        explanation: 'Reaper has tools that reduce Brigitte\'s effectiveness.',
      },
      {
        id: 'q3',
        text: 'Which hero synergises well with Brigitte?',
        options: [
          { id: 'a', text: 'Reaper' },
          { id: 'b', text: 'Tracer' },
          { id: 'c', text: 'Reinhardt' },
          { id: 'd', text: 'Heroes with the same role' },
        ],
        correctId: 'c',
        explanation: 'Reinhardt has abilities that complement Brigitte\'s strengths.',
      },
    ],
  },
};