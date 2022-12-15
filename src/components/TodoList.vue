<template>
  <TodoItem
    v-for="todoObj in todos"
    :key="todoObj.id"
    :todo="todoObj"
    :checkTodo="checkTodo"
    :deleteTodo="deleteTodo"
    :updateTodo="updateTodo"
  />
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "todoList-item",
  props: ["todos", "checkTodo", "deleteTodo", "updateTodo"],
  setup(props) {
    console.log(props.todos);
  },
  components: { TodoItem },
};
</script>

<style></style>
