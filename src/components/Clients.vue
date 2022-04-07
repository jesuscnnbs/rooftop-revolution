<template>
  <v-card class="mt-5 ml-5 mr-5" :loading="loading" :disabled="loading">
    <v-container fluid>
      <v-row>
        <v-col cols="12"> <h1>Rooftop Revolution</h1> </v-col>
      </v-row>
      <v-row>
        <v-col :cols="6">
          <v-form ref="form">
            <v-text-field
              label="Cups number"
              :rules="rules"
              hide-details="auto"
              color="orange"
              v-model="cupsNum"
            >
            </v-text-field>
          </v-form>
          <v-list disabled v-if="list.length">
            <v-list-item-group
              color="orange"
              v-for="(point, i) in supplyPoints"
              :key="i"
            >
              <ListItem :invoice="point.invoiced_amount" :cups="point.cups" />
            </v-list-item-group>
          </v-list>
          <p v-else>...</p>
        </v-col>
        <v-col :cols="6">
          <ClientsAvailableList
            :clients="list"
            :supplyPoints="supplyPoints"
            :cupsNumber="cupsNum"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import ListItem from "./ListItem.vue";
import ClientsAvailableList from "./ClientsAvailableList.vue";
export default {
  components: { ListItem, ClientsAvailableList },
  name: "Clients",
  data: () => ({
    rules: [(value) => !!value || "Required"],
    list: [],
    supplyPoints: [],
    loading: false,
    cupsNum: "",
  }),
  mounted: function () {
    this.loading = true;
    setTimeout(() => {
      this.list = require("../../json/clients.json");
      this.supplyPoints = require("../../json/supply-points");
      this.loading = false;
    }, 2000);
  },
};
</script>

<style>
</style>