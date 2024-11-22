<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <v-text-field label="New Todo" solo v-model="todo" />
    </form>
  </div>
</template>

<script>
import { ADD_TODO } from '../../mutationTypes';

export default {
  data() {
    return {
      todo: ''
    };
  },
  methods: {
    handleSubmit() {
      if (this.todo) {
        this.$store.commit(ADD_TODO, this.todo);
        this.todo = '';
      }
    }
  }
};
</script>
