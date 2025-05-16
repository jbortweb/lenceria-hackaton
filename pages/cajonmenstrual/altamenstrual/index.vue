<script setup>
import data from "~/data/data.js";
import Entrada from "@/components/Entrada.vue";
import CardCategorias from "@/components/CardCategorias.vue";
import Hero from "@/components/Hero.vue";

const categorias = data.categorias;
const productos =
  categorias?.cajonMenstrual.subcategorias.altaMenstrual.productos;
</script>

<template>
  <div>
    <h1 class="text-4xl text-black text-center mt-24 font-bold">
      Alta Menstrual
    </h1>

    <section>
      <article>
        <Entrada
          :imagen="categorias.cajonMenstrual.subcategorias.altaMenstrual.imagen"
          :descripcion="
            categorias.cajonMenstrual.subcategorias.altaMenstrual.descripcion
          "
          :comentario="
            categorias.cajonMenstrual.subcategorias.altaMenstrual.comentario
          "
        />
      </article>
      <article>
        <h2 class="text-2xl text-center mt-10 font-bold">
          Catálogo Alta Menstrual
        </h2>
        <Hero :productos="productos" />
      </article>
      <h2 class="text-2xl text-center mt-10 font-bold">Todos los productos</h2>
      <article
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 mt-12 w-[90%] mx-auto"
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