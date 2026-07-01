export default {
  id: 'hero-juno-l7-mistakes',
  pathId: 'hero-juno',
  title: 'Juno: Common Mistakes',
  subtitle: 'Recognising and fixing habits that hold Juno players back',
  difficulty: 4,
  xp: 60,
  estimatedMinutes: 7,
  content: [
    {
      type: 'text',
      body: 'Even experienced Juno players fall into repeated patterns. Identifying these habits is the first step to eliminating them.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Mistake 1: Ignoring Role Responsibilities',
      body: 'Supports who focus only on healing and never peel for themselves become easy targets.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Mistake 2: Poor Ability Timing',
      body: 'Using Pulsar Torpedoes reactively instead of proactively reduces its impact. Plan ahead — cooldowns used at the wrong moment leave you defenceless.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Mistake 3: Holding Ultimate Too Long',
      body: 'Waiting for the perfect Orbital Ray moment often means never using it. Frequent average ultimates outperform rare perfect ones over an entire match.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Mistake 4: Not Adapting to Counters',
      body: 'If Sombra is on the enemy team, adjust your positioning and cooldown usage. Continuing the same approach into a counter is a losing pattern.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'The Fix: Communication',
      body: 'Most Juno mistakes are amplified when playing silently. Calling out ability status, ultimate charge, and threats lets teammates fill gaps you leave.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What is a common Support positioning mistake?',
        options: [
          { id: 'a', text: 'Focusing only on healing and ignoring self-preservation' },
          { id: 'b', text: 'Using abilities too frequently.' },
          { id: 'c', text: 'Communicating too much with teammates.' },
          { id: 'd', text: 'Staying too close to the objective.' },
        ],
        correctId: 'a',
        explanation: 'Support heroes must prioritise role responsibilities over individual plays that disrupt team structure.',
      },
      {
        id: 'q2',
        text: 'Why is hoarding an ultimate for the perfect moment often a mistake?',
        options: [
          { id: 'a', text: 'Ultimates expire if unused.' },
          { id: 'b', text: 'Frequent average uses often outperform rare perfect uses over a match.' },
          { id: 'c', text: 'Teammates must use ultimates first.' },
          { id: 'd', text: 'Ultimates deal less damage when saved.' },
        ],
        correctId: 'b',
        explanation: 'Ultimate economy favours frequent usage. Hoarding means fewer swings at changing fights.',
      },
      {
        id: 'q3',
        text: 'How should you respond when Sombra is on the enemy team?',
        options: [
          { id: 'a', text: 'Play Juno identically regardless.' },
          { id: 'b', text: 'Adjust positioning and playstyle to minimise the counter\'s advantage.' },
          { id: 'c', text: 'Immediately switch heroes every time.' },
          { id: 'd', text: 'Focus exclusively on eliminating that hero.' },
        ],
        correctId: 'b',
        explanation: 'Adapting positioning, cooldown usage, and approach reduces the impact of hard counters.',
      },
    ],
  },
};