<script setup lang="ts">
import { RouterView } from "vue-router";
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <main class="flex-grow dark:bg-neutral">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped></style>
