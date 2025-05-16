<script setup>
defineProps({
  imagen: String,
  descripcion: String,
  comentario: String,
});
</script>

<template>
  <section>
    <article
      class="flex flex-col md:flex-row items-center justify-center w-[90%] mt-24 mx-auto"
    >
      <div class="w-1/2">
        <img
          :src="imagen"
          :alt="`Imagen de ${imagen}`"
          class="w-full md:w-2/3 mx-auto object-cover rounded-xl border-4 border-rosa mb-24 md:mb-0"
        />
      </div>
      <div class="w-full md:w-1/2">
        <div class="w-2/3 mx-auto text-lg">
          <p v-if="descripcion" v-html="descripcion"></p>
        </div>
      </div>
    </article>

    <article
      class="w-[90%] mx-auto mt-24 text-rosa rounded-lg border-2 border-rosa shadow-lg shadow-rosa/20"
    >
      <p v-if="comentario" class="p-4 text-xl" v-html="comentario"></p>
    </article>
  </section>
</template>

<style scoped>
</style>