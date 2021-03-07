<template>
  <ion-modal
    :is-open="isAddCreatureOpenRef"
    css-class="my-custom-class"
    @onDidDismiss="setAddCreatureOpen(false)"
  >
    <AddCreatureModal
      @closeModal="setAddCreatureOpen(false)"
    ></AddCreatureModal>
  </ion-modal>
  <ion-list ref="trackerListRef">
    <ion-list-header>
      <ion-button @click="setAddCreatureOpen(true)">
        <ion-icon :icon="addOutline" />
        <ion-label>Add a creature</ion-label>
      </ion-button>
      <ion-button @click="removeCreatures()">
        <ion-icon :icon="trashOutline" />
        <ion-label>Remove all</ion-label>
      </ion-button>
    </ion-list-header>

    <TrackerListItem
      v-for="(creature, index) in getCreatures"
      :key="index"
      :creature="creature"
    ></TrackerListItem>
  </ion-list>
</template>


<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import {
  IonListHeader,
  IonList,
  IonLabel,
  IonIcon,
  IonButton,
  IonModal,
} from "@ionic/vue";
import { addOutline, trashOutline } from "ionicons/icons";
import AddCreatureModal from "@/components/AddCreatureModal.vue";
import TrackerListItem from "@/components/TrackerListItem.vue";
import { useStore } from "@/store/index";
import { ActionTypes } from "@/store/actionTypes";

export default defineComponent({
  name: "Tracker",
  components: {
    IonList,
    IonListHeader,
    IonLabel,
    IonIcon,
    IonButton,
    IonModal,
    AddCreatureModal,
    TrackerListItem,
  },
  setup() {
    const isAddCreatureOpenRef = ref(false);
    const trackerListRef = ref();

    const setAddCreatureOpen = (state: boolean) =>
      (isAddCreatureOpenRef.value = state);

    const store = useStore();

    const getCreatures = computed(() => store.getters.getCreatures);

    function removeCreatures(): void {
      console.log("Removed creatures");
      store.dispatch(ActionTypes.RemoveCreatures, undefined);
    }

    return {
      getCreatures,
      addOutline,
      trashOutline,
      isAddCreatureOpenRef,
      setAddCreatureOpen,
      removeCreatures,
      trackerListRef,
    };
  },
});
</script>

<style scoped>
</style>