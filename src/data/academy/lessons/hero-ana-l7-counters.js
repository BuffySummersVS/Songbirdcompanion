export default {
  id: 'hero-ana-l7-counters',
  pathId: 'hero-ana',
  title: 'Ana Counters & Team Synergy',
  subtitle: 'Who Ana beats, who beats Ana, and who she enables',
  difficulty: 5,
  xp: 60,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Understanding match-up dynamics lets you choose when to play Ana and how to position in unfavourable situations. Her kit is powerful but demands awareness of which enemies and allies shape her game.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Heroes Ana Counters',
      body: 'Reaper, Roadhog, Doomfist, and Wrecking Ball — all self-healing or life-steal heavy heroes. Ana\'s Biotic Grenade completely negates their self-sustain when applied, turning their strength into a weakness.',
    },
    {
      type: 'text',
      body: 'When Roadhog uses Take A Breather or Reaper uses life-steal, throwing a Biotic Grenade removes the healing portion entirely. This can turn an unkillable tank into a vulnerable target for your team to burst down.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Heroes That Counter Ana',
      body: 'Tracer, Genji, Sombra, and Winston. These heroes close the gap quickly and remove Ana\'s range advantage. Sombra\'s hack disables Sleep Dart and Biotic Grenade. Coordinate with teammates to peel these threats.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Strong Synergies',
      body: 'Genji, Reinhardt, Reaper, and Doomfist. Nano Boost amplifies the burst potential of high-damage ultimates — Nano-Blade (Genji), Nano-Boost into Earthshatter (Reinhardt combo), or Nano-boosted Reaper clearing a tank.',
    },
    {
      type: 'text',
      body: 'The Reinhardt synergy works both ways: he creates space and blocks damage in front while Ana heals him from behind. A Reinhardt shielding Ana from flanks is one of the most reliable support-tank pairings in the game.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Perk Synergies',
      body: 'Minor perk "Speed Serum" grants both Ana and the Nano-boosted ally 30% movement speed, making it easier to stay aggressive after casting. Major perk "Headhunter" allows critical hits on the Biotic Rifle, increasing damage output significantly.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Anti-Heal Timing',
      body: 'The highest-value Biotic Grenade targets are enemies activating self-heal ultimates — Roadhog\'s Take A Breather, Reaper\'s passive during Reaperform, or Zarya using Graviton Surge while shielded. React to cooldown activations, not just health bars.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'Which of these heroes does Ana directly counter with her Biotic Grenade?',
        options: [
          { id: 'a', text: 'Tracer' },
          { id: 'b', text: 'Roadhog' },
          { id: 'c', text: 'Winston' },
          { id: 'd', text: 'Sombra' },
        ],
        correctId: 'b',
        explanation: 'Roadhog relies on self-healing. Ana\'s Biotic Grenade blocks healing, neutralising Take A Breather during team fights.',
      },
      {
        id: 'q2',
        text: 'Why is Sombra specifically dangerous for Ana?',
        options: [
          { id: 'a', text: 'She moves faster than Ana can aim.' },
          { id: 'b', text: 'Her hack disables Ana\'s Sleep Dart and Biotic Grenade.' },
          { id: 'c', text: 'She blocks Biotic Rifle shots.' },
          { id: 'd', text: 'She shields flanking teammates.' },
        ],
        correctId: 'b',
        explanation: 'Hack disables abilities, stripping Ana of her two defensive tools when a Sombra flanks her.',
      },
      {
        id: 'q3',
        text: 'Which hero is listed as a synergy because Nano Boost amplifies their burst potential?',
        options: [
          { id: 'a', text: 'Sombra' },
          { id: 'b', text: 'Winston' },
          { id: 'c', text: 'Genji' },
          { id: 'd', text: 'Tracer' },
        ],
        correctId: 'c',
        explanation: 'Nano-Blade (Nano Boost into Genji\'s Dragonblade) is one of the strongest ultimate combinations in the game.',
      },
      {
        id: 'q4',
        text: 'What is the best moment to use Biotic Grenade on a Roadhog?',
        options: [
          { id: 'a', text: 'When Roadhog has full health.' },
          { id: 'b', text: 'When Roadhog activates Take A Breather to deny the healing.' },
          { id: 'c', text: 'Immediately at the start of the fight.' },
          { id: 'd', text: 'Only when Roadhog is at critical health.' },
        ],
        correctId: 'b',
        explanation: 'Throwing Biotic Grenade during Take A Breather completely negates the heal, leaving Roadhog vulnerable without his self-sustain.',
      },
    ],
  },
};
