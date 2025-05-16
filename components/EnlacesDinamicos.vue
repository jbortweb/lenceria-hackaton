<script setup>
import { useRouter } from "vue-router";

defineProps({
  producto: Object,
});

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<template>
  <div>
    <button class="p-4 ml-12 mt-24 text-rosa" @click="goBack">
      ← Volver al catálogo
    </button>
    <div
      v-if="producto"
      class="w-[90%] mx-auto flex flex-col lg:flex-row gap-8"
    >
      <div class="lg:w-1/3 flex flex-col justify-center">
        <h1 class="text-4xl text-center font-bold mb-8">
          {{ producto.nombre }}
        </h1>
        <p class="text-lg w-[90%] md:w-[100%] mx-auto mb-4">
          {{ producto.descripcion }}
        </p>
        <div class="w-36 mx-auto mt-12 bg-rosa text-black rounded-lg pb-4">
          <p class="text-2xl text-center font-bold mt-4">
            Precio: {{ producto.precio }}€
          </p>
        </div>
      </div>
      <div class="lg:w-2/3 flex justify-center items-center">
        <img
          :src="producto.imagen"
          :alt="producto.nombre"
          class="w-[90%] object-cover border-2 border-rosa rounded-xl"
        />
      </div>
    </div>
    <div v-else class="text-center mt-12">
      <p class="text-xl text-red-500">Producto no encontrado.</p>
    </div>
  </div>
</template>

<style scoped>
</style>