<template>
  <ion-app>
    <Header :addTodo="addTodo" />
    <TodoList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
    <Footer
      :todos="todos"
      :checkAllTodo="checkAllTodo"
      :clearAllTodo="clearAllTodo"
    />
  </ion-app>
</template>

<script>
import { IonApp } from "@ionic/vue";
import { defineComponent, ref, watch, onMounted } from "vue";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

export default defineComponent({
  name: "App",
  setup() {
    let todos = ref([]);
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
    function checkAllTodo(done) {
      todos.value.forEach((todo) => {
        todo.done = done;
      });
    }
    function clearAllTodo() {
      todos.value = todos.value.filter((todo) => {
        return !todo.done;
      });
    }
    watch(
      todos,
      (newTodo) => {
        localStorage.setItem("todos", JSON.stringify(newTodo));
      },
      { deep: true }
    );
    onMounted(() => {
      todos.value = JSON.parse(localStorage.getItem("todos") || []);
    });
    return {
      todos,
      addTodo,
      checkTodo,
      deleteTodo,
      checkAllTodo,
      clearAllTodo,
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
