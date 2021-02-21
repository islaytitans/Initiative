import { ActionTypes } from "./actionTypes";
import Creature from "@/types/Creature";
import { Mutations } from "./mutations";
import { State } from "./state";
import { ActionContext, ActionTree } from "vuex";
import { MutationTypes } from "./mutationTypes";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

export interface Actions {
  [ActionTypes.AddCreature](
    { commit }: AugmentedActionContext,
    payload: Creature
  ): void;
  [ActionTypes.DefreatCreature](
    { commit }: AugmentedActionContext,
    payload: Creature
  ): void;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.AddCreature]({ commit }, payload: Creature) {
    commit(MutationTypes.AddCreature, payload);
  },
  [ActionTypes.DefreatCreature]({ commit }, payload: Creature) {
    payload.hitPoints = 0;
    payload.isDefeated = true;
    commit(MutationTypes.UpdateCreature, payload)
  }
};
