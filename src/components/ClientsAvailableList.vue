<template>
  <v-list v-if="availableClients.length">
    <v-list-item-group>
      <v-list-item v-for="(client, i) in availableClients" :key="i">
        <v-list-item-content>
          <v-list-item-title v-text="client.full_name"></v-list-item-title>
          <v-list-item-subtitle v-text="offer"> </v-list-item-subtitle>
          <v-list-item-subtitle v-text="client.cups"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
  <p v-else>No clients available</p>
</template>

<script>
export default {
  name: "ClientsAvailableList",
  props: ["clients", "cupsNumber", "supplyPoints"],
  data: () => ({
    availableClients: [],
    offer: "no offers",
  }),
  watch: {
    cupsNumber: function (newCups, oldCups) {
      this.setNewAvailableClients();
    },
  },
  methods: {
    setNewAvailableClients: function () {
      const newAvailable = this.clients.filter((person) => {
        const cupsSelected = this.supplyPoints.find(
          (el) => el.cups === this.cupsNumber
        );
        const p1 = cupsSelected?.neighbors.length
          ? this.supplyPoints.find(
              (el) => cupsSelected.neighbors[0] === el.cups
            )
          : undefined;
        const p2 =
          cupsSelected?.neighbors.length > 1
            ? this.supplyPoints.find(
                (el) => cupsSelected.neighbors[1] === el.cups
              )
            : undefined;
        const amounts = [
          ...(p1 ? [p1.invoiced_amount] : []),
          ...(p2 ? [p2.invoiced_amount] : []),
        ];
        if (
          amounts.length &&
          Math.max(...amounts) < cupsSelected.invoiced_amount
        )
          this.offer = "5% discount";
        else if (amounts.reduce((a, b) => a + b, 0) > 100)
          this.offer = "12% discount";
        else this.offer = "no offers";
        console.log();
        return (
          person?.cups === cupsSelected?.cups &&
          person.building_type === "house"
        );
      });
      console.log("Hola", newAvailable);
      this.availableClients = newAvailable || [];
    },
  },
};
</script>

<style>
</style>