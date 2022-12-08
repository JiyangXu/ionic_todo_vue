<template>
  <TodoItem
    v-for="todoObj in todos"
    :key="todoObj.id"
    :todo="todoObj"
    :checkTodo="checkTodo"
    :deleteTodo="deleteTodo"
  />
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "todoList-item",
  props: ["todos", "checkTodo", "deleteTodo"],
  setup(props) {
    console.log(props.todos);
  },
  components: { TodoItem },
};
</script>

<style></style>
