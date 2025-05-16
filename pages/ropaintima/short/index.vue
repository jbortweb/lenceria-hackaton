<script setup>
import data from "~/data/data.js";

const categorias = data.categorias;
const productos = categorias.ropaIntima.subcategorias.short.productos;
</script>

<template>
  <div>
    <h1 class="text-4xl text-black text-center mt-24 font-bold">Shorts</h1>

    <section>
      <article>
        <Entrada
          :imagen="categorias.ropaIntima.subcategorias.short.imagen"
          :descripcion="categorias.ropaIntima.subcategorias.short.descripcion"
          :comentario="categorias.ropaIntima.subcategorias.short.comentario"
        />
      </article>
      <article>
        <h2 class="text-2xl text-center mt-10 font-bold">Catálogo Shorts</h2>
        <Hero :productos="productos" />
      </article>
      <h2 class="text-2xl text-center mt-10 font-bold">Todos los productos</h2>
      <article
        class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-24 w-[90%] mx-auto"
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