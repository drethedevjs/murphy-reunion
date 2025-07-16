<script setup lang="ts">
import type CarouselImage from "@/interfaces/CarouselImage";
import { FwbButton, FwbCarousel } from "flowbite-vue";

const props = withDefaults(
  defineProps<{
    pictures: CarouselImage[];
    headerTextColors: string;
    headerText: string;
    openMapsSearchText: string;
    buttonGradient:
      | "purple-blue"
      | "cyan-blue"
      | "green-blue"
      | "purple-pink"
      | "pink-orange"
      | "teal-lime"
      | "red-yellow";
    buttonLink: string;
    date: string;
    headerPullRight?: boolean;
    rowReverse?: boolean;
    timeFrame: string;
  }>(),
  {
    headerPullRight: false,
    rowReverse: false,
  },
);

let gradientColorClasses: string = "";
const gradient = (colorsArr: string) => {
  const colors: string[] = colorsArr.split("|");
  gradientColorClasses = `from-${colors[0]}-500 via-${colors[1]} to-${colors[2]}-500`;
};

gradient(props.headerTextColors);

const openMaps = (address: string) => {
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  window.open(mapUrl, "_blank");
};
</script>
<template>
  <h2 :class="props.headerPullRight ? 'text-right' : ''">{{ props.date }}</h2>
  <h3 :class="props.headerPullRight ? 'text-right' : ''">{{ props.timeFrame }}</h3>
  <div
    class="flex flex-col xl:flex-row w-full md:mb-5"
    :class="props.rowReverse ? 'xl:flex-row-reverse' : 'xl:flex-row'"
  >
    <div class="w-full xl:w-1/2">
      <FwbCarousel :pictures="props.pictures" slide :slide-interval="3000" />
    </div>
    <div class="w-full xl:w-1/2 place-content-center text-center p-5">
      <p
        class="location-heading text-transparent bg-gradient-to-r bg-clip-text"
        :class="gradientColorClasses"
      >
        {{ props.headerText }}
      </p>
      <p @click="openMaps(openMapsSearchText)" class="address">
        <slot name="address1"></slot>
        <br />
        <slot name="address2"></slot>
      </p>

      <p class="mb-8">
        <slot name="blurb"> </slot>
      </p>

      <fwb-button
        :gradient="props.buttonGradient"
        size="xl"
        class="transition-colors"
        target="_blank"
        :href="props.buttonLink"
      >
        Learn More
      </fwb-button>
    </div>
  </div>
</template>

<style scoped>
h2 {
  @apply mb-5 md:text-6xl text-4xl font-semibold;
}

h3 {
  @apply mb-10 md:text-4xl text-2xl font-semibold;
}

.address {
  @apply cursor-pointer hover:underline;
}

.location-heading {
  @apply font-bold xl:text-7xl text-5xl;
}
</style>
