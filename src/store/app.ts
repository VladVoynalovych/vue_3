import { defineStore } from "pinia";
import { User } from "@/types/ServerData";
export const useUsersStore = defineStore("usersStore", {
  state: () => ({
    users: [
      {
        id: "62227404-8066-11ed-a1eb-0242ac120002",
        name: "William Dolores",
        email: "dolores.williams@example.com",
        avatar: "https://i.pravatar.cc/31?u=1",
        department: "Sales",
        head: "69f01b0a-8066-11ed-a1eb-0242ac120002",
      },
      {
        id: "69f01b0a-8066-11ed-a1eb-0242ac120002",
        name: "Ben George",
        email: "b.george@example.com",
        avatar: "https://i.pravatar.cc/33?u=12",
        department: "Sales",
        head: null,
      },
      {
        id: "722907f0-4066-11ed-a1eb-0242ac120002",
        name: "Robert Kim",
        email: "kim1987@example.com",
        avatar: "https://i.pravatar.cc/32?u=13",
        department: "Accountant",
        head: "69f01b0a-8066-11ed-a1eb-0242ac120002",
      },
      {
        id: "722907f0-5066-11ed-a1eb-0242ac120002",
        name: "Ben Sala",
        email: "b.sila@example.com",
        avatar: "https://i.pravatar.cc/38?u=14",
        department: "Sales",
        head: "69f01b0a-8066-11ed-a1eb-0242ac120002",
      },
      {
        id: "722907f0-6066-11ed-a1eb-0242ac120002",
        name: "Kerido Fado",
        email: "fadooo@example.com",
        avatar: "https://i.pravatar.cc/37?u=15",
        department: "Sales",
        head: "69f01b0a-8066-11ed-a1eb-0242ac120002",
      },
      {
        id: "722907f0-9066-11ed-a1eb-0242ac120002",
        name: "Ben Malta",
        email: "b.malta@example.com",
        avatar: "https://i.pravatar.cc/33?u=16",
        department: "Managers",
        head: "69f01b0a-8066-11ed-a1eb-0242ac120002",
      },

      {
        id: "734907f0-9066-11ed-a1eb-0242ac120002",
        name: "Ben Shapiro",
        email: "b.shapiro@example.com",
        avatar: "https://i.pravatar.cc/33?u=18",
        department: "Sales",
        head: "722907f0-6066-11ed-a1eb-0242ac120002",
      },
      {
        id: "722807f0-8066-11ed-a1eb-0242ac120002",
        name: "Balando Wholles",
        email: "balando@example.com",
        avatar: "https://i.pravatar.cc/34?u=17",
        department: "Accountant",
        head: null,
      },
    ] as User[],
  }),
  getters: {
    getUsers(): User[] {
      return this.users;
    },
  },
  actions: {
    addUser(user: User) {
      this.users.push(user);
    },
    deleteUserById(id: string) {
      const itemIndex = this.users.findIndex(({ id: userId }) => {
        return userId === id;
      });
      this.users.splice(itemIndex, 1);
    },
  },
});
