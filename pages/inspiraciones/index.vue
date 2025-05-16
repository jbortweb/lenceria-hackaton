<script setup>
import data from "~/data/data.js";

const categorias = data.categorias;
const productos = categorias.inspiraciones.productos;
</script>

<template>
  <div>
    <h1 class="text-4xl text-black text-center mt-24 font-bold">
      Inspiraciones
    </h1>

    <section>
      <article>
        <Entrada
          :imagen="categorias.inspiraciones.imagen"
          :descripcion="categorias.inspiraciones.descripcion"
          :comentario="categorias.inspiraciones.comentario"
        />
      </article>
      <article
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 mt-24 w-[90%] mx-auto"
      >
        <CardCategorias
          v-for="producto in productos"
          :key="producto.id"
          :imagen="producto.imagen"
          :titulo="producto.nombre"
          :enlace="producto.enlace"
        />
      </article>
    </section>
  </div>
</template>

<style scoped>
</style>