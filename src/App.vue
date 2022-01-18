<template>
  <v-app id="inspire">
    <div v-if="auth">
      <v-navigation-drawer v-model="drawer" app>
        <Menu />
      </v-navigation-drawer>
      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>

      <v-main>
        <router-view />
      </v-main>
      <Footer />
    </div>
    <div v-else>
      <router-view />
    </div>
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";
import Menu from "./components/Menu.vue";
// import Login from "./components/LoginForm.vue";
export default {
  name: "App",

  components: {
    Footer,
    Menu,
    // Login,
  },

  data: () => ({
    drawer: null,
    auth: false,
  }),
};
</script>
