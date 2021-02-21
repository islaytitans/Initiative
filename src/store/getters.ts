import Creature from "@/types/Creature";
import { GetterTree } from "vuex";
import { State } from "./state";

export type Getters = {
  getCreatures(state: State): Array<Creature>;
  getCreature(state: State, id: number): Creature | undefined;
};

export const getters: GetterTree<State, State> & Getters = {
  getCreatures: (state) => {
    return state.creatures.sort((a, b) => b.initiative - a.initiative);
  },
  getCreature: (state, id) => {
    return state.creatures.find(c => c.id === id)
  }
};
