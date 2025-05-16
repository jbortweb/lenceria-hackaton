<template>
  <div class="bg-pink-200 min-h-screen">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="css" scoped>
</style>