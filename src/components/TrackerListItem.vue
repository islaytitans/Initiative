<template>
  <ion-item-sliding>
    <ion-list>
      <ion-item>
        <ion-icon :icon="chevronForwardOutline" :color="statusColor" />
        <ion-label :color="statusColor">
          {{ creature.initiative }}
        </ion-label>

        <ion-icon :icon="creatureIcon" :color="statusColor" />
        <ion-label :color="statusColor">
          <h3>{{ creature.name }}</h3>
          <p v-if="creature.armorClass">
            <ion-icon :icon="shieldOutline" />
            {{ creature.armorClass }}
          </p>
        </ion-label>

        <ion-icon
          :icon="heartOutline"
          :color="statusColor"
          v-if="creature.hitPoints"
        />
        <ion-label :color="statusColor" v-if="creature.hitPoints">
          {{ creature.isDefeated ? 0 : creature.hitPoints }}
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Hit Points</ion-label>
        <ion-input type="number" v-model.number="hitPoints"></ion-input>
      </ion-item>
    </ion-list>

    <ion-item-options side="end" @ionSwipe="defeatCreature(creature)">
      <ion-item-option color="danger">
        <ion-icon
          slot="top"
          :icon="trashOutline"
          @click="removeCreature(creature)"
        />
        Remove
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRefs, watch } from "vue";
import {
  IonLabel,
  IonIcon,
  IonItem,
  IonItemOptions,
  IonItemOption,
  IonItemSliding,
  IonInput,
} from "@ionic/vue";
import {
  heartOutline,
  shieldOutline,
  chevronForwardOutline,
  bodyOutline,
  pawOutline,
  skullOutline,
  addOutline,
  trashOutline,
} from "ionicons/icons";
import Creature from "@/types/Creature";
import { useStore } from "@/store/index";
import { ActionTypes } from "@/store/actionTypes";

export default defineComponent({
  name: "TrackerListItem",
  components: {
    IonLabel,
    IonIcon,
    IonItem,
    IonItemOptions,
    IonItemOption,
    IonItemSliding,
    IonInput,
  },
  props: ["creature"],
  //emits: ["closeSlidingItems"],
  setup(props) {
    const { creature } = toRefs(props);
    const hitPoints = ref(creature.value.hitPoints);

    const creatureIcon = computed((): string => {
      if (creature.value.isDefeated) {
        return skullOutline;
      } else if (creature.value.isPlayer) {
        return bodyOutline;
      } else {
        return pawOutline;
      }
    });

    const statusColor = computed((): string => {
      return creature.value.isDefeated ? "danger" : "";
    });

    const store = useStore();

    function defeatCreature(creature: Creature): void {
      console.log(`Defeated - ${creature.id}`);
      store.dispatch(ActionTypes.DefreatCreature, creature);
      //trackerListRef.value.$el.closeSlidingItems()
    }

    function removeCreature(creature: Creature): void {
      console.log(`Removed - ${creature.id}`);
      store.dispatch(ActionTypes.RemoveCreature, creature.id);
    }

    watch(hitPoints, (hitPoints: number, prevHitPoints: number) => {
      console.log(
        "Hit points changed - " + hitPoints + ". Previous - " + prevHitPoints
      );
      creature.value.hitPoints = hitPoints;
      store.dispatch(ActionTypes.ChangeCreatureHitPoints, creature.value);
    });

    return {
      hitPoints,
      creatureIcon,
      statusColor,
      defeatCreature,
      removeCreature,
      heartOutline,
      shieldOutline,
      chevronForwardOutline,
      addOutline,
      skullOutline,
      trashOutline,
    };
  },
});
</script>

<style scoped></style>
