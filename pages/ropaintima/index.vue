<script setup>
import data from "~/data/data.js";

const categorias = data.categorias;
const subcategorias = categorias.ropaIntima.subcategorias;
</script>

<template>
  <section>
    <article>
      <Entrada
        :imagen="categorias.ropaIntima.imagen"
        :descripcion="categorias.ropaIntima.descripcion"
        :comentario="categorias.ropaIntima.comentario"
      />
    </article>
    <article
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-24 w-[90%] mx-auto"
    >
      <CardCategorias
        v-for="subcategoria in subcategorias"
        :key="subcategoria.id"
        :imagen="subcategoria.imagen"
        :titulo="subcategoria.nombre"
        :enlace="subcategoria.enlace"
      />
    </article>
  </section>
</template>

<style scoped>
</style>