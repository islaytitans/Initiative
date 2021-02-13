<template>
  <ion-grid>
    <ion-row>
      <ion-col size="6">
        <ion-item>
          <ion-label position="stacked">Name</ion-label>
          <ion-input autocomplete="off"></ion-input>
        </ion-item>
      </ion-col>
        <ion-col size="4">
          <ion-item>
            <ion-label position="stacked">Initiative</ion-label>
            <ion-input
              autocomplete="off"
              type="number"
              max="99"
              min="-99"
            ></ion-input>
          </ion-item>
        </ion-col>
      <ion-col size="1">
        <ion-button fill="clear">
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
import { defineComponent } from "vue";
import {
  checkmarkOutline
} from "ionicons/icons";

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
    return {
      checkmarkOutline
    };
  },
});
</script>

<style scoped>
</style>