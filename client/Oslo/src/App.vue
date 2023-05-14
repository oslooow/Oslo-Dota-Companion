<script>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue'
import chat from './components/chat.vue'
export default {
  components: {
    navbar,
    chat
  }
}
</script>

<template>
  <navbar />
  <RouterView />
</template>

<style></style>
