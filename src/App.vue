<script setup>
import { RouterView } from 'vue-router';
import Nav from "./components/Nav.vue";  //every page has nav so imported it on here
</script>
<template>
  <Nav />
<RouterView />
</template>