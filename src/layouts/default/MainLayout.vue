<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar"></v-app-bar>

    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      navOpened: true,
    };
  },
};
</script>

<style scoped></style>
