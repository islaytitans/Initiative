import { MutationTypes } from "@/store/mutationTypes";
import { State } from "@/store/state";
import Creature from "@/types/Creature";
import { MutationTree } from "vuex";

export type Mutations<S = State> = {
  [MutationTypes.AddCreature](state: S, payload: Creature): void;
  [MutationTypes.UpdateCreature](state: S, payload: Creature): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.AddCreature](state: State, payload: Creature) {
    state.creatures.push(payload);
  },
  [MutationTypes.UpdateCreature](state: State, payload: Creature) {
    let creatureToUpdate: Creature | undefined = state.creatures.find(c => c.id === payload.id);
    if (creatureToUpdate !== undefined) {
      creatureToUpdate = payload;
    }
  }
};
