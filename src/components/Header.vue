<template>
  <ion-item>
    <ion-label position="floating">Enter ToDo</ion-label>
    <ion-input placeholder="" v-model="title" @keydown.enter="add"></ion-input>
  </ion-item>
</template>

<script>
import { IonItem, IonLabel, IonInput } from "@ionic/vue";
import { nanoid } from "nanoid";
import { ref } from "vue";
export default {
  name: "header-item",
  props: ["addTodo"],
  setup(props) {
    let title = ref();
    function add() {
      if (!title.value) return;
      const todoObj = { id: nanoid(), title: title.value, done: false };
      props.addTodo(todoObj);
      title.value = "";
    }
    return { add, title };
  },
  components: {
    IonItem,
    IonLabel,
    IonInput,
  },
};
</script>

<style></style>
