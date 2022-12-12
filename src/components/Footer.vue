<template>
  <ion-item lines="none" v-if="total">
    <!-- <input type="checkbox" :checked="isAll" @click="checkAll" /> -->
    <input type="checkbox" v-model="isAll" />

    <ion-label>{{ doneTotal }} /{{ total }}</ion-label>
    <ion-button color="danger" @click="clearAll">Clear All ToDos</ion-button>
  </ion-item>
</template>

<script>
import { IonItem, IonLabel, IonButton } from "@ionic/vue";
import { computed } from "@vue/runtime-core";

export default {
  name: "footer-item",
  props: ["todos"],
  setup(props, { emit }) {
    const total = computed(() => {
      return props.todos.length;
    });
    const doneTotal = computed(() => {
      return props.todos.reduce(
        (pre, current) => pre + (current.done ? 1 : 0),
        0
      );
    });
    const isAll = computed({
      get() {
        return doneTotal.value === total.value && total.value > 0;
      },
      set(value) {
        emit("checkAllTodo", value);
      },
    });
    function clearAll() {
      emit("clearAllTodo");
    }
    return { total, doneTotal, isAll, clearAll };
  },
  components: {
    IonItem,
    IonLabel,
    IonButton,
  },
};
</script>

<style></style>
