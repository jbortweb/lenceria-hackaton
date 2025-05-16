<script setup>
</script>

<template>
  <header class="bg-rosa flex flex-col md:flex-row bg-dark-100 p-4">
    <div class="flex items-center justify-center w-full py-4 mx-auto">
      <NuxtLink to="/">
        <img
          src="/img/logo.jpg"
          alt="Maduixa Logo"
          width="75"
          height="75"
          class="mr-4 rounded-full border-4 border-black shadow-lg"
        />
      </NuxtLink>
      <h1 class="text-4xl font-bold text-gray-100">
        Entre cuixa i cuixa... Maduixa
      </h1>
    </div>
    <div class="w-full px-4 py-6 mx-auto">
      <nav class="flex items-end justify-center">
        <NuxtLink
          to="/"
          class="px-4 py-2 text-xl text-white hover:border-b-4 hover:border-white"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/maduixa"
          class="px-4 py-2 text-xl text-white hover:border-b-4 hover:border-white"
          >Maduixa</NuxtLink
        >
        <NuxtLink
          to="/contact"
          class="px-4 py-2 text-xl text-white hover:border-b-4 hover:border-white"
          >Contact</NuxtLink
        >
        <NuxtLink
          to="/login"
          class="px-4 py-2 text-xl text-white hover:border-b-4 hover:border-white"
          >Admin</NuxtLink
        >
      </nav>
    </div>
  </header>
</template>

<style scoped>
</style>