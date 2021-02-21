import { ActionTypes } from "./actionTypes";
import Creature from "@/types/Creature";
import { Mutations } from "./mutations";
import { State } from "./state";
import { ActionContext, ActionTree } from "vuex";
import { MutationTypes } from "./mutationTypes";

type AugmentedactionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

export interface Actions {
  [ActionTypes.SetCreatures](
    { commit }: AugmentedactionContext,
    payload: Creature
  ): void;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.SetCreatures]({ commit }, payload: Creature) {
    commit(MutationTypes.AddCreature, payload);
  },
};
