<script setup>
import { useRoute } from "vue-router";
import EnlacesDinamicos from "~/components/EnlacesDinamicos.vue";
import data from "~/data/data.js";

const route = useRoute();
const productId = route.params.id;

const productos = data.categorias.camisetas.subcategorias.lagrima.productos;
const producto = productos.find((p) => p.id === productId);
</script>

<template>
  <EnlacesDinamicos :producto="producto" />
</template>

<style scoped>
</style>