import Creature from "@/types/Creature";

// declare state
export type State = {
  creatures: Array<Creature>;
};

// initial state
export const state: State = {
  creatures: [
    {
      isPlayer: true,
      isDead: false,
      name: "Teth",
      initiative: 10,
      armorClass: 15,
      hitPoints: 40,
    },
    {
      isPlayer: true,
      isDead: false,
      name: "Regis",
      initiative: 5,
      armorClass: 19,
      hitPoints: 30,
    },
    {
      isPlayer: true,
      isDead: true,
      name: "Cicero",
      initiative: 20,
      armorClass: 16,
      hitPoints: 45,
    },
    {
      isPlayer: false,
      isDead: false,
      name: "Koios",
      initiative: 21,
      armorClass: 19,
      hitPoints: 81,
    },
  ],
};
