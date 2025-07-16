<script setup lang="ts">
import InfoDetail from "@/components/InfoDetail.vue";
import type CarouselImage from "@/interfaces/CarouselImage";

const mainEventPictures: CarouselImage[] = [
  { src: "/images/main-event/main-event.jpg", alt: "Front of Main Event building." },
  { src: "/images/main-event/main-event-2.jpg", alt: "Image 1" },
  { src: "/images/main-event/main-event-3.jpg", alt: "Image 1" },
  { src: "/images/main-event/main-event-4.jpg", alt: "Image 1" },
];
const mtAiryPictures = [
  { src: "/images/mt-airy/mt-airy.jpg", alt: "Picnic shelter." },
  { src: "/images/mt-airy/mt-airy-2.jpg", alt: "Playground set for kids." },
];
</script>
<template>
  <div class="otr-container">
    <h1 class="page-title">Event Details</h1>
    <p class="mt-10 text-2xl text-center">
      To ensure that everyone has a great time and stays comfortable, we have secured some fantastic
      locations to help us beat the heat while creating memorable moments together. It's in these
      will enjoy delicious food, and everyone will receive swag bags that include a family T-shirt
      and some other cool surprises to make all of this possible.
    </p>

    <InfoDetail
      :pictures="mainEventPictures"
      headerTextColors="blue|purple|pink"
      headerText="Main Event"
      openMapsSearchText="Main Event, West Chester, OH 45069"
      buttonGradient="purple-pink"
      buttonLink="https://www.mainevent.com/locations/ohio/west-chester/"
      date="Friday, June 13, 2025"
      timeFrame="6:00p - 8:00p"
    >
      <template #address1>9477 Oxford Way</template>
      <template #address2>West Chester, OH 45069</template>
      <template #blurb>
        We will have a private room at this venue for the
        <span class="text-secondary font-semibold">2-hour time slot</span>. Light snacks will be
        provided. Swag bags (t-shirts, etc.) will be handed out during this time.
      </template>
    </InfoDetail>

    <hr />
    <InfoDetail
      :pictures="mtAiryPictures"
      headerTextColors="green|blue|yellow"
      headerText="Mt. Airy Park"
      openMapsSearchText="3990 Maple Ridge Rd., Cincinnati, OH 45248"
      buttonGradient="green-blue"
      buttonLink="https://www.cincinnati-oh.gov/cincyparks/visit-a-park/find-a-parkfacility/mt-airy-forest/"
      date="Saturday, June 14, 2025"
      timeFrame="1:00p - 7:00p"
      :headerPullRight="true"
      :rowReverse="true"
    >
      <template #address1>3990 Maple Ridge Rd.</template>
      <template #address2>Cincinnati, OH 45248</template>
      <template #blurb>
        Let's gather for a fun-filled day at Mt. Airy Park with plenty of delicious food, classic
        family games, and laughter all around. Whether you're competing in a relay race or relaxing
        with a plate of BBQ, there's something for everyone to enjoy! Time and agenda forthcoming.
      </template>
    </InfoDetail>
  </div>
</template>
