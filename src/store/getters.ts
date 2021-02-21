import Creature from "@/types/Creature";
import { GetterTree } from "vuex";
import { State } from "./state";

export type Getters = {
  getCreatures(state: State): Array<Creature>;
};

export const getters: GetterTree<State, State> & Getters = {
  getCreatures: (state) => {
    console.log("state", state.creatures);
    return state.creatures.sort((a, b) => b.initiative - a.initiative);
  },
};
