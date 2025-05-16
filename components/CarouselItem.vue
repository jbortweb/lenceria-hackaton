<template>
  <div
    class="carousel-item"
    :class="{
      current: isCurrent,
      previous: isPrevious,
      next: isNext,
    }"
    :style="itemStyle"
  >
    <img :src="item.imagen" :alt="item.nombre" class="product-image" />
    <div class="item-info">
      <h3>{{ item.nombre }}</h3>
      <button @click="$emit('show-detail')" class="view-button">Ver más</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  currentIndex: {
    type: Number,
    required: true,
  },
  totalItems: {
    type: Number,
    required: true,
  },
});

const isCurrent = computed(() => props.index === props.currentIndex);
const isPrevious = computed(() => {
  return (
    props.index ===
    (props.currentIndex - 1 + props.totalItems) % props.totalItems
  );
});
const isNext = computed(() => {
  return props.index === (props.currentIndex + 1) % props.totalItems;
});

const itemStyle = computed(() => {
  const offset = (props.index - props.currentIndex) * 100;
  const zIndex = 10 - Math.abs(offset / 20);
  const scale = 1 - Math.abs(offset / 500);
  const opacity = 1 - Math.abs(offset / 150);

  return {
    transform: `translateX(${offset}%) scale(${scale})`,
    zIndex: zIndex,
    opacity: opacity,
  };
});
</script>

<style scoped>
.carousel-item {
  position: absolute;
  width: 40%;
  height: 80%;
  top: 10%;
  left: 20%;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform-style: preserve-3d;
}

.product-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  border: 2px solid #ff04b4;
}

.item-info {
  text-align: center;
  padding: 15px;
}

.item-info h3 {
  margin: 10px 0;
  font-size: 1.2rem;
  color: #333;
}

.view-button {
  background: linear-gradient(45deg, #ff04b4, #fea4e3);
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.view-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.current {
  transform: translateX(0) scale(1) !important;
  z-index: 15 !important;
  opacity: 1 !important;
}

.previous {
  filter: brightness(0.8);
}

.next {
  filter: brightness(0.8);
}

@media (max-width: 768px) {
  .carousel-item {
    width: 70%;
  }

  .item-info h3 {
    font-size: 1rem;
  }

  .view-button {
    padding: 6px 15px;
    font-size: 0.9rem;
  }
}
</style>