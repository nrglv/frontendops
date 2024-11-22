<template>
  <div>
    <v-app>
      <v-toolbar app></v-toolbar>
      <v-content app>
        <v-container>
          <AddNewBar />
          <List />
          <FilterBar />
        </v-container>
      </v-content>
      <v-footer app></v-footer>
    </v-app>
  </div>
</template>

<script>
import FilterBar from './FilterBar';
import AddNewBar from './AddNewBar';
import List from './List';

export default {
  components: {
    FilterBar,
    AddNewBar,
    List
  }
};
</script>
