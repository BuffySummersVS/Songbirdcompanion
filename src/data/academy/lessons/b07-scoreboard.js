export default {
  id: 'scoreboard',
  title: 'Reading the Scoreboard',
  subtitle: 'What the stats actually mean',
  category: 'beginner',
  pathId: 'reading-game',
  order: 2,
  prerequisites: ['reading-the-hud'],
  xpReward: 50,
  estimatedMinutes: 4,
  difficulty: 2,
  tags: ['scoreboard', 'stats', 'performance', 'hud'],

  content: [
    {
      type: 'text',
      body: 'Press Tab during a match to open the scoreboard. It shows performance stats for all players. Learning to read these numbers helps you evaluate when it is time to swap heroes, and tells you how much pressure the enemy team is generating.',
    },
    {
      type: 'text',
      heading: 'Eliminations (Elims)',
      body: 'An elimination is counted when you deal the killing blow OR contribute a meaningful amount of damage in the last 5–10 seconds before a kill. Eliminations do not exclusively mean you got the final hit. A support hero with 15 elims likely did significant burst damage or good assists.',
    },
    {
      type: 'text',
      heading: 'Deaths',
      body: 'Each death costs your team time (respawn) and allows the enemy to push the objective. A player with many deaths may be over-extending or playing in unsafe positions. Low deaths is often more valuable than high eliminations.',
    },
    {
      type: 'text',
      heading: 'Damage Dealt',
      body: 'Total damage output for the match. High damage is not always a sign of good performance — damage dealt to tanks who are being healed back to full accomplishes very little. Focus on whether damage led to eliminations.',
    },
    {
      type: 'text',
      heading: 'Healing Done',
      body: 'Total healing output for the round. Support players can use this to evaluate how active they have been. However, healing done does not measure whether that healing was effective — over-healing a tank who wasn\'t in danger is less valuable than clutch heals at critical moments.',
    },
    {
      type: 'text',
      heading: 'Mitigation',
      body: 'Damage mitigated by your barriers, shields, or defensive abilities. Tanks like Reinhardt and Sigma will have high mitigation. This stat shows how much incoming damage was blocked before it could reach your team.',
    },
    {
      type: 'callout',
      variant: 'tip',
      body: 'If you notice the enemy team\'s damage hero has double your team\'s top damage, they may be carrying. Consider counter-picking or placing more focus on eliminating them.',
    },
    {
      type: 'callout',
      variant: 'warning',
      body: 'Do not tunnel-vision on your own stats. Overwatch is a team game — a player with low damage who made great callouts and peeled for supports may have contributed more to wins than a high-damage player who fed.',
    },
  ],

  quiz: {
    id: 'quiz-scoreboard',
    xpReward: 30,
    passMark: 75,
    questionsPerAttempt: 4,
    questionBank: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'How do you open the scoreboard mid-match?',
        options: ['Press Escape', 'Press Tab', 'Press M', 'Press F'],
        correct: 1,
        explanation: 'The Tab key opens the scoreboard during a match, showing stats for all players on both teams.',
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'An "elimination" in Overwatch is only counted if you dealt the killing blow.',
        options: ['True', 'False'],
        correct: 1,
        explanation: 'False. Eliminations are counted if you dealt a meaningful amount of damage in the window before the kill, not just the killing blow. Assists count as eliminations.',
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'Which scoreboard stat best measures how much a tank blocked damage for their team?',
        options: [
          'Eliminations',
          'Healing Done',
          'Mitigation',
          'Deaths',
        ],
        correct: 2,
        explanation: 'Mitigation shows how much damage was blocked by barriers and defensive abilities. Tanks like Reinhardt and Sigma typically have very high mitigation stats.',
      },
      {
        id: 'q4',
        type: 'multiple-choice',
        question: 'A damage hero on your team has high damage dealt but very few eliminations. What might this suggest?',
        options: [
          'They are playing very well and their teammates are getting the kills',
          'They may be focusing on tanks who are being fully healed back, rather than securing kills',
          'The scoreboard system is broken',
          'They are healing their teammates instead of dealing damage',
        ],
        correct: 1,
        explanation: 'High damage with few eliminations often means shooting at the wrong targets — usually the tank who is being kept alive by supports. Damage needs to convert into eliminations to be impactful.',
      },
      {
        id: 'q5',
        type: 'true-false',
        question: 'A support player with zero deaths but low healing done is likely playing well.',
        options: ['True', 'False'],
        correct: 1,
        explanation: 'Not necessarily. Low healing done from a support could mean they died before they could heal, or they were hiding and not contributing. Context matters — check whether your team survived fights.',
      },
    ],
  },
};
