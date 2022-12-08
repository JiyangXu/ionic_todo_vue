<template>
  <ion-item lines="none">
    <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)" />
    <ion-label>{{ todo.title }}</ion-label>
    <ion-button color="danger" @click="handleDelete(todo.id)"
      >Delete</ion-button
    >
  </ion-item>
</template>

<script>
import { IonItem, IonLabel, IonButton } from "@ionic/vue";

export default {
  name: "todoItem-item",
  props: ["todo", "checkTodo", "deleteTodo"],
  setup(props) {
    function handleCheck(id) {
      props.checkTodo(id);
    }
    function handleDelete(id) {
      props.deleteTodo(id);
    }
    return { handleCheck, handleDelete };
  },
  components: {
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
