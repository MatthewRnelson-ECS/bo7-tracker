export const mapDatabase = [
  {
    id: "ashes-of-the-damned",
    name: "Ashes of the Damned",
    backgroundImage: "/AOTD-Background.webp", 
    quests: [
      {
        id: "main-quest",
        title: "Main Easter Egg",
        steps: [
          { text: "Unlock the Crypt doors" }
        ]
      }
    ]
  },
  {
    id: "astra-malorum",
    name: "Astra Malorum",
    backgroundImage: "/AM-Background.webp",
    quests: [
      {
        id: "main-quest",
        title: "Main Easter Egg",
        steps: [
          { text: "Initialize the telescope arrays." }
        ]
      }
    ]
  },
  {
    id: "paradox-junction",
    name: "Paradox Junction",
    backgroundImage: "/PJ-Background.webp",
    quests: [
      {
        id: "main-quest",
        title: "Main Easter Egg",
        steps: [
          { text: "Synchronize the 115 timeline clocks." }
        ]
      }
    ]
  },
  {
    id: "totenreich",
    name: "Totenreich",
    backgroundImage: "/TR-Background.webp",
    quests: [
      {
        id: "main-quest",
        title: "Main Easter Egg",
        steps: [
          { 
            text: "Turn on the 3 power switches (Bunker, Courtyard, Labs).",
            imageUrl: "/placeholder.jpg" 
          },
          { text: "Survive the lockdown sequence to unlock Pack-a-Punch" },
          { text: "Acquire the Jotunn Star.", linkId: "wonder-weapon", linkText: "View WW Build Guide" }
        ]
      },
      {
        id: "wonder-weapon",
        title: "Jotunn Star Guide",
        steps: [
          { text: "Obtain the dormant core from the crash site" }
        ]
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