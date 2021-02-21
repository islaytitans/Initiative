import Creature from "@/types/Creature";

// declare state
export type State = {
  creatures: Array<Creature>;
};

// initial state
export const state: State = {
  creatures: [
    {
      id: 1,
      isPlayer: true,
      isDefeated: false,
      name: "Teth",
      initiative: 10,
      armorClass: 15,
      hitPoints: 40,
    },
    {
      id: 2,
      isPlayer: true,
      isDefeated: false,
      name: "Regis",
      initiative: 5,
      armorClass: 19,
      hitPoints: 30,
    },
    {
      id: 3,
      isPlayer: true,
      isDefeated: true,
      name: "Cicero",
      initiative: 20,
      armorClass: 16,
      hitPoints: 45,
    },
    {
      id: 4,
      isPlayer: false,
      isDefeated: false,
      name: "Koios",
      initiative: 21,
      armorClass: 19,
      hitPoints: 81,
    },
  ],
};
