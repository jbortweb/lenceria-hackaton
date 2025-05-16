<script setup>
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-pink-200"
  >
    <h1 class="text-4xl font-bold mb-8">Iniciar Sesión</h1>

    <SignIn
      after-sign-in-url="/admin"
      :appearance="{
        elements: {
          formButtonPrimary: 'bg-rosa text-black hover:bg-pink-300',
        },
      }"
    />
  </div>
</template>

<style scoped>
</style>
