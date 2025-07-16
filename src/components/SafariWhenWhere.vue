<script setup lang="ts">
import { FwbImg } from "flowbite-vue";
</script>
<template>
  <div class="flex flex-col md:place-items-stretch place-items-center md:flex-row w-full gap-4">
    <div class="block-side">
      <fwb-img
        alt="Indianapolis skyline."
        src="/images/indy-skyline.jpg"
        class="hover:scale-105 transition-transform"
      />
      <div class="overlay flex"></div>
      <div class="overlay-text">
        <p class="sub-header">Location</p>
        <p class="info">Cincinnati, OH</p>
      </div>
    </div>
    <div class="block-side">
      <fwb-img
        alt="Four square letter pieces that spell out the word June."
        src="/images/june.jpg"
        class="hover:scale-105 hover:-rotate-2 transition-transform object-cover"
      />
      <div class="overlay flex"></div>
      <div class="overlay-text">
        <p class="sub-header">Dates</p>
        <p class="info">June 13th-14th</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.block-side {
  @apply text-center md:w-1/2 w-full relative overflow-hidden rounded-md h-96;
}
</style>
