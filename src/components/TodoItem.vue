<template>
  <ion-item lines="none">
    <!-- <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)" /> -->
    <ion-checkbox
      slot="start"
      type="checkbox"
      v-model="itemTodo.done"
    ></ion-checkbox>
    <ion-label>{{ itemTodo.title }}</ion-label>
    <ion-button color="danger">Delete</ion-button>
  </ion-item>
</template>

<script>
import { IonCheckbox, IonItem, IonLabel, IonButton } from "@ionic/vue";
import { toRefs } from "vue";
export default {
  name: "todoItem-item",
  props: ["todo"],
  setup(props) {
    const { todo: itemTodo } = toRefs(props);
    return { itemTodo };
  },
  components: {
    IonItem,
    IonLabel,
    IonButton,
    IonCheckbox,
  },
};
</script>

<style scoped>
ion-checkbox {
  --size: 32px;
  --background-checked: #6815ec;
}

ion-checkbox::part(container) {
  border-radius: 6px;
  border: 2px solid #6815ec;
}
</style>
