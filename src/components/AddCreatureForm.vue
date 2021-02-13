<template>
  <ion-grid>
    <ion-row>
      <ion-col>
        <ion-item>
          <ion-label position="stacked">Name</ion-label>
          <ion-input v-model="name" autocomplete="off"></ion-input>
        </ion-item>
      </ion-col>
      <ion-col>
        <ion-item>
          <ion-label position="stacked">Initiative</ion-label>
          <ion-input
            v-model.number="initiative"
            autocomplete="off"
            type="number"
            max="99"
            min="-99"
          ></ion-input>
        </ion-item>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ion-button expand="block" fill="outline" v-on:click="addCreature">
          <ion-label>{{ addButtonText }}</ion-label>
          <ion-icon :icon="checkmarkOutline"></ion-icon>
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
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { checkmarkOutline } from "ionicons/icons";

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
  },
  setup() {
    const addButtonText = ref("Add");
    const name = ref("");
    const initiative = ref();

    function addCreature() {
      addButtonText.value = 'Added';
      console.log(name);
      console.log(initiative);
      setTimeout(() => {
        addButtonText.value = 'Add';
      }, 1000);
    }

    return {
      addButtonText,
      name,
      initiative,
      checkmarkOutline,
      addCreature,
    };
  },
});
</script>

<style scoped>
</style>