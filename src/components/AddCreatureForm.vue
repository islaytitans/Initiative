<template>
  <ion-grid>
    <ion-row>
      <ion-col>
        <ion-item>
          <ion-label position="stacked">Name</ion-label>
          <ion-input v-model="name" autocomplete="off"></ion-input>
        </ion-item>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ion-item>
          <ion-label position="stacked">Initiative</ion-label>
          <ion-input
            v-model.number="initiative"
            autocomplete="off"
            type="number"
            max="99"
            min="-5"
          ></ion-input>
        </ion-item>
      </ion-col>
      <ion-col>
        <ion-item>
          <ion-label position="stacked">Hit Points</ion-label>
          <ion-input
            v-model.number="hitPoints"
            autocomplete="off"
            type="number"
            max="500"
            min="-99"
          ></ion-input>
        </ion-item>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ion-button expand="block" fill="outline" :color="addButtonColour" v-on:click="addCreature">
          <ion-icon :icon="checkmarkOutline"></ion-icon>
          <ion-label>{{ addButtonText }}</ion-label>
        </ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
import {
  IonCol,
  IonGrid,
  IonRow,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { checkmarkOutline } from "ionicons/icons";
import { useStore } from "@/store/index";
import { ActionTypes } from "@/store/actionTypes";
import Creature from "@/types/Creature";

export default defineComponent({
  name: "AddCreature",
  components: {
    IonCol,
    IonGrid,
    IonRow,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
  },
  setup() {
    const addButtonText = ref("Add");
    const addButtonColour = ref("");
    const name = ref("");
    const initiative = ref();
    const hitPoints = ref();
    const isPlayer = ref(false);

    const store = useStore();

    function addCreature() {
      addButtonText.value = "Added";
      addButtonColour.value = "success";
      const creature = {
        id: 400,
        name: name.value,
        initiative: initiative.value,
        hitPoints: hitPoints.value,
        isPlayer: isPlayer.value,
        isDefeated: false,
      } as Creature;
      store.dispatch(ActionTypes.AddCreature, creature);
      setTimeout(() => {
        addButtonText.value = "Add";
        addButtonColour.value = "";
      }, 1250);
    }

    return {
      addButtonText,
      addButtonColour,
      name,
      initiative,
      hitPoints,
      checkmarkOutline,
      addCreature,
    };
  },
});
</script>

<style scoped>
</style>