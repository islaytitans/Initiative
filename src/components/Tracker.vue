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

    <ion-item-sliding v-for="(creature, index) in getCreatures" :key="index">
      <TrackerListItem 
        :creature="creature"
        @defeatCreature="defeatCreature(creature)"></TrackerListItem>
    </ion-item-sliding>
  </ion-list>
</template>


<script lang="ts">
import { defineComponent, computed, ref } from "vue";
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
import { useStore } from '@/store/index';

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
    const isAddCreatureOpenRef = ref(false);
    const trackerListRef = ref();

    const setAddCreatureOpen = (state: boolean) => (isAddCreatureOpenRef.value = state);

    const store = useStore();

    const getCreatures = computed(() => store.getters.getCreatures);

    return {
      getCreatures,
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