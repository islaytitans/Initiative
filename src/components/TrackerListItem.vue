<template>
  <ion-item>
    <ion-icon
      :icon="chevronForwardOutline"
      :color="getStatusColor(creature.isDead)"
    />
    <ion-label :color="getStatusColor(creature.isDead)">
      {{ creature.initiative }}
    </ion-label>

    <ion-icon
      :icon="getCreatureIcon(creature.isPlayer, creature.isDead)"
      :color="getStatusColor(creature.isDead)"
    />
    <ion-label :color="getStatusColor(creature.isDead)">
      <h3>{{ creature.name }}</h3>
      <p>
        <ion-icon :icon="shieldOutline" />
        {{ creature.armorClass }}
      </p>
    </ion-label>

    <ion-icon :icon="heartOutline" :color="getStatusColor(creature.isDead)" />
    <ion-label :color="getStatusColor(creature.isDead)">
      {{ creature.isDead ? 0 : creature.hitPoints }} /
      {{ creature.hitPoints }}
    </ion-label>
  </ion-item>
  <ion-item-options side="end" @ionSwipe="emit('killCreature(creature)')">
    <ion-item-option color="danger">
      <ion-icon :icon="skullOutline" @click="emit('killCreature(creature)')" />
    </ion-item-option>
  </ion-item-options>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
  emits: ['killCreature'],
  setup() {
    function getCreatureIcon(isPlayer: boolean, isDead: boolean): string {
      if (isDead) {
        return skullOutline;
      } else if (isPlayer) {
        return bodyOutline;
      } else {
        return pawOutline;
      }
    }

    function getStatusColor(isDead: boolean): string {
      return isDead ? "danger" : "";
    }

    return {
      getCreatureIcon,
      getStatusColor,
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