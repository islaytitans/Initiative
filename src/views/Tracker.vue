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

        <ion-icon
          :icon="heartOutline"
          :color="getStatusColor(creature.isDead)"
        />
        <ion-label :color="getStatusColor(creature.isDead)">
          {{ creature.isDead ? 0 : creature.hitPoints }} /
          {{ creature.hitPoints }}
        </ion-label>
      </ion-item>

      <ion-item-options side="end" @ionSwipe="killCreature(index)">
        <ion-item-option color="danger">
          <ion-icon
            :icon="skullOutline"
            @click="killCreature(index)"
          />
        </ion-item-option>
      </ion-item-options>
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
  IonModal,
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
import AddCreatureModal from "@/components/AddCreatureModal.vue";
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
    IonItem,
    IonItemOptions,
    IonItemOption,
    AddCreatureModal,
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
    const setAddCreatureOpen = (state: boolean) =>
      (isAddCreatureOpenRef.value = state);
    const trackerListRef = ref();

    function getCreatureIcon(isPlayer: boolean, isDead: boolean): string {
      if (isDead) {
        return skullOutline;
      } else if (isPlayer) {
        return bodyOutline;
      } else {
        return pawOutline;
      }
    }

    function getCreatures(): Creature[] {
      return creatures.sort((a, b) => b.initiative - a.initiative);
    }

    function getStatusColor(isDead: boolean): string {
      return isDead ? "danger" : "";
    }

    function killCreature(index: number): void {
      console.log('Killed' + index);
      const killedCreature = getCreatures()[index];
      killedCreature.hitPoints = 0;
      killedCreature.isDead = true;
      trackerListRef.value.$el.closeSlidingItems()
    }

    return {
      getCreatureIcon,
      getCreatures,
      getStatusColor,
      killCreature,
      heartOutline,
      shieldOutline,
      chevronForwardOutline,
      addOutline,
      skullOutline,
      isAddCreatureOpenRef,
      setAddCreatureOpen,
      trackerListRef
    };
  },
});
</script>

<style scoped>
</style>