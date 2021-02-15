<template>
  <ion-modal
    :is-open="isAddCreatureOpenRef"
    css-class="my-custom-class"
    @onDidDismiss="setAddCreatureOpen(false)"
  >
    <AddCreatureModal
      :data="data"
      @closeModal="setAddCreatureOpen(false)"
    ></AddCreatureModal>
  </ion-modal>
  <ion-list ref="trackerListRef">
    <ion-list-header>
      <ion-button @click="setAddCreatureOpen(true)">
        <ion-label>Add</ion-label>
        <ion-icon :icon="addOutline" />
      </ion-button>
    </ion-list-header>

    <ion-item-sliding v-for="(creature, index) in getCreatures()" :key="index">
      <TrackerListItem 
        :creature="creature"
        @killCreature="killCreature(creature)"></TrackerListItem>
    </ion-item-sliding>
  </ion-list>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  IonListHeader,
  IonList,
  IonItemSliding,
  IonLabel,
  IonIcon,
  IonButton,
  IonModal
} from "@ionic/vue";
import {
  addOutline,
} from "ionicons/icons";
import AddCreatureModal from "@/components/AddCreatureModal.vue";
import TrackerListItem from "@/components/TrackerListItem.vue";
import Creature from "@/types/Creature.ts";

export default defineComponent({
  name: "Tracker",
  components: {
    IonList,
    IonListHeader,
    IonItemSliding,
    IonLabel,
    IonIcon,
    IonButton,
    IonModal,
    AddCreatureModal,
    TrackerListItem
  },
  setup() {
    const creatures: Creature[] = [
      {
        isPlayer: true,
        isDead: false,
        name: "Teth",
        initiative: 10,
        armorClass: 15,
        hitPoints: 40,
      },
      {
        isPlayer: true,
        isDead: false,
        name: "Regis",
        initiative: 5,
        armorClass: 19,
        hitPoints: 30,
      },
      {
        isPlayer: true,
        isDead: true,
        name: "Cicero",
        initiative: 20,
        armorClass: 16,
        hitPoints: 45,
      },
      {
        isPlayer: false,
        isDead: false,
        name: "Koios",
        initiative: 21,
        armorClass: 19,
        hitPoints: 81,
      },
    ];

    const isAddCreatureOpenRef = ref(false);
    const trackerListRef = ref();

    const setAddCreatureOpen = (state: boolean) => (isAddCreatureOpenRef.value = state);

    function getCreatures(): Creature[] {
      return creatures.sort((a, b) => b.initiative - a.initiative);
    }

    function killCreature(creature: Creature): void {
      console.log('Killed' + creature.name);
      creature.hitPoints = 0;
      creature.isDead = true;
      trackerListRef.value.$el.closeSlidingItems()
    }

    return {
      getCreatures,
      killCreature,
      addOutline,
      isAddCreatureOpenRef,
      setAddCreatureOpen,
      trackerListRef
    };
  },
});
</script>

<style scoped>
</style>