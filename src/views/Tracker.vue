<template>
  <ion-list>
    <ion-item v-for="(creature, index) in creatures" :key="index">
      <ion-icon :icon="chevronForwardOutline" />
      <ion-label>{{ creature.initiative }}</ion-label>
      <ion-label>{{ creature.name }}</ion-label>
      <ion-icon :icon="shieldOutline" />
      <ion-label>{{ creature.armorClass }}</ion-label>
      <ion-icon :icon="heartOutline" />
      <ion-label>{{ creature.hitPoints }}</ion-label>
    </ion-item>
  </ion-list>
</template>


<script lang="ts">
import { IonList, IonItem, IonLabel, IonIcon } from "@ionic/vue";
import { heartOutline, shieldOutline, chevronForwardOutline } from "ionicons/icons";
import Creature from "@/types/Creature.ts";

export default {
  name: "Tracker",
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
  },
  setup() {
    const creatures: Creature[] = [
      { name: "Teth", initiative: 10, armorClass: 15, hitPoints: 40 },
      { name: "Regis", initiative: 5, armorClass: 19, hitPoints: 30 },
      { name: "Cicero", initiative: 20, armorClass: 16, hitPoints: 45 },
    ];

    return {
      creatures,
      heartOutline,
      shieldOutline,
      chevronForwardOutline
    };
  },
};
</script>

<style scoped>
</style>