<template>
  <TodoItem
    v-for="todo in todos"
    :key="todo.id"
    :todo="todo"
    :checkTodo="checkTodo"
  />
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "todoList-item",
  props: ["todos", "checkTodo"],
  setup() {},
  components: { TodoItem },
};
</script>

<style></style>
