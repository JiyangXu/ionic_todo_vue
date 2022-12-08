<template>
  <ion-item lines="none">
    <ion-checkbox
      slot="start"
      :checked="todo.done"
      @click="handleCheck(todo.id)"
    ></ion-checkbox>
    <ion-label>{{ todo.title }}</ion-label>
    <ion-button color="danger">Delete</ion-button>
  </ion-item>
</template>

<script>
import { IonCheckbox, IonItem, IonLabel, IonButton } from "@ionic/vue";
export default {
  name: "todoItem-item",
  props: ["todo", "checkTodo"],
  setup(props) {
    function handleCheck(id) {
      console.log(props.todo);
      props.checkTodo(id);
    }
    return { handleCheck };
  },
  components: {
    IonCheckbox,
    IonItem,
    IonLabel,
    IonButton,
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
