<template>
  <ion-item lines="none">
    <ion-checkbox slot="start"></ion-checkbox>
    <ion-label>Finished 0 / All 10</ion-label>
    <ion-button color="danger">Clear All ToDos</ion-button>
  </ion-item>
</template>

<script>
import { IonCheckbox, IonItem, IonLabel, IonButton } from "@ionic/vue";

export default {
  name: "footer-item",
  components: {
    IonCheckbox,
    IonItem,
    IonLabel,
    IonButton,
  },
};
</script>

<style></style>
