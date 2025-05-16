<script setup>
import { ref } from "vue";
import data from "@/data/data.js";
import CardCategorias from "@/components/CardCategorias.vue";

const route = useRoute();
const { isLoaded, user } = useUser();
const categorias = Object.values(data.categorias);

const submenuAbierto = ref(null);
const productosVisibles = ref([]);

// Alterna el menú de subcategorías
function toggleSubmenu(categoriaKey) {
  submenuAbierto.value =
    submenuAbierto.value === categoriaKey ? null : categoriaKey;
}

// Muestra los productos de la categoría o subcategoría seleccionada
function mostrarProductos(productos) {
  productosVisibles.value = productos || [];
}

definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">Bienvenido al Panel</h1>
    <div class="flex">
      <!-- Menú deslizante -->
      <aside class="w-64 bg-gray-800 text-white h-screen p-4">
        <SignOutButton class="bg-red-500 text-white px-4 py-2 my-4 rounded" />
        <h2 class="text-lg font-bold mb-4">Categorías</h2>
        <ul>
          <li v-for="(categoria, key) in categorias" :key="key" class="mb-2">
            <button
              @click="
                categoria.subcategorias
                  ? toggleSubmenu(key)
                  : mostrarProductos(categoria.productos)
              "
              class="w-full text-left px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded"
            >
              {{ categoria.nombre }}
            </button>
            <ul
              v-if="submenuAbierto === key && categoria.subcategorias"
              class="pl-4 mt-2"
            >
              <li
                v-for="(subcategoria, subKey) in categoria.subcategorias"
                :key="subKey"
                class="mb-1"
              >
                <button
                  @click="mostrarProductos(subcategoria.productos)"
                  class="w-full text-left px-2 py-1 bg-gray-600 hover:bg-gray-500 rounded"
                >
                  {{ subcategoria.nombre }}
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </aside>

      <!-- Contenido principal -->

      <div v-if="!isLoaded">
        <p>Loading...</p>
      </div>
      <main else class="flex-1 p-4">
        <h1 class="text-xl font-bold mb-4">Panel de Administración</h1>
        <div
          v-if="productosVisibles.length"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <CardCategorias
            v-for="(producto, index) in productosVisibles"
            :key="index"
            :imagen="producto.imagen"
            :titulo="producto.nombre"
            :enlace="producto.enlace"
          />
        </div>
        <p v-else class="text-gray-500">
          Selecciona una categoría o subcategoría para ver los productos.
        </p>
      </main>
    </div>
  </div>
</template>

<style scoped>
</style>


