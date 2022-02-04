<template>
  <v-card class="mx-auto" max-width="300" tile>
    <v-list shaped>
      <v-subheader>WEDDING COAT</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
          @click="logout"
          v-bind:value="item.id"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    selectedItem: null,
    items: [
      { id: 1, text: "Real-Time", icon: "mdi-clock", link: "/", name: "Home" },
      {
        id: 2,
        text: "Audience",
        icon: "mdi-account",
        link: "about",
        name: "About",
      },
      {
        id: 3,
        text: "Conversions",
        icon: "mdi-flag",
        link: "logout",
        name: "Logout",
      },
    ],
  }),
  methods: {
    logout() {
      console.log(this.selectedItem);
      // if (this.selectedItem.name === "Logout") console.log(this.selectedItem);
    },
  },
};
</script>
