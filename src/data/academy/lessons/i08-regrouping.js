export default {
  id: 'regrouping',
  title: 'Regrouping',
  subtitle: 'Reset together, fight together',
  category: 'intermediate',
  pathId: 'team-strategy',
  order: 1,
  prerequisites: ['ultimate-economy'],
  xpReward: 60,
  estimatedMinutes: 4,
  difficulty: 3,
  tags: ['regrouping', 'teamwork', 'reset', 'strategy'],

  content: [
    {
      type: 'text',
      body: 'Regrouping means gathering your full team before committing to the next fight. It is the antidote to trickling, and it is one of the simplest team habits that separates winning from losing at every rank.',
    },
    {
      type: 'text',
      heading: 'Why Regroup?',
      body: 'After a lost fight, individual players respawn at different times. The first player to respawn often reaches the objective before the rest of the team and re-engages — alone against five. Then the next player arrives and fights 2v5. This is the trickle problem. Waiting 10–15 seconds for your full team before re-engaging gives you a 5v5 instead of a series of losing 1v5, 2v5, 3v5 fights.',
    },
    {
      type: 'callout',
      variant: 'example',
      title: 'Regroup in Practice',
      body: 'Your team just lost a fight. Three players respawn quickly. Instead of rushing back, they hold at the door for 12 seconds for the other two. The full five push together. The enemy team, now possibly spread out or running low on cooldowns, faces a fresh 5v5 they were not ready for.',
    },
    {
      type: 'text',
      heading: 'When Regrouping is Wrong',
      body: 'There are exceptions. If you killed four enemy heroes, waiting 15 seconds for your full team to regroup wastes the window where the enemy has only one player alive. In this case, push immediately with whoever is available. Regrouping is for when the enemy team has a full reset, not when you have advantage.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Regroup vs Push',
      body: 'The rule: regroup when the enemy team has a numbers advantage or is likely fully healed and cooled down. Push when you have the advantage — more players alive, enemy abilities spent, or your team has ultimates and they do not.',
    },
    {
      type: 'text',
      heading: 'Communicating a Regroup',
      body: 'On voice chat: "Hold at the door, wait for everyone." Without voice: use the ping system to mark a waypoint near spawn, or simply stop pushing and let teammates see you are waiting. Most teammates will read the situation and hold if they see others doing so.',
    },
    {
      type: 'callout',
      variant: 'tip',
      body: 'Dying counts as a hard regroup timer. Use the respawn time productively — check the scoreboard, think about your hero choice, and time your re-engagement with your teammates.',
    },
  ],

  quiz: {
    id: 'quiz-regrouping',
    xpReward: 35,
    passMark: 75,
    questionsPerAttempt: 4,
    questionBank: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Your team just lost a fight and is respawning at different times. The first two players are already running back to the objective. What is the better play?',
        options: [
          'Rush back immediately to prevent the enemy from capturing the point',
          'Hold near spawn for 10–15 seconds and regroup with the full team before engaging',
          'Use an ultimate to stall the point while waiting for teammates',
          'Let the objective be captured — fighting 2v5 never works',
        ],
        correct: 1,
        explanation: 'Holding near spawn for a few seconds to regroup gives you a 5v5 re-engage instead of a series of losing 2v5, 3v5 fights. The objective may slip slightly, but the full team push is far more likely to win the point back.',
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'You should always wait for all five teammates to regroup before pushing, even if the enemy team only has one player alive.',
        options: ['True', 'False'],
        correct: 1,
        explanation: 'False. If the enemy team is down to one player, push immediately — waiting 15 seconds wastes the advantage. Regrouping is for situations where the enemy team has reset and holds the advantage, not when you do.',
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'What does "trickling" mean, and how does regrouping solve it?',
        options: [
          'Healing teammates one at a time; solved by group healing',
          'Engaging the enemy piecemeal; solved by waiting for the full team before re-engaging',
          'Taking unnecessary flanking routes; solved by going straight to the objective',
          'Using ultimates at different times; solved by calling combos on voice',
        ],
        correct: 1,
        explanation: 'Trickling is engaging one or two players at a time against the full enemy team. Regrouping — waiting for the whole team — converts a series of 2v5 fights into one 5v5 on your terms.',
      },
      {
        id: 'q4',
        type: 'multiple-choice',
        question: 'Your team wins a fight and eliminates four enemy players. One enemy is retreating. What should you do?',
        options: [
          'Stop and regroup at the objective before proceeding',
          'Push immediately while the enemy is down four players',
          'Wait for the four dead enemies to respawn before engaging',
          'Chase the retreating enemy and do not let them regroup with respawned allies',
        ],
        correct: 1,
        explanation: 'When you have a 5v1 or 5v2 advantage, push immediately. The dead enemy players are on respawn timers — every second you wait gives them more time to respawn and return. This is not the time to regroup; this is the time to convert the advantage.',
      },
    ],
  },
};
