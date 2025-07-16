<script setup lang="ts">
import { FwbA, FwbAlert } from "flowbite-vue";
</script>
<template>
  <div class="otr-container">
    <h1 class="page-title">Hotel Info</h1>
    <p class="sub-title">Stay close, stay connected!</p>

    <p class="text-center">
      Whether you're coming from out of town or just want to be nearby for all the fun, we've
      gathered some convenient lodging options for you. From group rates at local hotels to nearby
      rentals and campgrounds, there's something for everyone's comfort and budget. Let's make it a
      full weekend of family, fun, and togetherness!
    </p>

    <div class="flex flex-col md:flex-row w-full md:mb-5">
      <div class="w-full md:w-1/2">
        <img class="rounded-md drop-shadow-2xl" src="/images/holiday-inn-express-2.jpg" />
      </div>
      <div class="w-full md:w-1/2 place-content-center text-center p-5">
        <p>
          <span class="font-bold xl:text-3xl text-2xl">Holiday Inn Express Cincinnati West</span>
          <br />
          5505 Rybolt Road
          <br />
          Cincinnati, OH 45248
        </p>
        <p>
          Mention <span class="handle">"Martin-Porterfield Family Reunion"</span> when booking.
          Enjoy free parking, breakfast, outdoor pool, and fitness center. A credit card is required
          for booking but will only be charges upon arrival.
        </p>
      </div>
    </div>

    <fwb-alert type="warning">
      <template #icon>
        <svg
          class="flex-shrink-0 w-4 h-4 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
          />
        </svg>
        <span class="sr-only">Info</span>
      </template>
      <template #title>
        <h3 class="text-lg font-medium">Reservation Deadline</h3>
      </template>
      <template #default="{}">
        <div class="mt-2 mb-4 text-sm">
          Reserve by May 15, 2025 by calling
          <fwb-a href="tel:5135746000" class="handle">513-574-6000</fwb-a>
        </div>
        <div class="flex">
          <fwb-a
            type="button"
            href="tel:5135746000"
            class="hover:no-underline text-white bg-yellow-800 hover:bg-transparent hover:text-yellow-800 border-2 border-yellow-800 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center"
          >
            Call Now
          </fwb-a>
        </div>
      </template>
    </fwb-alert>
  </div>
</template>

<style scoped>
.sub-title {
  @apply text-base text-center italic mt-2;
}
</style>
