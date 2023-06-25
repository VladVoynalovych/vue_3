<template>
  <article class="page">
    <v-list item-props lines="three">
      <v-list-item
        v-for="user in formattedUsers"
        :key="user.title"
        :title="user.title"
        :subtitle="user.subtitle"
      >
        <template v-slot:prepend>
          <v-avatar :image="user.prependAvatar"> </v-avatar>
        </template>

        <template v-slot:append>
          <v-btn
            color="grey-lighten-1"
            icon="mdi-delete"
            variant="text"
            @click="usersStore.deleteUserById(user.id)"
          ></v-btn>
          <v-btn
            color="grey-lighten-1"
            icon="mdi-open-in-new"
            variant="text"
            @click="router.push({ name: 'User', params: { id: user.id } })"
          ></v-btn>
        </template>
      </v-list-item>
    </v-list>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useUsersStore } from "@/store/app";
import { useRouter } from "vue-router";

const router = useRouter();
const usersStore = useUsersStore();

const users = usersStore.getUsers;
const formattedUsers = computed(() =>
  users.map(({ avatar, name, department, id }) => ({
    prependAvatar: avatar,
    title: name,
    subtitle: department,
    id,
  }))
);
</script>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MainPage",
});
</script>

<style scoped></style>
