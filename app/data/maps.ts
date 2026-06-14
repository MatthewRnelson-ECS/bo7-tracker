export const mapDatabase = [
  {
    id: "ashes-of-the-damned",
    name: "Ashes of the Damned",
    backgroundImage: "/AOTD-Background.webp", 
    quests: [
      {
        id: "pap",
        title: "Pack-a-Punch Guide",
        steps: [
          { 
            text: "Investigate the Server Room",
            subSteps: [
              "Open the door (1250 essence) directly across from Janus Tower.",
              "Melee the small circle grate at the opposite corner from Quick Revive.",
              "Pick up the T.E.D.D.'s Head."
            ]
          },
          { 
            text: "Revive Ol' Tessie",
            subSteps: [
              "Take the head to the truck beside the building and assemble the head to the truck holding the interact button."
            ]
          },
          { 
            text: "Restore Power to Power Pump #1 (Blackwater Lake)",
            subSteps: [
              "You can head to either the left or right, but it is recommended to head to the left to Blackwater Lake.",
              "Upon arrival, shoot the orange corruption off of the pump within the time limit while avoiding the zombies that will spawn during this timed event.",
              "Open the cabin doors (1750 essence) and go upstairs to the left at the top landing to turn on the breaker to finish restoring power at this location."
            ],
            tip: "Avoid the orange bulbs while running over the yellow bulbs for additional essence or even salvage. It is also suggested that you grab the Jar of Spores within the kitchen downstairs prior to leaving if you are planning on doing the Main Easter Egg."
          },
          { 
            text: "Restore Power to Power Pump #2 (Ashwood)",
            subSteps: [
              "Drive Ol' Tessie through the other end of Blackwater Lake to Ashwood.",
              "Ascend the rope on the left after entering the basin of Ashwood and open the door to the right (1000 essence).",
              "Proceed through and open the barrier leading to the Ashwood Bridge (1750 essence).",
              "Repeat the previous steps for turning on the Power Pump as before.",
              "Flip the breaker on the pedestal on the Bridge."
            ]
          },
          { 
            text: "Install the Pack-A-Punch",
            subSteps: [
              "Go back down to the basin and drive Ol' Tessie into the garage that has now opened with power turned on.",
              "Walk over to the crafting table on the right hand back corner of the garage and assemble the Pack-A-Punch machine onto the back of Ol' Tessie."
            ]
          }
        ]
      },
      {
        id: "wonder-weapon",
        title: "Necrofluid Gauntlet Guide",
        steps: [
          { 
            text: "Step 1: Obtain the empty gauntlet frame from the central Crypt.",
            imageUrl: "/aotd-gauntlet-frame.webp"
          },
          { 
            text: "Step 2: Siphon necrofluid from the 3 marked graves around the map.",
            imageUrl: "/aotd-grave-locations.webp"
          },
          { text: "Step 3: Return to the Altar of the Damned to charge the weapon with souls." }
        ]
      },
      {
        id: "main-quest",
        title: "Main Easter Egg",
        steps: [
          { text: "Unlock the Crypt doors" },
          { text: "Acquire the Necrofluid Gauntlet.", linkId: "wonder-weapon", linkText: "View WW Build Guide" }
        ]
      },
      {
        id: "side-quests",
        title: "Side Easter Eggs",
        steps: [
          { text: "Activate the 3 radios to play the hidden musical easter egg." },
          { text: "Shoot the 5 hidden ravens for a free Max Ammo." }
        ]
      },
      {
        id: "relics",
        title: "Relics",
        type: "relics",
        relics: [
          {
            id: "aotd-relic-pen",
            name: "Lawyer's Pen",
            difficulty: "grim",
            symbolUrl: "/LawyerPenIcon.png",
            fallbackSymbol: "🖋️",
            steps: ["Add steps for Lawyer's Pen here..."]
          },
          {
            id: "aotd-relic-wings",
            name: "Dragon Wings",
            difficulty: "grim",
            symbolUrl: "/DragonWingIcon.png",
            fallbackSymbol: "🪽",
            steps: ["Add steps for Dragon Wings here..."]
          },
          {
            id: "aotd-relic-teddy",
            name: "Teddy Bear",
            difficulty: "grim",
            symbolUrl: "/TeddyBearIcon.png",
            fallbackSymbol: "🧸",
            steps: ["Add steps for Teddy Bear here..."]
          },
          {
            id: "aotd-relic-vril",
            name: "Vril Sphere",
            difficulty: "sinister",
            symbolUrl: "/VrilSphereIcon.png",
            fallbackSymbol: "🔮",
            steps: ["Add steps for Vril Sphere here..."]
          },
          {
            id: "aotd-relic-drawing",
            name: "Samantha's Drawing",
            difficulty: "sinister",
            symbolUrl: "/SamanthaDrawingIcon.webp",
            fallbackSymbol: "🖍️",
            steps: ["Add steps for Samantha's Drawing here..."]
          },
          {
            id: "aotd-relic-stone",
            name: "Focusing Stone",
            difficulty: "sinister",
            symbolUrl: "/FocusingStoneIcon.png",
            fallbackSymbol: "💎",
            steps: ["Add steps for Focusing Stone here..."]
          },
          {
            id: "aotd-relic-bus",
            name: "Tranzit Bus",
            difficulty: "wicked",
            symbolUrl: "/TranzitBusIcon.png",
            fallbackSymbol: "🚌",
            steps: ["Add steps for Tranzit Bus here..."]
          },
          {
            id: "aotd-relic-vials",
            name: "Blood Vials",
            difficulty: "wicked",
            symbolUrl: "/BloodVialsIcon.png",
            fallbackSymbol: "🩸",
            steps: ["Add steps for Blood Vials here..."]
          },
          {
            id: "aotd-relic-dragon",
            name: "Dragon",
            difficulty: "wicked",
            symbolUrl: "/DragonHeadIcon.png",
            fallbackSymbol: "🐉",
            steps: ["Add steps for the Dragon here..."]
          }
        ],
        steps: []
      }
    ]
  },
  {
    id: "astra-malorum",
    name: "Astra Malorum",
    backgroundImage: "/AM-Background.webp",
    quests: [
      {
        id: "pap",
        title: "Pack-a-Punch Guide",
        steps: [
          { text: "Step 1: Reroute the power from the Solar Arrays." },
          { text: "Step 2: Defend the central terminal to assemble the machine." }
        ]
      },
      {
        id: "wonder-weapon",
        title: "LMG-1 Guide",
        steps: [
          { 
            text: "Step 1: Collect the heavy barrel from the Armory lockers.",
            imageUrl: "/astra-barrel-location.webp"
          },
          { text: "Step 2: Defeat the first Heavy Mech to obtain the plasma battery." },
          { 
            text: "Step 3: Take the parts to the workbench in the Hangar to assemble the LMG-1.",
            imageUrl: "/astra-workbench.webp"
          }
        ]
      },
      {
        id: "main-quest",
        title: "Main Easter Egg",
        steps: [
          { text: "Initialize the telescope arrays." },
          { text: "Assemble the LMG-1.", linkId: "wonder-weapon", linkText: "View WW Build Guide" }
        ]
      },
      {
        id: "side-quests",
        title: "Side Easter Eggs",
        steps: [
          { text: "Find the 4 glowing meteors to unlock the secret calling card." }
        ]
      },
      {
        id: "relics",
        title: "Relics",
        type: "relics",
        relics: [
          {
            id: "astra-relic-gong",
            name: "Gong",
            difficulty: "grim",
            symbolUrl: "/GongIcon.png",
            fallbackSymbol: "🔔",
            steps: ["Add steps for Gong here..."]
          },
          {
            id: "astra-relic-seed",
            name: "Seed",
            difficulty: "grim",
            symbolUrl: "/SeedIcon.png",
            fallbackSymbol: "🌱",
            steps: ["Add steps for Seed here..."]
          },
          {
            id: "astra-relic-spider",
            name: "Spider Fang",
            difficulty: "sinister",
            symbolUrl: "/SpiderFangIcon.png",
            fallbackSymbol: "🕷️",
            steps: ["Add steps for Spider Fang here..."]
          },
          {
            id: "astra-relic-doll",
            name: "Matryoshka Doll",
            difficulty: "sinister",
            symbolUrl: "/MatryoshkaDollIcon.png",
            fallbackSymbol: "🪆",
            steps: ["Add steps for Matryoshka Doll here..."]
          },
          {
            id: "astra-relic-spork",
            name: "Golden Spork",
            difficulty: "wicked",
            symbolUrl: "/GoldenSporkIcon.png",
            fallbackSymbol: "🥄",
            steps: ["Add steps for Golden Spork here..."]
          },
          {
            id: "astra-relic-civil",
            name: "Civil Protector Head",
            difficulty: "wicked",
            symbolUrl: "/CivilProtectorHeadIcon.png",
            fallbackSymbol: "🤖",
            steps: ["Add steps for Civil Protector Head here..."]
          }
        ],
        steps: []
      }
    ]
  },
  {
    id: "paradox-junction",
    name: "Paradox Junction",
    backgroundImage: "/PJ-Background.webp",
    quests: [
      {
        id: "pap",
        title: "Pack-a-Punch Guide",
        steps: [
          { text: "Step 1: Travel through the 1920s rift to find the crank." },
          { text: "Step 2: Attach the crank to the projector in the theater." }
        ]
      },
      {
        id: "wonder-weapon",
        title: "Blundergat Guide",
        steps: [
          { 
            text: "Step 1: Collect the 5 spectral skulls hidden around the junction.",
            imageUrl: "/paradox-skull-locations.webp"
          },
          { text: "Step 2: Claim the Blundergat from the Warden's desk." },
          { 
            text: "Optional: Upgrade to the Sweeper via the Acid Gat Kit.",
            imageUrl: "/paradox-acid-kit.webp"
          }
        ]
      },
      {
        id: "main-quest",
        title: "Main Easter Egg",
        steps: [
          { text: "Synchronize the 115 timeline clocks." },
          { text: "Obtain the Blundergat.", linkId: "wonder-weapon", linkText: "View WW Build Guide" }
        ]
      },
      {
        id: "side-quests",
        title: "Side Easter Eggs",
        steps: [
          { text: "Complete the jazz club lockdown for a free perk." }
        ]
      },
      {
        id: "relics",
        title: "Relics",
        type: "relics",
        relics: [
          {
            id: "paradox-relic-rocket",
            name: "Rocket",
            difficulty: "grim",
            symbolUrl: "/RocketIcon.png",
            fallbackSymbol: "🚀",
            steps: ["Add steps for Rocket here..."]
          },
          {
            id: "paradox-relic-key",
            name: "Summoning Key",
            difficulty: "sinister",
            symbolUrl: "/SummoningKeyIcon.png",
            fallbackSymbol: "🗝️",
            steps: ["Add steps for Summoning Key here..."]
          },
          {
            id: "paradox-relic-mangler",
            name: "Mangler Helmet",
            difficulty: "wicked",
            symbolUrl: "/ManglerHelmetIcon.png",
            fallbackSymbol: "🪖",
            steps: ["Add steps for Mangler Helmet here..."]
          }
        ],
        steps: []
      }
    ]
  },
  {
    id: "totenreich",
    name: "Totenreich",
    backgroundImage: "/TR-Background.webp",
    quests: [
      {
        id: "pap",
        title: "Pack-a-Punch Guide",
        steps: [
          { 
            text: "Step 1: Turn on the 3 power switches (Bunker, Courtyard, Labs).",
            imageUrl: "/totenreich-power-switches.webp" 
          },
          { text: "Step 2: Survive the lockdown sequence in the central hub to unlock the Pack-a-Punch cage." }
        ]
      },
      {
        id: "wonder-weapon",
        title: "Jotunn Star Guide",
        steps: [
          { 
            text: "Step 1: Obtain the Dormant Core from the burning crash site.",
            imageUrl: "/jotunn-step1-core.webp"
          },
          { 
            text: "Step 2: Place the core in the Cryo-Chamber in the Labs and defend it for 60 seconds.",
            imageUrl: "/jotunn-step2-cryo.webp"
          },
          { 
            text: "Step 3: Collect 3 Frozen Souls from special frost enemies using the provided containment device."
          },
          { 
            text: "Step 4: Return to the Cryo-Chamber to forge the Jotunn Star.",
            imageUrl: "/jotunn-step4-forge.webp"
          }
        ]
      },
      {
        id: "main-quest",
        title: "Main Easter Egg",
        steps: [
          { text: "Ensure Pack-a-Punch is unlocked and active." },
          { text: "Acquire the Jotunn Star.", linkId: "wonder-weapon", linkText: "View WW Build Guide" }
        ]
      },
      {
        id: "side-quests",
        title: "Side Easter Eggs",
        steps: [
          { text: "Shoot the 3 hidden snowmen with an upgraded weapon for a free Ray Gun." }
        ]
      },
      {
        id: "relics",
        title: "Relics",
        type: "relics",
        relics: [
          {
            id: "toten-relic-switch",
            name: "Power Switch",
            difficulty: "grim",
            symbolUrl: "/PowerSwitchIcon.png",
            fallbackSymbol: "🔌",
            steps: ["Add steps for Power Switch here..."]
          },
          {
            id: "toten-relic-belt",
            name: "Wrestler's Belt",
            difficulty: "grim",
            symbolUrl: "/WrestlersBeltIcon.png",
            fallbackSymbol: "🏆",
            isUndiscovered: true, // This triggers the red box!
            steps: [] 
          },
          {
            id: "toten-relic-elephant",
            name: "Stuffed Elephant",
            difficulty: "sinister",
            symbolUrl: "/StuffedElephantIcon.png",
            fallbackSymbol: "🐘",
            steps: ["Add steps for Stuffed Elephant here..."]
          },
          {
            id: "toten-relic-arnie",
            name: "Dancing Arnie",
            difficulty: "sinister",
            symbolUrl: "/DancingArnieIcon.png",
            fallbackSymbol: "🐙",
            steps: ["Add steps for Dancing Arnie here..."]
          },
          {
            id: "toten-relic-agarthan",
            name: "Agarthan Device",
            difficulty: "wicked",
            symbolUrl: "/AgarthanDeviceIcon.png",
            fallbackSymbol: "🌐",
            steps: ["Add steps for Agarthan Device here..."]
          },
          {
            id: "toten-relic-music",
            name: "Music Box",
            difficulty: "wicked",
            symbolUrl: "/MusicBoxIcon.png",
            fallbackSymbol: "🎶",
            steps: ["Add steps for Music Box here..."]
          }
        ],
        steps: []
      }
    ]
  },
  {
    id: "kowakujo",
    name: "Kowakujo",
    isUpcoming: true,
    previewImage: "/KK-Background.jpg", 
    backgroundImage: "/KK-Background.jpg", 
    quests: []
  }
];