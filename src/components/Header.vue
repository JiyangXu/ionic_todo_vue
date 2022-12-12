<template>
  <ion-item>
    <ion-label position="floating">Enter ToDo</ion-label>
    <ion-input
      placeholder=""
      v-model.lazy.trim="title"
      @keydown.enter="add"
    ></ion-input>
  </ion-item>
</template>

<script>
import { IonItem, IonLabel, IonInput } from "@ionic/vue";
import { nanoid } from "nanoid";
import { ref } from "vue";
export default {
  name: "header-item",

  setup(props, { emit }) {
    let title = ref();
    function add() {
      if (!title.value) return;
      const todoObj = { id: nanoid(), title: title.value, done: false };
      emit("addTodo", todoObj);
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
