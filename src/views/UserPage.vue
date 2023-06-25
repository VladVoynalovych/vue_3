<template>
  <article class="page"></article>
</template>
<script setup lang="ts">
import { useUsersStore } from "@/store/app";
import { useRoute } from "vue-router";

const route = useRoute();

const usersStore = useUsersStore();
const user = usersStore.getUserById(route.params.id.toString());
console.log("user >>>", user);
</script>

<script lang="ts">
export default {
  name: "UserPage",
};
</script>

<style scoped></style>
