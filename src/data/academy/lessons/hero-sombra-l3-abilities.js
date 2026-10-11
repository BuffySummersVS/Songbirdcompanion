export default {
  id: 'hero-sombra-l3-abilities',
  pathId: 'hero-sombra',
  title: 'Sombra: Core Abilities',
  subtitle: 'How to use Sombra\'s active abilities effectively',
  difficulty: 5,
  xp: 55,
  estimatedMinutes: 8,
  content: [
    {
      type: 'text',
      body: 'Sombra\'s abilities form the backbone of her kit. Each ability has a defined cooldown and role — understanding when to use them separates good Sombra players from great ones.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Cyberspace (Area heal / Weaken zone)',
      body: 'Cooldown: 12 seconds · Damage: 40 explosion + 25 per second; heals allies 40 + 30 per second · Launches a projectile that bursts into a 5-metre zone for 3 seconds. Enemies inside are Weakened, halving their own damage and healing output.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Translocator (Mobility / stealth)',
      body: 'Cooldown: 7.5 seconds · Damage: None · Throws a beacon (12.25 m range) and teleports to it, gaining an immediate speed boost. Teleporting grants 6.5 seconds of stealth after a 0.75-second fade.',
    },
    {
      type: 'callout',
      variant: 'info',
      title: 'Hotfix (Secondary fire)',
      body: 'Cooldown: 8 seconds (2 charges) · Heals an ally for 65 instantly plus 25 per second. Usable while stealthed, but it briefly reveals Sombra.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Ability Combos',
      body: 'Translocate to a safe angle, then fire Cyberspace onto the enemy frontline so your tank fights Weakened opponents while standing in the healing zone. Save one Hotfix charge for whoever gets focused next.',
    },
  ],
  quiz: {
    passMark: 0.75,
    questions: [
      {
        id: 'q1',
        text: 'What does Weaken do?',
        options: [
          { id: 'a', text: 'Slows the target by 50%' },
          { id: 'b', text: 'Halves the target\'s own damage and healing output' },
          { id: 'c', text: 'Reveals the target through walls' },
          { id: 'd', text: 'Prevents the target from being healed' },
        ],
        correctId: 'b',
        explanation: 'Weaken, applied by Cyberspace, halves the target\'s damage and healing output.',
      },
      {
        id: 'q2',
        text: 'What is the cooldown on Translocator?',
        options: [
          { id: 'a', text: '6 seconds' },
          { id: 'b', text: '7.5 seconds' },
          { id: 'c', text: '10 seconds' },
          { id: 'd', text: '12 seconds' },
        ],
        correctId: 'b',
        explanation: 'Translocator has a 7.5-second cooldown since Season 5.',
      },
      {
        id: 'q3',
        text: 'Which ability was removed from Sombra in Season 5?',
        options: [
          { id: 'a', text: 'Translocator' },
          { id: 'b', text: 'EMP' },
          { id: 'c', text: 'Hack' },
          { id: 'd', text: 'Machine Pistol' },
        ],
        correctId: 'c',
        explanation: 'Hack was removed. Hotfix took over its role, and Cyberspace and Weaken were added.',
      },
    ],
  },
};