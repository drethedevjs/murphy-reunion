<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
<template>
  <footer class="otr-bg-gradient place-content-center text-white text-center py-5">
    <p>
      Copyright © 2025
      <span v-if="currentYear !== 2025"> - {{ new Date().getFullYear() }}</span> Over the River
    </p>
    <p>
      Powered by
      <a
        href="https://csra-web-services.vercel.app/"
        target="_blank"
        class="text-neutral font-medium hover:text-white"
      >
        CSRA Web Services
      </a>
    </p>
  </footer>
</template>

<style scoped>
p {
  @apply text-base mb-0;
}
</style>
