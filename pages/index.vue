<script setup>
import CardCategorias from "~/components/CardCategorias.vue";
import data from "~/data/data.js";

const categorias = Object.values(data.categorias);
</script>

<template>
  <div class="">
    <video
      src="/img/video/video-inicio.mp4"
      autoplay
      loop
      muted
      class="w-full h-[36rem] object-cover"
    ></video>

    <section class="w-[90%] mx-auto mt-24 bg-rosa text-black rounded-lg">
      <p class="p-4 text-lg">
        Los productos Maduixa están hechos mayoritariamente bajo pedido. Así que
        el tiempo de confección puede variar según demanda. Los pedidos y
        compras se reslizaran mediante email, así hay un trato más humano y la
        posibilidad de ultimar detalles. No se puede comprar directamente desde
        ésta página.
        <span class="font-bold">Envíos a Península y Baleares</span>
      </p>
    </section>

    <section>
      <article
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-24 w-[90%] mx-auto"
      >
        <CardCategorias
          v-for="categoria in categorias"
          :key="categoria.id"
          :imagen="categoria.imagen"
          :titulo="categoria.nombre"
          :enlace="categoria.enlace"
        />
      </article>
      <article
        class="bg-rosa text-4xl text-center text-black rounded-lg mt-4 w-[90%] h-24 mx-auto p-4"
      >
        <p>Relacion tallas</p>
      </article>
    </section>
  </div>
</template>

<style scoped>
video {
  display: block;
}
</style>