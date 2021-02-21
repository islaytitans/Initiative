<template>
  <ion-item>
    <ion-icon :icon="chevronForwardOutline" :color="getStatusColor" />
    <ion-label :color="getStatusColor">
      {{ creature.initiative }}
    </ion-label>

    <ion-icon :icon="getCreatureIcon" :color="getStatusColor" />
    <ion-label :color="getStatusColor">
      <h3>{{ creature.name }}</h3>
      <p>
        <ion-icon :icon="shieldOutline" />
        {{ creature.armorClass }}
      </p>
    </ion-label>

    <ion-icon :icon="heartOutline" :color="getStatusColor" />
    <ion-label :color="getStatusColor">
      {{ creature.isDefeated ? 0 : creature.hitPoints }} /
      {{ creature.hitPoints }}
    </ion-label>
  </ion-item>
  <ion-item-options side="end" @ionSwipe="defeatCreature(creature)">
    <ion-item-option color="danger">
      <ion-icon :icon="skullOutline" @click="defeatCreature(creature)" />
    </ion-item-option>
  </ion-item-options>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue";
import {
  IonLabel,
  IonIcon,
  IonItem,
  IonItemOptions,
  IonItemOption,
} from "@ionic/vue";
import {
  heartOutline,
  shieldOutline,
  chevronForwardOutline,
  bodyOutline,
  pawOutline,
  skullOutline,
  addOutline,
} from "ionicons/icons";
import Creature from "@/types/Creature.ts";
import { useStore } from '@/store/index';
import { ActionTypes } from '@/store/actionTypes';

export default defineComponent({
  name: "TrackerListItem",
  components: {
    IonLabel,
    IonIcon,
    IonItem,
    IonItemOptions,
    IonItemOption,
  },
  props: ["creature"],
  //emits: ["closeSlidingItems"],
  setup(props) {
    const { creature } = toRefs(props);

    const getCreatureIcon = computed((): string => {
      if (creature.value.isDefeated) {
        return skullOutline;
      } else if (creature.value.isPlayer) {
        return bodyOutline;
      } else {
        return pawOutline;
      }
    });

    const getStatusColor = computed((): string => {
      return creature.value.isDefeated ? "danger" : "";
    });

    const store = useStore();

    function defeatCreature(creature: Creature): void {
      console.log('Defeated' + creature.name);
      store.dispatch(ActionTypes.DefreatCreature, creature);
      //trackerListRef.value.$el.closeSlidingItems()
    }

    return {
      getCreatureIcon,
      getStatusColor,
      defeatCreature,
      heartOutline,
      shieldOutline,
      chevronForwardOutline,
      addOutline,
      skullOutline,
    };
  },
});
</script>

<style scoped>
</style>