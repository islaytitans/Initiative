<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Add a Creature</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h2>Hello There</h2>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tracker",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  setup() {
      return {
          
      }
  }
})
</script>

<style scoped>
</style>