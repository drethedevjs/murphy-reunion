<script setup lang="ts">
import { FwbImg } from "flowbite-vue";
</script>
<template>
  <div
    class="flex flex-col h-full md:place-items-stretch place-items-center md:flex-row w-full gap-4"
  >
    <div class="block-side">
      <fwb-img
        alt="Cincinnati skyline."
        src="/images/cincinnati-skyline.jpg"
        class="object-cover h-full hover:scale-105 hover:rotate-2 transition-transform"
      />
      <div class="overlay flex"></div>
      <div class="overlay-text">
        <p class="sub-header">Location</p>
        <p class="info">Indianapolis, IN</p>
      </div>
    </div>
    <div class="block-side">
      <fwb-img
        alt="Four square letter pieces that spell out the word June."
        src="/images/june.jpg"
        class="hover:scale-105 hover:-rotate-2 transition-transform"
      />
      <div class="overlay flex"></div>
      <div class="overlay-text">
        <p class="sub-header">Dates</p>
        <p class="info">June 12th-14th</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.block-side {
  @apply text-center md:w-1/2 w-full relative overflow-hidden rounded-md;
}
</style>
