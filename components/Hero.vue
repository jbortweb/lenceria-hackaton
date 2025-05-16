<template>
  <section class="hero-section">
    <Carousel
      v-if="!showDetail"
      :items="productos"
      @show-detail="showProductDetail"
    />

    <div v-if="showDetail" class="product-detail-view">
      <button class="back-button" @click="showDetail = false">
        ← Volver al catálogo
      </button>

      <div class="detail-container">
        <img
          :src="selectedProduct.imagen"
          :alt="selectedProduct.nombre"
          class="detail-image"
        />

        <div class="product-info">
          <h1>{{ selectedProduct.nombre }}</h1>
          <p class="description">{{ selectedProduct.descripcion }}</p>
          <div class="price">{{ selectedProduct.precio }}€</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  productos: {
    type: Array,
    required: true,
  },
});

const showDetail = ref(false);
const selectedProduct = ref(null);

const showProductDetail = (product) => {
  selectedProduct.value = product;
  showDetail.value = true;
};
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  min-height: 70vh;
  padding: 20px;
}

.product-detail-view {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.back-button {
  background: none;
  border: none;
  color: #ff04b4;
  font-size: 1.1rem;
  margin-bottom: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s;
}

.back-button:hover {
  color: #4d2db7;
}

.detail-container {
  display: flex;
  gap: 50px;
  align-items: center;
}

.detail-image {
  flex: 1;
  max-height: 600px;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.product-info {
  flex: 1;
}

.product-info h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
}

.description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 30px;
}

.price {
  font-size: 2rem;
  font-weight: bold;
  color: #ff04b4;
  margin-bottom: 30px;
}

.add-to-cart,
.buy-now {
  padding: 12px 30px;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.add-to-cart {
  background: #6e45e2;
  color: white;
}

.add-to-cart:hover {
  background: #5a36c9;
  transform: translateY(-2px);
}

.buy-now {
  background: white;
  color: #6e45e2;
  border: 1px solid #6e45e2;
}

.buy-now:hover {
  background: #f8f6ff;
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .detail-container {
    flex-direction: column;
    gap: 30px;
  }

  .detail-image {
    max-height: 400px;
  }

  .product-info {
    text-align: center;
  }

  .action-buttons {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .product-info h1 {
    font-size: 2rem;
  }

  .description {
    font-size: 1rem;
  }

  .price {
    font-size: 1.8rem;
  }

  .action-buttons {
    flex-direction: column;
    gap: 10px;
  }

  .add-to-cart,
  .buy-now {
    width: 100%;
  }
}
</style>