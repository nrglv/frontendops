<template>
  <div>
    <v-btn-toggle @change="changeFilter($event)">
      <v-btn value="ALL" :disabled="filter === 'ALL'">All</v-btn>
      <v-btn value="UNDONE" :disabled="filter === 'UNDONE'">Undone</v-btn>
      <v-btn value="DONE" :disabled="filter === 'DONE'">Done</v-btn>
    </v-btn-toggle>
  </div>
</template>

<script>
import { CHANGE_FILTER } from '../../mutationTypes';

export default {
  computed: {
    filter() {
      return this.$store.state.filter;
    }
  },
  methods: {
    changeFilter(val) {
      this.$store.commit(CHANGE_FILTER, val);
    }
  }
};
</script>
