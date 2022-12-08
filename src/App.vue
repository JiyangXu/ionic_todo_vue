<template>
  <ion-app>
    <Header :addTodo="addTodo" />
    <TodoList :todos="todos" />
    <Footer />
  </ion-app>
</template>

<script>
import { IonApp } from "@ionic/vue";
import { defineComponent, ref } from "vue";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

export default defineComponent({
  name: "App",
  setup() {
    let todos = ref([
      { id: "0001", title: "Watching TV", done: true },
      { id: "0002", title: "Play Games", done: false },
      { id: "0003", title: "Reading Books", done: false },
    ]);
    function addTodo(todoObj) {
      todos.value.unshift(todoObj);
    }
    return {
      todos,
      addTodo,
    };
  },
  components: {
    IonApp,
    Header,
    TodoList,
    Footer,
  },
});
</script>
