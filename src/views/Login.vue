<template>
  <LoginForm />
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
export default {
  name: "Login",
  components: { LoginForm },
  props: {
    source: String,
  },
};
</script>

<style></style>
