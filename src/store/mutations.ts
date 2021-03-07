import { MutationTypes } from "@/store/mutationTypes";
import { State } from "@/store/state";
import Creature from "@/types/Creature";
import { MutationTree } from "vuex";

export type Mutations<S = State> = {
  [MutationTypes.AddCreature](state: S, payload: Creature): void;
  [MutationTypes.UpdateCreature](state: S, payload: Creature): void;
  [MutationTypes.RemoveCreature](state: S, payload: number): void;
  [MutationTypes.RemoveCreatures](state: S, payload: Array<Creature> | undefined): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.AddCreature](state: State, payload: Creature) {
    state.creatures.push(payload);
  },
  [MutationTypes.UpdateCreature](state: State, payload: Creature) {
    let creatureToUpdate: Creature | undefined = state.creatures.find(
      (c) => c.id === payload.id
    );
    if (creatureToUpdate !== undefined) {
      creatureToUpdate = payload;
    }
  },
  [MutationTypes.RemoveCreature](state: State, payload: number) {
    const creature = state.creatures.find((c) => c.id === payload);
    if (creature) {
      const index = state.creatures.indexOf(creature);
      if (index > -1) {
        state.creatures.splice(index, 1);
      }
    }
  },
  [MutationTypes.RemoveCreatures](state: State, payload: Array<Creature> | undefined) {
    state.creatures.splice(0, state.creatures.length);
  }
};
