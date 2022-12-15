<template>
  <ion-item lines="none">
    <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)" />
    <ion-label v-show="!todo.isEdit">{{ todo.title }}</ion-label>
    <input v-show="todo.isEdit" :value="todo.title" @blur="handleBlur(todo)" />
    <ion-button color="secondary" @click="handleEdit(todo)"> Edit </ion-button>

    <ion-button color="danger" @click="handleDelete(todo.id)">
      Delete
    </ion-button>
  </ion-item>
</template>

<script>
import { IonItem, IonLabel, IonButton, alertController } from "@ionic/vue";
import { ref } from "vue";
export default {
  name: "todoItem-item",
  props: ["todo", "checkTodo", "deleteTodo"],
  setup(props) {
    function handleCheck(id) {
      props.checkTodo(id);
    }
    async function handleDelete(id) {
      const alert = await alertController.create({
        header: "Are you sure to delete?",
        buttons: [
          {
            text: "Cancel",
            role: false,
          },
          {
            text: "OK",
            role: true,
          },
        ],
      });

      await alert.present();

      const { role } = await alert.onDidDismiss();

      if (role) props.deleteTodo(id);
    }
    function handleEdit(todo) {
      if (todo.isEdit == undefined) todo.isEdit = ref(true);

      todo.isEdit = true;
    }
    function handleBlur(todo) {
      todo.isEdit = false;
    }
    return { handleCheck, handleDelete, handleEdit, handleBlur };
  },
  components: {
    IonItem,
    IonLabel,
    IonButton,
  },
};
</script>

<style scoped>
ion-checkbox {
  --size: 32px;
  --background-checked: #6815ec;
}

ion-checkbox::part(container) {
  border-radius: 6px;
  border: 2px solid #6815ec;
}

ion-input {
  border: solid 1px gray;
}
</style>
