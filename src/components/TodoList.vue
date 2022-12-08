<template>
  <TodoItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "todoList-item",
  props: ["todos"],
  setup(props) {
    console.log(props.todos);
  },
  components: { TodoItem },
};
</script>

<style></style>
