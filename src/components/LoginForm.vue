<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="email"
                  id="email"
                  name="login"
                  label="Login"
                  type="text"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="login">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import axios from "axios";
import router from "../router";
export default {
  name: "Login",
  props: {
    source: String,
  },
  data() {
    return {
      email: "",
      password: "",
      postBody: "",
      errors: [],
    };
  },

  methods: {
    // print() {
    //   this.$toast("sssssssssssss");
    //   console.log("sssssssssss");
    // },
    login() {
      this.postBody = {
        email: this.email,
        password: this.password,
      };
      axios
        .post(`http://localhost:3000/api/users/login`, this.postBody)
        .then((response) => {
          if (response.status === 200) {
            // router.push("/home");
            this.$store.dispatch("loginUser", response.data.user);
            router.push("/");
          }
        })
        .catch((e) => {
          this.errors.push(e);
          this.$toast.error(this.errors[0].response.data.errors);
        });
    },
  },
};
</script>

<style></style>
