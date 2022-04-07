<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>{{ cups }}</v-list-item-title>
      <v-list-item-subtitle> {{ invoice }} </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "ListItem",
  props: ["invoice", "cups"],
};
</script>

<style>
</style>