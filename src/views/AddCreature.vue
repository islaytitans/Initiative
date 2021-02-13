<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Add a Creature</ion-title>
        <ion-button slot="end" fill="clear" v-on:click="$emit('closeEvent')">
          <ion-label>Close</ion-label>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="container">
        <h2>Add a Creature</h2>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddCreature",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
  },
  emits: ['closeEvent'],
  setup() {

    return {};
  },
});
</script>

<style scoped>
</style>