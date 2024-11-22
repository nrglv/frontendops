<template>
  <v-list-tile @click="$emit('click')" @mouseover="hovered = true" @mouseout="hovered = false" style="cursor: pointer">
    <v-list-tile-action>
      <v-icon :color="active ? 'success' : 'grey'" v-if="active || hovered">check</v-icon>
    </v-list-tile-action>
    <v-list-tile-content
      :style="{ color: active ? 'grey' : 'black', textDecoration: active ? 'line-through' : 'none' }"
    >
      <slot />
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hovered: false
    }
  }
}
</script>
