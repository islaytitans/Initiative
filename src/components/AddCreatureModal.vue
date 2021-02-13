<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Add a Creature</ion-title>
        <ion-button slot="end" fill="clear" v-on:click="$emit('closeModal')">
          <ion-label>Close</ion-label>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <AddCreatureForm></AddCreatureForm>
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
import AddCreatureForm from '@/components/AddCreatureForm.vue';

export default defineComponent({
  name: "AddCreature",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    AddCreatureForm
  },
  emits: ['closeModal'],
  setup() {

    return {};
  },
});
</script>

<style scoped>
</style>