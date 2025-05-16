<template>
  <div class="carousel-container">
    <div class="carousel">
      <CarouselItem
        v-for="(item, index) in items"
        :key="item.id"
        :item="item"
        :index="index"
        :current-index="currentIndex"
        :total-items="items.length"
        @show-detail="showDetail(item)"
      />
    </div>

    <button class="nav-button prev" @click="prevItem">‹</button>
    <button class="nav-button next" @click="nextItem">›</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CarouselItem from "@/components/CarouselItem.vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["show-detail"]);

// Inicia el carrusel con el producto 1 como actual
const currentIndex = ref(1);

const nextItem = () => {
  currentIndex.value = (currentIndex.value + 1) % props.items.length;
};

const prevItem = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.items.length) % props.items.length;
};

const showDetail = (item) => {
  emit("show-detail", item);
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 500px;
  perspective: 1000px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel {
  margin-left: 200px;
  position: relative;
  width: 60%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: #ff04b4;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s;
}

.nav-button:hover {
  background: #fea4e3;
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}

@media (max-width: 768px) {
  .carousel {
    width: 100%;
    margin-left: 0;
  }
  .carousel-container {
    height: 400px;
  }

  .nav-button {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
}
</style>