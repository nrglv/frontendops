<template>
  <v-card>
    <v-list>
      <ListItem
        v-for="todo in todos"
        :key="todo.id"
        :active="todo.done"
        @click="toggleTodo(todo.id)"
      >
        {{ todo.text }}
      </ListItem>
    </v-list>
  </v-card>
</template>

<script>
import ListItem from './ListItem';
import { TOGGLE_TODO } from '../../mutationTypes.js';

export default {
  computed: {
    todos() {
      return this.$store.getters.filteredTodos;
    }
  },
  methods: {
    toggleTodo(id) {
      this.$store.commit(TOGGLE_TODO, id);
    }
  },
  components: {
    ListItem
  }
};
</script>
