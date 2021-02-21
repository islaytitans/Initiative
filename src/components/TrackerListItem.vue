<template>
  <ion-item>
    <ion-icon :icon="chevronForwardOutline" :color="getStatusColor" />
    <ion-label :color="getStatusColor">
      {{ creature.initiative }}
    </ion-label>

    <ion-icon :icon="getCreatureIcon" :color="getStatusColor" />
    <ion-label :color="getStatusColor">
      <h3>{{ creature.name }}</h3>
      <p>
        <ion-icon :icon="shieldOutline" />
        {{ creature.armorClass }}
      </p>
    </ion-label>

    <ion-icon :icon="heartOutline" :color="getStatusColor" />
    <ion-label :color="getStatusColor">
      {{ creature.isDead ? 0 : creature.hitPoints }} /
      {{ creature.hitPoints }}
    </ion-label>
  </ion-item>
  <ion-item-options side="end" @ionSwipe="emit('killCreature(creature)')">
    <ion-item-option color="danger">
      <ion-icon :icon="skullOutline" @click="emit('killCreature(creature)')" />
    </ion-item-option>
  </ion-item-options>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue";
import {
  IonLabel,
  IonIcon,
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

export default defineComponent({
  name: "TrackerListItem",
  components: {
    IonLabel,
    IonIcon,
    IonItem,
    IonItemOptions,
    IonItemOption,
  },
  props: ["creature"],
  emits: ["killCreature"],
  setup(props) {
    const { creature } = toRefs(props);

    const getCreatureIcon = computed((): string => {
      if (creature.value.isDead) {
        return skullOutline;
      } else if (creature.value.isPlayer) {
        return bodyOutline;
      } else {
        return pawOutline;
      }
    });

    const getStatusColor = computed((): string => {
      return creature.value.isDead ? "danger" : "";
    });

    return {
      getCreatureIcon,
      getStatusColor,
      heartOutline,
      shieldOutline,
      chevronForwardOutline,
      addOutline,
      skullOutline,
    };
  },
});
</script>

<style scoped>
</style>