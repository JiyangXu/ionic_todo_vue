<template>
  <ion-app>
    <Header :addTodo="addTodo" />
    <TodoList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
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
    function checkTodo(id) {
      todos.value.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    }
    function deleteTodo(id) {
      todos.value = todos.value.filter((todo) => {
        return todo.id !== id;
      });
    }

    return {
      todos,
      addTodo,
      checkTodo,
      deleteTodo,
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
