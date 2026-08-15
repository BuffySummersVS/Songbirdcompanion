export const SUBROLES = {
  // ── Tank ───────────────────────────────────────────
  "Initiator": {
    description:
      "Mobile tanks built to dive in first, disrupt the enemy backline, and get back out. Using a movement ability triggers a heal over time, rewarding aggressive engages and quick disengages over sitting still.",
    interaction:
      "Coordinates with Flanker DPS and Mobile Supports to isolate and pick off exposed targets before retreating.",
    rolePassive:
      "Gain a heal over time after using a specified movement ability.",
  },
  "Stalwart": {
    description:
      "Frontline anchors that plant themselves at the point of contact and hold it. Bonus knockback and slow resistance keep them from being displaced, letting them absorb pressure and control space for the team.",
    interaction:
      "Sets the pace of an engage and creates the space other heroes fight from. Pairs well with a healer who can sustain it through prolonged holds.",
    rolePassive:
      "Gain knockback and slow resistance.",
  },
  "Bruiser": {
    description:
      "Durable, self-sufficient tanks that thrive in close-range brawls. Resistance to critical hits and a burst of speed at low health let them stay in the fight and punish anyone who tries to finish them off.",
    interaction:
      "Strong at holding off-angles or trading independently of the rest of the tank line. Punishes overextension from squishier heroes.",
    rolePassive:
      "Gain resistance to critical hits. Move faster while below half health.",
  },

  // ── Damage ─────────────────────────────────────────
  "Recon": {
    description:
      "Heroes who trade raw damage for information. Hitting a low-health enemy reveals their position through walls, letting the team track and finish targets that try to disengage or hide.",
    interaction:
      "Turns skirmishes into snowballs by denying the enemy team the ability to retreat and heal up unseen. Valuable for calling out flanks and picks.",
    rolePassive:
      "Damaging enemies below half health reveals them.",
  },
  "Specialist": {
    description:
      "Heroes who reward securing eliminations with a brief reload speed boost, letting them chain kills and keep pressure up during a fight rather than stopping to reload.",
    interaction:
      "Strong in prolonged fights and chokepoint holds where eliminations come in bursts. Benefits from setup and control over the engagement.",
    rolePassive:
      "Eliminating an enemy briefly increases reload speed.",
  },
  "Sharpshooter": {
    description:
      "Precision-focused heroes who land critical hits to shorten their own movement ability cooldowns, letting good aim double as extra mobility and repositioning.",
    interaction:
      "Rewards players who can consistently land precise shots. Strong when the team can hold sightlines and create space to aim.",
    rolePassive:
      "Critical hits reduce your movement ability cooldowns.",
  },
  "Flanker": {
    description:
      "Mobile damage heroes who strike from unexpected angles and lean on health packs — which restore more health for them — to sustain themselves far from their own healers.",
    interaction:
      "Works best when tanks and primary DPS hold the enemy's attention, opening lanes to isolated supports and backline targets.",
    rolePassive:
      "Health packs restore more health.",
  },

  // ── Support ────────────────────────────────────────
  "Tactician": {
    description:
      "Utility-focused supports who can store ultimate charge past 100%, letting them bank a fully charged ultimate and pick the perfect moment to use it rather than being forced to spend it immediately.",
    interaction:
      "Enables coordinated, high-impact ultimate usage. Pairs well with teammates who can set up or capitalise on a well-timed ultimate.",
    rolePassive:
      "Store excess ultimate charge.",
  },
  "Survivor": {
    description:
      "Self-sufficient supports whose movement abilities kick off passive health regeneration, letting them reposition constantly while healing themselves without needing to stop and rely on a teammate.",
    interaction:
      "Thrives when playing at range or on the move rather than planted in one spot. Well suited to dive and poke compositions alike.",
    rolePassive:
      "Movement abilities start passive health regeneration.",
  },
  "Medic": {
    description:
      "Close-support healers whose own healing output heals them back, letting them sustain themselves in the middle of a fight simply by keeping their weapon on injured allies.",
    interaction:
      "Excels at close-range, high-throughput healing. Needs peel from tanks and teammates since its self-sustain depends on staying near the fight.",
    rolePassive:
      "Healing allies with your weapon also heals you.",
  },
};
