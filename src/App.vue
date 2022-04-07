<template>
  <v-app>
    <v-app-bar app color="white" dark elevation="2">
      <div class="d-flex align-center">
        <v-img
          alt="Holaluz Name"
          class="shrink mt-1"
          contain
          min-width="65"
          src="https://holaluz.com/_nuxt/img/logo.af3845a.svg"
          width="100"
        />
      </div>
    </v-app-bar>

    <v-main class="orange darken-1">
      <Clients />
    </v-main>
  </v-app>
</template>

<script>
import Clients from "./components/Clients";

export default {
  name: "App",

  components: {
    Clients,
  },
};
</script>
