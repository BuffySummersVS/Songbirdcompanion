export default {
  id: 'hero-ana-l6-positioning',
  pathId: 'hero-ana',
  title: 'Ana Positioning & Playstyle',
  subtitle: 'Where to stand and how to think',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Ana operates best at medium-to-long range, letting her Biotic Rifle hit both allies and enemies reliably. Unlike most supports, she should never be in the front line — her job is to find elevated or rearward angles where she can see as many teammates as possible.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Line of Sight is Everything',
      body: 'Ana can only heal what she can see. Positioning high gives you sightlines to your team while keeping you out of reach of flankers. Use doors, staircases, and ledges that cover the main fight.',
    },
    {
      type: 'text',
      body: 'Her movement speed is 5.5 m/s — identical to most supports. She has no mobility ability, so once a flanker reaches her she must rely on Sleep Dart or Biotic Grenade to buy time. This makes pre-emptive positioning critical.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Strong Map Environments',
      body: 'Ana performs well on King\'s Row, Watchpoint: Gibraltar, and Dorado — maps with long corridors and cover-heavy streets that let her snipe enemies from range while maintaining line-of-sight to tank.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Weak Map Environments',
      body: 'Lijiang Control Center, Oasis, and New Junk City feature open areas and close-range compositions that punish Ana\'s lack of mobility. You may need to position even more conservatively on these maps.',
    },
    {
      type: 'text',
      body: 'Ana\'s passive regenerates health after a short period without taking damage. This makes it viable to duck behind cover briefly during a skirmish to recover rather than burning your Biotic Grenade on yourself.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Two-Target Prioritisation',
      body: 'In a team fight, Ana juggles two targets: her tank (who needs constant rifle healing) and the enemy she wants to Sleep Dart or anti-heal. Build the habit of scanning both sides of your crosshair, not just one.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Why does Ana prioritise elevated or rearward positioning over staying near the front line?',
        options: [
          { id: 'a', text: 'She deals more damage from height.' },
          { id: 'b', text: 'She needs line-of-sight to heal and range to avoid flankers.' },
          { id: 'c', text: 'Her passive regenerates faster at height.' },
          { id: 'd', text: 'Her Biotic Rifle only heals at range.' },
        ],
        correctId: 'b',
        explanation: 'Ana can only heal targets she can see, and she has no mobility ability — so distance from enemies is her primary defence.',
      },
      {
        id: 'q2',
        text: 'What is Ana\'s movement speed?',
        options: [
          { id: 'a', text: '4.5 m/s' },
          { id: 'b', text: '5.0 m/s' },
          { id: 'c', text: '5.5 m/s' },
          { id: 'd', text: '6.0 m/s' },
        ],
        correctId: 'c',
        explanation: 'Ana moves at 5.5 m/s — standard for most heroes — with no mobility ability, making repositioning slow.',
      },
      {
        id: 'q3',
        text: 'Which of the following is listed as a strong map for Ana?',
        options: [
          { id: 'a', text: 'Oasis' },
          { id: 'b', text: 'New Junk City' },
          { id: 'c', text: 'Lijiang Control Center' },
          { id: 'd', text: 'King\'s Row' },
        ],
        correctId: 'd',
        explanation: 'King\'s Row has long sightlines and cover that suit Ana\'s kit. Oasis, New Junk City, and Lijiang are listed as weak maps for her.',
      },
      {
        id: 'q4',
        text: 'What should Ana do when a flanker reaches her, since she has no mobility ability?',
        options: [
          { id: 'a', text: 'Walk backwards continuously.' },
          { id: 'b', text: 'Use Sleep Dart or Biotic Grenade to create distance or survive.' },
          { id: 'c', text: 'Activate her defensive passive.' },
          { id: 'd', text: 'Immediately use Nano Boost on herself.' },
        ],
        correctId: 'b',
        explanation: 'Without an escape tool, Ana must use Sleep Dart to incapacitate the flanker or Biotic Grenade to slow the threat while teammates respond.',
      },
    ],
  },
};
