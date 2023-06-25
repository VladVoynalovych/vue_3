<template>
  <article class="page">
    <v-table height="300px">
      <tbody>
        <tr>
          <td>
            <v-img
              :width="31"
              aspect-ratio="16/9"
              cover
              :src="user?.avatar ?? ''"
            />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>Name:</td>
          <td>{{ user?.name }}</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>{{ user?.email }}</td>
        </tr>
        <tr>
          <td>Department:</td>
          <td>{{ user?.department }}</td>
        </tr>
        <tr v-if="head">
          <td>Head:</td>
          <td>{{ head?.name }}</td>
        </tr>
      </tbody>
    </v-table>
  </article>
</template>
<script setup lang="ts">
import { useUsersStore } from "@/store/app";
import { useRoute } from "vue-router";

const route = useRoute();

const usersStore = useUsersStore();
const user = usersStore.getUserById(route.params.id.toString());
const head = usersStore.getUserById(user?.head ?? "");
</script>

<script lang="ts">
export default {
  name: "UserPage",
};
</script>

<style scoped></style>
