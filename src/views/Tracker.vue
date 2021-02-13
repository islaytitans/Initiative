<template>
  <ion-list>
    <ion-list-header>
      Roll for Initiative
      <ion-button>
        <ion-icon :icon="addOutline" slot="icon-only" />
      </ion-button>
    </ion-list-header>

    <ion-item v-for="(creature, index) in getCreatures()" :key="index">
      <ion-icon
        :icon="chevronForwardOutline"
        :color="getStatusColor(creature.isDead)"
      />
      <ion-label :color="getStatusColor(creature.isDead)">{{
        creature.initiative
      }}</ion-label>

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
  </ion-list>
</template>


<script lang="ts">
import {
  IonListHeader,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton,
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

export default {
  name: "Tracker",
  components: {
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonIcon,
    IonButton,
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

    function getCreatureIcon(isPlayer: boolean, isDead: boolean) {
      if (isDead) {
        return skullOutline;
      } else if (isPlayer) {
        return bodyOutline;
      } else {
        return pawOutline;
      }
    }

    function getCreatures() {
      return creatures.sort((a, b) => b.initiative - a.initiative);
    }

    function getStatusColor(isDead: boolean) {
      return isDead ? 'danger' : '';
    }

    return {
      getCreatureIcon,
      getCreatures,
      getStatusColor,
      heartOutline,
      shieldOutline,
      chevronForwardOutline,
      addOutline,
    };
  },
};
</script>

<style scoped>
</style>