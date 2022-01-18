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
              <v-btn color="primary" @click="print">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import axios from "axios";
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
    print() {
      this.postBody = {
        email: this.email,
        password: this.password,
      };
      axios
        .post(`http://localhost:3000/api/users/login`, this.postBody)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>

<style></style>
