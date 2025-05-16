<script setup>
if (import.meta.client) {
  // Limpiar el localStorage al cargar la aplicación
  localStorage.clear();
}
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
