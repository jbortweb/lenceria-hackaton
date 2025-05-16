<script setup>
defineProps({
  imagen: String,
  titulo: String,
  enlace: String,
});
</script>

<template>
  <NuxtLink
    :to="enlace"
    class="relative rounded-xl shadow-lg overflow-hidden bg-white group border-2 border-rosa cursor-pointer block"
  >
    <img
      :src="imagen"
      :alt="`Imagen de ${titulo}`"
      class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div class="absolute bottom-0 w-full text-white p-4">
      <h3 class="text-2xl font-bold text-center">
        {{ titulo }}
      </h3>
    </div>
  </NuxtLink>
</template>

<style scoped>
</style>