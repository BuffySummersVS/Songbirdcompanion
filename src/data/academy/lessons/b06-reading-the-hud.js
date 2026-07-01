export default {
  id: 'reading-the-hud',
  title: 'Reading the HUD',
  subtitle: 'What everything on screen means',
  category: 'beginner',
  pathId: 'reading-game',
  order: 1,
  prerequisites: ['ultimate-charge'],
  xpReward: 50,
  estimatedMinutes: 4,
  difficulty: 1,
  tags: ['hud', 'interface', 'basics'],

  content: [
    {
      type: 'text',
      body: 'The HUD (Heads-Up Display) is the information layer overlaid on your game screen. Learning to read it at a glance is a fundamental skill — good players constantly reference their HUD to make decisions without stopping to focus on it.',
    },
    {
      type: 'text',
      heading: 'Your Health Bar',
      body: 'Displayed at the bottom-center of the screen, your health bar shows your current HP. The colour segments show the breakdown: white/red for regular health, yellow for armour, blue for shields, and green for overhealth. Your current HP value and maximum HP appear next to the bar.',
    },
    {
      type: 'text',
      heading: 'Ability Icons',
      body: 'Around the health bar you will see icons for each of your hero\'s abilities. When an ability is on cooldown, the icon is dimmed with a countdown timer. When it is ready, the icon is bright. At a glance, you can see which abilities are available and which need time to recharge.',
    },
    {
      type: 'text',
      heading: 'Ultimate Charge',
      body: 'A percentage or circular indicator shows how charged your ultimate is. At 100%, the indicator glows and may animate. Some heroes show a number instead of a percentage (for example, Kiriko shows how many Swift Step charges she has).',
    },
    {
      type: 'text',
      heading: 'Team Health Bars',
      body: 'Your teammates\' health appears in two places: above each hero in the game world as a colour-coded bar, and in the dedicated panel on the left side of the HUD. The left-side panel lets you monitor your whole team\'s HP at a glance without needing to look directly at each hero. A teammate dropping to low health is a signal to peel back, move toward them, or call out the threat.',
    },
    {
      type: 'text',
      heading: 'Kill Feed',
      body: 'The top-right corner shows the kill feed — a live log of eliminations, environmental kills, and ultimate uses. Reading the kill feed tells you which enemy heroes are dead and how long you have to take advantage before they respawn.',
    },
    {
      type: 'text',
      heading: 'Objective Status',
      body: 'The objective indicator varies by game mode: a percentage or bar for Control mode, a payload progress bar for Escort, or a push meter for Push. Always keep this in your peripheral vision to know how the match is going.',
    },
    {
      type: 'callout',
      variant: 'tip',
      body: 'Train yourself to glance at your teammate health bars every few seconds. Catching a support at 20% health before they die can change the outcome of an entire fight.',
    },
  ],

  quiz: {
    id: 'quiz-reading-the-hud',
    xpReward: 30,
    passMark: 75,
    questionsPerAttempt: 4,
    questionBank: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'In how many places can you monitor your teammates\' health without looking directly at them?',
        options: [
          'Only one — the left-side HUD panel',
          'Two places — above each hero in the game world, and the left-side HUD panel',
          'Only when holding Tab to open the scoreboard',
          'Teammate health can only be monitored by looking at each hero directly',
        ],
        correct: 1,
        explanation: 'Teammate health appears both above each hero in the game world (as a colour-coded bar) and in the dedicated panel on the left side of the HUD. Using either lets you assess your team\'s condition at a glance without taking your crosshair off the action.',
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'What does the kill feed show?',
        options: [
          'Your damage dealt per second',
          'A live log of eliminations and ultimate uses',
          'The enemy team\'s ultimate charge status',
          'How many objectives each team has captured',
        ],
        correct: 1,
        explanation: 'The kill feed (top-right) shows recent eliminations, environmental kills, and sometimes ability uses. It tells you which enemies are down and for how long.',
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'An ability icon on your HUD is dimmed with a countdown number. What does this mean?',
        options: [
          'The ability is permanently lost for this match',
          'The ability is on cooldown and cannot be used yet',
          'The ability requires more ultimate charge to activate',
          'The ability is disabled by an enemy effect',
        ],
        correct: 1,
        explanation: 'A dimmed ability icon with a countdown number means the ability is on cooldown — it has been used recently and needs time before it can be used again.',
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'Reading the kill feed helps you decide when to push forward after a team fight.',
        options: ['True', 'False'],
        correct: 0,
        explanation: 'True. If the kill feed shows three enemy heroes just died, you know the enemy team is short-handed for the next 10-15 seconds — a window to push the objective.',
      },
      {
        id: 'q5',
        type: 'multiple-choice',
        question: 'Where is your ultimate charge indicator on the HUD?',
        options: [
          'Top-left corner',
          'Near your health bar and ability icons at the bottom-center',
          'Top-right corner next to the kill feed',
          'Hidden until your ultimate is fully charged',
        ],
        correct: 1,
        explanation: 'Ultimate charge is displayed near your health bar at the bottom-center of the screen, as part of the main ability HUD cluster.',
      },
    ],
  },
};
