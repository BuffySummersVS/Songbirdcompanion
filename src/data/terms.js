export const TERMS = [
  // ── Roles & Positions ────────────────────────────────────────────────
  {
    term: "Tank",
    category: "Role",
    definition:
      "The high-health frontline role. Tanks absorb damage, create space for the team, and drive the pace of fights. In Overwatch there is one tank per team (changed from two in OW1).",
    example:
      "Your team's Reinhardt is the Tank. He leads the push and protects the team with Barrier Field.",
  },
  {
    term: "Damage (DPS)",
    category: "Role",
    definition:
      "The offensive damage-dealing role. Damage heroes focus on eliminating enemies and creating pick opportunities. Sometimes called DPS (Damage Per Second), borrowed from other games.",
    example:
      "Your team needs a Damage player to take out the enemy Widowmaker before she picks off the supports.",
  },
  {
    term: "Support",
    category: "Role",
    definition:
      "The healing and utility role. Supports keep teammates alive and provide crowd control, movement boosts, or damage amplification. Supports passively regenerate health when out of combat.",
    example:
      "Ana is a Support who heals from range and can shut down enemy ultimates with her Anti-Nade.",
  },
  {
    term: "Main Tank",
    category: "Role",
    definition:
      "The primary frontline anchor. Main Tanks typically have high health pools or barriers and take the most incoming damage. They drive the pace of engagements.",
    example: "Reinhardt is the quintessential Main Tank — he leads the charge with his shield.",
  },
  {
    term: "Off Tank",
    category: "Role",
    definition:
      "A tank that plays more independently, creating off-angle pressure or peeling for supports rather than holding the frontline. In OW1 there were two tanks; OW2 uses just one, but the concept still describes playstyle.",
    example: "Zarya plays like an Off Tank — she doesn't hold a barrier but generates powerful bubbles and deals high damage.",
  },
  {
    term: "Main Support",
    category: "Role",
    definition:
      "The team's primary healer. A Main Support focuses almost entirely on keeping teammates alive with consistent, high-throughput healing.",
    example:
      "Mercy is the classic Main Support — she pockets allies with healing beams and keeps the team from dying.",
  },
  {
    term: "Flex Support",
    category: "Role",
    definition:
      "A support who contributes both healing and offensive utility. Flex Supports can create picks with their damage or debuffs while still sustaining teammates.",
    example: "Zenyatta is a Flex Support — he uses Discord Orb to amplify damage on enemies while providing Orbs of Harmony to heal allies.",
  },
  {
    term: "Backline",
    category: "Role",
    definition:
      "The rear area of the team's formation where supports typically position. Supports sit in the backline so tanks and DPS can protect them.",
    example:
      "The flanker dove the backline and killed both supports before the team could react.",
  },
  {
    term: "Frontline",
    category: "Role",
    definition:
      "The forward area of the team's formation where tanks and close-range DPS engage. The frontline absorbs enemy pressure so the backline can work safely.",
    example:
      "Reinhardt and Zarya held the frontline while the rest of the team pushed in behind them.",
  },
  {
    term: "Off-Angle",
    category: "Positioning",
    definition:
      "A position away from the main team's sightline. Taking an off-angle forces enemies to deal with threats from multiple directions simultaneously.",
    example:
      "Ashe took an off-angle from the rooftop while the rest of the team pushed through the main street.",
  },
  {
    term: "High Ground",
    category: "Positioning",
    definition:
      "An elevated position above the main fight. High ground gives heroes a better firing angle, longer sightlines, and makes them harder to hit.",
    example:
      "Hanzo took the high ground on the rooftop and used it to shoot down into the enemy team.",
  },
  {
    term: "Pocket",
    category: "Role",
    definition:
      "When a support dedicates their healing to one specific teammate rather than rotating between the team. Being 'pocketed' usually means having Mercy's beam on you.",
    example:
      "The Pharah was impossible to kill because Mercy was pocketing her the whole fight.",
  },

  // ── Mechanics ────────────────────────────────────────────────────────
  {
    term: "Hitscan",
    category: "Mechanics",
    definition:
      "A weapon type where damage is applied instantly when the trigger is pulled — the bullet travels at the speed of light with no travel time. Hitscan weapons reward tracking aim and are strong against fast-moving or aerial targets.",
    example:
      "Soldier: 76's Pulse Rifle is hitscan — you aim directly where the enemy is rather than leading them.",
  },
  {
    term: "Projectile",
    category: "Mechanics",
    definition:
      "A weapon type where ammunition travels through the air with actual travel time. Projectile weapons require 'leading' the target — aiming slightly ahead of where they're moving.",
    example:
      "Pharah's rockets are projectiles. You need to lead fast-moving targets or you'll miss.",
  },
  {
    term: "CC (Crowd Control)",
    category: "Mechanics",
    definition:
      "Any ability that prevents an enemy from moving, acting, or using abilities normally. Examples include Reinhardt's Earthshatter (knockdown), Ana's Sleep Dart (sleep), and Cassidy's Magnetic Grenade (stuck).",
    example:
      "Ana threw her Sleep Dart as CC to stop the enemy Genji from using his Dragon Blade.",
  },
  {
    term: "AOE (Area of Effect)",
    category: "Mechanics",
    definition:
      "Abilities or damage that affect all enemies (or allies) within a set area rather than a single target. Also called 'splash' damage.",
    example:
      "Junkrat's grenades deal AOE damage — they don't need to hit directly, they can explode nearby and still deal damage.",
  },
  {
    term: "Headshot",
    category: "Mechanics",
    definition:
      "A critical hit landed on the head hitbox. Most heroes receive 2× damage from headshots, making precision aim significantly more powerful for hitscan and projectile heroes.",
    example:
      "Widowmaker can one-shot fully-healed DPS heroes with a scoped headshot.",
  },
  {
    term: "Fall-off Damage",
    category: "Mechanics",
    definition:
      "Damage reduction that applies at long distances for certain weapons. At fall-off range, a weapon deals less than its listed damage. Encouraging close-range play for short-range heroes.",
    example:
      "Reaper's shotguns deal maximum damage up close but fall off heavily past 15 metres.",
  },
  {
    term: "Hitbox",
    category: "Mechanics",
    definition:
      "The invisible collision shape used to detect whether an attack hits a hero. Hitboxes are not always perfectly shaped like the visible character model — some are larger or smaller.",
    example:
      "Wrecking Ball has a large hitbox because of his round mech, making him easier to hit than his small size might suggest.",
  },
  {
    term: "Overhealth",
    category: "Mechanics",
    definition:
      "Temporary HP that stacks above a hero's maximum health and decays over time. Overhealth does not regenerate and is lost if not spent. Often applied by abilities like Baptiste's Immortality Field or Kiriko's Kitsune Rush.",
    example:
      "Roadhog ate a health pack and gained overhealth — he's showing 600 HP but his max is 550.",
  },
  {
    term: "Armor",
    category: "Mechanics",
    definition:
      "A type of HP shown in orange (or sometimes gold). Armor reduces the damage received per hit, with a reduction on attacks dealing 10 or fewer damage per bullet. It makes rapid-fire weapons less effective.",
    example:
      "Reinhardt has armour. His orange HP bar takes less damage from Tracer's rapid-fire Pulse Pistols.",
  },
  {
    term: "Shields",
    category: "Mechanics",
    definition:
      "A type of HP shown in blue. Shields regenerate when the hero hasn't taken damage for a short time. Heroes like Sigma and Zenyatta have shield HP.",
    example:
      "Zenyatta's 50 shields regenerate between fights, giving him effective extra HP over time.",
  },
  {
    term: "Lifesteal",
    category: "Mechanics",
    definition:
      "Healing that comes from dealing damage rather than a heal ability. Some heroes heal by attacking enemies (Reaper's Reaping passive, Moira's Biotic Grasp).",
    example:
      "Reaper's passive lifesteal means he heals himself by dealing damage, making him very hard to burst down in a brawl.",
  },
  {
    term: "Boop",
    category: "Mechanics",
    definition:
      "Community term for a knockback ability that sends enemies flying. Several heroes have boops — Lúcio's Sound Wave, Sigma's Kinetic Grasp, Wrecking Ball's Piledriver.",
    example:
      "Lúcio booped the Genji off the edge with Sound Wave for an environmental kill.",
  },
  {
    term: "Environmental Kill (Env)",
    category: "Mechanics",
    definition:
      "An elimination caused by knocking or sending an enemy off the map rather than reducing their health to zero. Environmental kills remove all of the enemy's ultimate charge.",
    example:
      "Wrecking Ball knocked the enemy Reinhardt off the Ilios Well cliff for a free environmental kill.",
  },

  // ── Strategy & Composition ───────────────────────────────────────────
  {
    term: "Dive",
    category: "Strategy",
    definition:
      "A mobile team composition that attacks from multiple angles simultaneously, aiming to eliminate enemy supports before they can react. Requires coordinated timing from tank, DPS, and support.",
    example:
      "The enemy team ran a Dive comp — Winston jumped the supports while Tracer flanked from the side.",
  },
  {
    term: "Brawl",
    category: "Strategy",
    definition:
      "A close-range, sustained-combat composition that wins fights through high healing throughput and melee dominance. Brawl teams push forward together and overwhelm in tight spaces.",
    example:
      "They switched to Brawl — Reinhardt, Reaper, and Moira — and started winning fights at the choke.",
  },
  {
    term: "Poke",
    category: "Strategy",
    definition:
      "A long-range composition that chips away at enemy health from safe distances, forcing enemies into bad positions or winning fights without engaging directly.",
    example:
      "Their Poke comp with Widowmaker, Hanzo, and Zenyatta was too hard to approach through the main street.",
  },
  {
    term: "Deathball",
    category: "Strategy",
    definition:
      "An extremely tightly grouped team composition where all five heroes cluster together, making them hard to pick off and very powerful in sustained fights. A form of brawl.",
    example:
      "They ran a deathball — all five players grouped up and just walked onto the point together.",
  },
  {
    term: "Stagger",
    category: "Strategy",
    definition:
      "Intentionally eliminating enemies at different times during a fight to prevent them from respawning together with full ultimate charges. Staggering opponents is one of the most powerful skills in Overwatch.",
    example:
      "We killed their tank 20 seconds after their supports — perfect stagger. They couldn't group up for a counter-push.",
  },
  {
    term: "Ult Economy",
    category: "Strategy",
    definition:
      "How well a team manages its ultimate abilities across multiple fights. Good ult economy means using ultimates efficiently, not wasting them, and banking charge for critical moments.",
    example:
      "Their ult economy was terrible — they used Sound Barrier and Nano in the same fight on a non-critical push.",
  },
  {
    term: "First Pick",
    category: "Strategy",
    definition:
      "Eliminating the first enemy hero before the main team fight breaks out. A first pick gives a team a critical numbers advantage going into the fight.",
    example:
      "Widowmaker got a first pick on the enemy Ana before the fight even started — that's a free fight win.",
  },
  {
    term: "Cycle",
    category: "Strategy",
    definition:
      "A strategy where the team intentionally delays using their ultimate abilities so that they land in alternating waves, making them hard to counter with a single defensive ultimate.",
    example:
      "We cycled Sound Barrier and Transcendence — they couldn't stop both with one counter-ult.",
  },
  {
    term: "Counter-Pick",
    category: "Strategy",
    definition:
      "Switching to a hero who has a mechanical or kit advantage against an enemy hero. Counter-picking is a key mid-game skill.",
    example:
      "The enemy Pharah was dominating so we counter-picked — Cassidy and Soldier: 76 to hitscan her out of the sky.",
  },
  {
    term: "Engage",
    category: "Strategy",
    definition:
      "Initiating a team fight. The engage is typically led by the tank or a hero with a crowd-control or mobility ability.",
    example:
      "Reinhardt swung his hammer and charged in as the engage signal — the whole team followed.",
  },
  {
    term: "Disengage",
    category: "Strategy",
    definition:
      "Retreating from a fight that is going badly. Knowing when to disengage is as important as knowing when to fight.",
    example:
      "We were down two players — we had to disengage and reset rather than feeding the remaining enemies.",
  },
  {
    term: "Snowball",
    category: "Strategy",
    definition:
      "Using an advantage (a pick, an ultimate, better positioning) to stack further advantages rapidly. A snowball effect can make fights feel one-sided very quickly.",
    example:
      "One sleep dart on the enemy Ana snowballed into a full team wipe — without healing, they all died.",
  },
  {
    term: "Win Condition",
    category: "Strategy",
    definition:
      "The specific circumstance that needs to happen for a team to win a fight or round. Understanding your team's win condition shapes all decisions during play.",
    example:
      "Our win condition was getting Earthshatter — without that ult, we couldn't crack their Deathball.",
  },
  {
    term: "Feed",
    category: "Strategy",
    definition:
      "Dying frequently in a way that gives the enemy team ultimate charge and numbers advantage. Feeding usually happens through poor positioning or over-aggression.",
    example:
      "Stop feeding the enemy Ana — every time you die she builds Nano Boost faster.",
  },

  // ── Communication & Callouts ─────────────────────────────────────────
  {
    term: "Peel",
    category: "Communication",
    definition:
      "Turning to defend teammates — especially supports — from flankers or dive heroes. Peeling is the act of protecting the backline rather than pressing forward.",
    example:
      "Tracer is in our backline — someone peel! Roadhog, hook her off our Ana.",
  },
  {
    term: "Stack",
    category: "Communication",
    definition:
      "Grouping closely together as a team. Used to consolidate for a team fight or to avoid being picked off individually.",
    example:
      "Stack on point — don't let them pick us off one by one.",
  },
  {
    term: "Focus Fire",
    category: "Communication",
    definition:
      "Everyone on the team targeting the same enemy simultaneously. Focus fire quickly eliminates priority targets.",
    example:
      "Focus fire the Mercy — as long as she's alive she'll resurrect their team.",
  },
  {
    term: "Rotate",
    category: "Communication",
    definition:
      "Moving from one position or area to another, often to respond to enemy movement or to take a better angle.",
    example:
      "Rotate to the left flank — they're pushing through the high ground on the right side.",
  },
  {
    term: "Call",
    category: "Communication",
    definition:
      "Communicating an action or piece of information to your team — calling out enemy positions, announcing an ultimate, or saying when you need healing.",
    example:
      "Always call your ult before using it — 'Dragon Blade out!' gives your team time to set up.",
  },
  {
    term: "Diff",
    category: "Communication",
    definition:
      "Short for 'difference.' Used to explain why a game was lost — 'tank diff' means the enemy tank outperformed yours. It's become common shorthand in post-game discussions.",
    example:
      "It was a tank diff — their Ramattra dominated every single fight.",
  },
  {
    term: "GG",
    category: "Communication",
    definition:
      "Short for 'Good Game.' Usually sent in chat once a match ends. Can be genuine sportsmanship acknowledging a well-played match either way, or said in a sarcastic, derogatory tone to rub in a lopsided win. When meant derogatorily it's usually paired with 'EZ' or a misspelled/spaced-out variant of it (e.g. 'e z', 'ezy'), since typing them together as-is often trips the in-game chat filter and gets the message blocked.",
    example:
      "GG everyone, that was close! / (typed sarcastically after a stomp) GG ez.",
  },
  {
    term: "EZ",
    category: "Communication",
    definition:
      "Short for 'Easy.' Typically sent by the winning team to insult the losers, implying the match was won with little effort. Can also be used self-deprecatingly by the losing team for comedic effect after a rough loss.",
    example:
      "EZ, next. / (losing team, joking about the stomp) Well... EZ for them, ngl.",
  },
  {
    term: "GG EZ",
    category: "Communication",
    definition:
      "Overwatch has a built-in chat replacement filter that detects this taunt (and close variants) and automatically swaps it out for one of several silly, wholesome lines instead of letting the insult through.",
    example:
      "Typing 'gg ez' in chat gets swapped out automatically — tap \"View Replacement Lines\" below to see every possible line it can become.",
    chatFilterLines: [
      "Great game, everyone!",
      "It was an honor to play with you all. Thank you.",
      "Wishing you all the best.",
      "Good game! Best of luck to you all!",
      "Gee whiz! That was fun. Good playing!",
      "Well played. I salute you all.",
      "I'm wrestling with some insecurity issues in my life but thank you all for playing with me.",
      "Ah shucks… you guys are the best!",
      "It's past my bedtime. Please don't tell my mommy.",
      "I could really use a hug right now.",
      "I feel very, very small… please hold me…",
      "I'm trying to be a nicer person. It's hard, but I am trying, guys.",
      "C'mon, Mom! One more game before you tuck me in. Oops mistell.",
      "Mommy says people my age shouldn't suck their thumbs.",
      "For glory and honor! Huzzah comrades!",
    ],
  },
  {
    term: "WP",
    category: "Communication",
    definition:
      "Short for 'Well Played.' Typically sent post-game to commend the enemy team's effort or skill — a sincere, respectful counterpart to a taunt like EZ.",
    example:
      "WP, that Anti-Nade read at the end was perfect.",
  },
  {
    term: "Dive Priority",
    category: "Communication",
    definition:
      "The order in which a dive composition targets enemies. Usually supports first, then isolated DPS.",
    example:
      "Dive priority is Ana first, then Zenyatta — don't waste the dive on their tank.",
  },

  // ── Objectives & Maps ────────────────────────────────────────────────
  {
    term: "Payload",
    category: "Objectives",
    definition:
      "The cart that the attacking team must escort to the end point in Escort and Hybrid game modes. Attackers push by standing near it; defenders stop it from reaching the destination.",
    example:
      "Stop standing on the payload! Move up and contest — they're almost at checkpoint.",
  },
  {
    term: "Control Point",
    category: "Objectives",
    definition:
      "A marked area on the map that must be captured and held. Relevant in Control, Hybrid, and Clash modes.",
    example:
      "We need three people on the control point — stand in the blue circle to capture it.",
  },
  {
    term: "Choke",
    category: "Objectives",
    definition:
      "A narrow section of the map that funnels both teams into a tight space. Chokes are easy to defend but hard to break through without burst damage or mobility.",
    example:
      "They're holding the choke on Eichenwalde with Reinhardt and Bastion — we need to flank.",
  },
  {
    term: "Sightline",
    category: "Objectives",
    definition:
      "A clear line of vision between two points on the map, typically exploited by snipers. Controlling sightlines means controlling the pace of the fight.",
    example:
      "Their Widowmaker is holding a long sightline from spawn — break it by pushing through the side route.",
  },
  {
    term: "Contest",
    category: "Objectives",
    definition:
      "Standing on the objective to either stop capture progress (on defense) or keep the clock moving (as attacker). Even a single hero contesting can stop a point from being capped.",
    example:
      "They only have 5 seconds left — someone contest the point! Just run in, you don't have to kill anyone.",
  },
  {
    term: "Spawn",
    category: "Objectives",
    definition:
      "The starting location where players respawn after being eliminated. Teams switch spawn rooms in Hybrid, Escort, and some other modes based on objective progress.",
    example:
      "Don't fight near their spawn — they'll respawn with full health and you'll be outnumbered immediately.",
  },
  {
    term: "Flank",
    category: "Positioning",
    definition:
      "Attacking from the side or rear rather than head-on. Flanking forces the enemy to split attention between multiple threats.",
    example:
      "Go flank — they're all looking forward at the shield. Hit them from the left side alley.",
  },

  // ── Ultimates ────────────────────────────────────────────────────────
  {
    term: "Ult (Ultimate)",
    category: "Ultimates",
    definition:
      "The most powerful ability each hero has, charged by dealing or receiving damage. Ultimates are often fight-defining and both teams track them carefully.",
    example:
      "Save your ult — don't waste it on one person. Wait until their whole team is grouped.",
  },
  {
    term: "Nano (Boost)",
    category: "Ultimates",
    definition:
      "Ana's ultimate ability. It gives a targeted ally a massive damage boost and damage resistance for a short time. Often used on high-damage heroes for devastating combos.",
    example:
      "Nano the Reinhardt when he Earthshatters — Nano Blade is the classic Ana + Genji combo.",
  },
  {
    term: "Trans (Transcendence)",
    category: "Ultimates",
    definition:
      "Zenyatta's ultimate. He becomes invulnerable and rapidly heals everyone nearby for 8 seconds. Used to counter sustained damage ultimates.",
    example:
      "Save Trans for their Graviton Surge — it counters the whole combo.",
  },
  {
    term: "Sound Barrier",
    category: "Ultimates",
    definition:
      "Lúcio's ultimate. He leaps up and creates a massive overhealth shield on all nearby allies. One of the best anti-burst defensive ultimates in the game.",
    example:
      "Beat drop! Sound Barrier soaks all of Pharah's Barrage damage — use it when they commit.",
  },
  {
    term: "Shatter",
    category: "Ultimates",
    definition:
      "Reinhardt's Earthshatter ultimate. He slams the ground to knock down all enemies in front of him, leaving them vulnerable for several seconds.",
    example:
      "Earthshatter into Nano — the classic Reinhardt combo. Always gets a team wipe if their ults are down.",
  },
  {
    term: "Grav (Graviton Surge)",
    category: "Ultimates",
    definition:
      "Zarya's ultimate. She fires a gravity bomb that pulls all nearby enemies together. Almost always combined with a second high-damage ultimate to finish the kill.",
    example:
      "Zarya's Grav is up — wait for her to throw it, then follow with Dragonblade or Earthshatter.",
  },
  {
    term: "Dragon Blade",
    category: "Ultimates",
    definition:
      "Genji's ultimate. He draws his blade for 8 seconds, dealing massive melee damage with unlimited Swift Strike resets. Most effective when Nano Boosted.",
    example:
      "Nano Blade incoming — Genji got Nano Boost and is activating Dragon Blade. Everyone scatter.",
  },
  {
    term: "Tac Visor (Tactical Visor)",
    category: "Ultimates",
    definition:
      "Soldier: 76's ultimate. His Pulse Rifle automatically targets the nearest visible enemy for a limited duration — sometimes called 'aimbot mode.'",
    example:
      "Tac Visor is great into a big team — find the grouped enemies and just spray.",
  },
  {
    term: "EMP",
    category: "Ultimates",
    definition:
      "Sombra's ultimate. A massive field that hacks all nearby enemies simultaneously — disabling abilities, removing shields, and preventing defensive tools for a brief window.",
    example:
      "Wait for EMP before diving — Sombra's EMP shuts down Zenyatta's Transcendence and clears their shields.",
  },

  // ── Community Terms ──────────────────────────────────────────────────
  {
    term: "Meta",
    category: "Community",
    definition:
      "Most Effective Tactics Available. The current set of heroes, strategies, and compositions considered most powerful at a given point in the game's balance patch cycle.",
    example:
      "After the last patch, dive is back in the meta — D.Va and Winston are everywhere in high elo.",
  },
  {
    term: "Counter",
    category: "Community",
    definition:
      "A hero who has a kit advantage against another specific hero. Counters usually win 1v1 matchups and can shut down certain abilities entirely.",
    example:
      "Cassidy is a counter to Pharah — his hitscan Peacekeeper and Magnetic Grenade bring her down easily.",
  },
  {
    term: "Throw",
    category: "Community",
    definition:
      "Intentionally playing poorly or making decisions that cause your own team to lose. Can also be used casually to describe someone playing badly by accident.",
    example:
      "Don't throw the game — stop using Nano Boost on yourself and save it for the Genji.",
  },
  {
    term: "Tilt",
    category: "Community",
    definition:
      "Playing in an emotionally reactive, frustrated, or erratic way after a bad experience. Players on tilt make poor decisions and often become inconsistent.",
    example:
      "He went on full tilt after dying three times — started playing recklessly and lost the game for us.",
  },
  {
    term: "Smurf",
    category: "Community",
    definition:
      "An experienced player using a new or alternate account to play at a rank lower than their skill level, usually dominating less-experienced opponents.",
    example:
      "That Tracer is clearly a smurf — no one plays at a Gold rank with Radiant-level mechanics.",
  },
  {
    term: "Sandbagging",
    category: "Community",
    definition:
      "When a higher-ranked player deliberately performs poorly to stay in a lower rank, usually to avoid harder competition or to have an easier time climbing later.",
    example:
      "He's been stuck in Diamond for three seasons on purpose — obvious sandbagging.",
  },
  {
    term: "Griefing",
    category: "Community",
    definition:
      "Intentionally sabotaging your own team through malicious actions — standing at spawn, walking off cliffs, refusing to engage, or blocking allies.",
    example:
      "The Symmetra was griefing — she just placed her teleporter backwards into a wall the whole match.",
  },
  {
    term: "Value",
    category: "Community",
    definition:
      "The benefit gained from a hero, ability, position, or action. A play 'has value' if it meaningfully impacts the outcome of a fight.",
    example:
      "Don't just heal the tank — your Immortality Field gets more value if you drop it when the team is all taking damage.",
  },
  {
    term: "ADC",
    category: "Community",
    definition:
      "Attack Damage Carry. Borrowed from MOBAs. Sometimes used to describe a primary DPS hero who is supposed to carry the damage output of the team.",
    example:
      "Their Sojourn is their ADC — shut her down and their team falls apart.",
  },
  {
    term: "Peek",
    category: "Positioning",
    definition:
      "Briefly exposing yourself from cover to take a shot or assess an area, then retreating back to safety.",
    example:
      "Peek the corner quickly to bait out her cooldowns, then go in when they're on CD.",
  },
  {
    term: "Cooldown (CD)",
    category: "Mechanics",
    definition:
      "The time delay between uses of an ability. Managing cooldowns — both yours and the enemy's — is a key part of high-level Overwatch play.",
    example:
      "Wait for Sigma's Kinetic Grasp to be on cooldown before you dive — then he can't absorb the attack.",
  },
  {
    term: "Ult Tracking",
    category: "Strategy",
    definition:
      "Paying attention to which enemy ultimates are available based on how long they've been alive and how much damage they've taken. Teams with good ult tracking make fewer mistakes and waste fewer defensive cooldowns.",
    example:
      "Their Ana has been alive for three minutes — assume her Nano Boost is ready before you commit.",
  },
  {
    term: "Kite",
    category: "Strategy",
    definition:
      "Moving backward while continuing to attack, maintaining distance from an advancing enemy while still dealing damage.",
    example:
      "Kite the Reinhardt — stay at max range, chip him down, and retreat if he charges.",
  },
  {
    term: "Wipe",
    category: "Strategy",
    definition:
      "Eliminating the entire enemy team in a single fight. A clean wipe gives significant time and objective advantage.",
    example:
      "We wiped their whole team — push the payload now before they all respawn.",
  },
  {
    term: "Bubble",
    category: "Mechanics",
    definition:
      "Informal term for several protective shield-type abilities. Most commonly refers to Winston's Barrier Projector or Zarya's Particle Barrier.",
    example:
      "Winston, use your bubble before you dive — don't commit without it.",
  },
  {
    term: "Cleanse",
    category: "Mechanics",
    definition:
      "Removing a debuff, hack, or negative status effect from a teammate. Kiriko's Protection Suzu is the most prominent cleanse in the game.",
    example:
      "Kiriko cleansed the Anti-Nade off our Ana — saved her from the burst combo.",
  },
  {
    term: "Hack",
    category: "Mechanics",
    definition:
      "Sombra's ability to disable an enemy hero's active abilities for a short duration. A hacked hero cannot use abilities, passives, or activate their ultimate.",
    example:
      "Hack the Pharah before she flies — grounded Pharah is a free elimination.",
  },
  {
    term: "Sleep (Sleep Dart)",
    category: "Mechanics",
    definition:
      "Ana's targeted projectile that puts an enemy to sleep instantly. The sleeping enemy cannot move or take actions and takes doubled damage when woken. One of the strongest single-target CC abilities.",
    example:
      "Sleep the enemy Reinhardt before he Earthshatters — a sleeping tank is a dead tank.",
  },
  {
    term: "Sustain",
    category: "Strategy",
    definition:
      "The ability to stay alive over time through consistent healing rather than burst recovery. A comp with high sustain wins extended fights.",
    example:
      "Their Moira and Brigitte duo has incredible sustain — we can't out-brawl them. Switch to poke.",
  },
  {
    term: "Burst Heal",
    category: "Mechanics",
    definition:
      "A large amount of healing applied instantly rather than over time. Burst heals save heroes in critical situations but can't sustain through prolonged damage.",
    example:
      "Kiriko's burst heal from her kunai volley saved that Genji from certain death.",
  },
  {
    term: "Anti (Anti-Nade)",
    category: "Mechanics",
    definition:
      "Ana's Biotic Grenade ability. It creates a field that blocks healing on enemies hit while simultaneously amplifying healing received by allies hit. One of the most powerful ability combos in the game.",
    example:
      "Ana threw anti on their tank — focus him now while he can't be healed!",
  },
  {
    term: "Rez (Resurrect)",
    category: "Mechanics",
    definition:
      "Mercy's ability (Guardian Angel / part of Valkyrie) to resurrect a fallen teammate with full health. After being nerfed significantly since OW1, it now works while Mercy is in Valkyrie form.",
    example:
      "Their Mercy is going for a Rez on the Widowmaker — focus Mercy!",
  },
  {
    term: "LOS (Line of Sight)",
    category: "Communication",
    definition:
      "The unobstructed visual path between a player and a target. Used to describe what a player can currently see, whether they are visible to enemies, or whether a healer has a clear angle to reach a teammate. Breaking LOS by moving behind cover is a key survival skill.",
    example:
      "Get out of their LOS — you're getting sniped. / I can't heal you, you're out of my LOS.",
  },
  {
    term: "Ult Combo",
    category: "Strategy",
    definition:
      "Two or more ultimates used together because their effects synergise, making them far more powerful in combination than either would be alone. One ultimate sets up the conditions for another to deal maximum impact. Coordinating ult combos is one of the highest-level team skills in Overwatch.",
    example:
      "Zarya pops Graviton Surge to pull the enemy team together, then Hanzo fires Dragonstrike into the cluster for a team wipe.",
  },
  {
    term: "Over-Extend",
    category: "Positioning",
    definition:
      "Pushing too far ahead of the rest of the team, leaving yourself exposed and out of position. A single hero can over-extend alone or multiple teammates can do it together, but either way the result is the same — you are too far forward to be supported and become easy to pick off.",
    example:
      "Our tank over-extended past the choke and got collapsed on before we could help.",
  },
  {
    term: "One (One-Shot)",
    category: "Communication",
    definition:
      "A callout meaning an enemy hero is at critically low health and can be eliminated with a single shot or hit. Used to direct teammates to quickly finish off a target before they can be healed.",
    example:
      "Sigma is one!",
  },
];
