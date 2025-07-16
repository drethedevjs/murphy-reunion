<script setup lang="ts">
import FacebookIcon from "@/components/icons/FacebookIcon.vue";
import PhoneIcon from "@/components/icons/PhoneIcon.vue";
import committeeMembers from "@/data/committeeMembers";
import { FwbCard } from "flowbite-vue";
import { Mail } from "lucide-vue-next";

const leadership = committeeMembers.filter((m) => m.inLeadership);
const members = committeeMembers
  .filter((m) => !m.inLeadership)
  .sort((a, b) => {
    const nameA = a.lastName.toUpperCase();
    const nameB = b.lastName.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
</script>

<template>
  <div class="otr-container">
    <h1 class="page-title mb-10">Committee</h1>
    <p class="text-center mb-10">
      This event wouldn't be possible without the time, energy, and heart of our dedicated reunion
      committee. From planning and coordination to food, logistics, and fun, this team has worked
      behind the scenes to make our gathering unforgettable. We're proud to introduce the people
      helping bring our family together — one call, one email, and one memory at a time.
    </p>

    <h2 class="text-center mb-10 font-bold">Leadership</h2>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center">
      <FwbCard
        v-for="member in leadership"
        :key="member.id"
        :img-src="member.imgSrc"
        variant="image"
      >
        <div class="p-5">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white otr-gradient-2 cursor-default"
          >
            {{ member.firstName }} {{ member.lastName }}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            {{ member.role }}
          </p>
          <div class="flex flex-row gap-4">
            <a :href="member.facebook" target="_blank" v-if="member.facebook">
              <FacebookIcon />
            </a>
            <a :href="'tel:' + member.phone" v-if="member.phone">
              <PhoneIcon />
            </a>
            <a :href="'mailto:' + member.email" v-if="member.email">
              <Mail v-if="member.email" class="hover:text-primary" />
            </a>
          </div>
        </div>
      </FwbCard>
    </div>

    <hr class="my-10" />

    <h2 class="text-center mb-10 font-bold">Members</h2>
    <div
      class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 place-items-center lg:gap-4 mb-10"
    >
      <FwbCard v-for="member in members" :key="member.id" :img-src="member.imgSrc" variant="image">
        <div class="p-5">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white otr-gradient-2 cursor-default"
          >
            {{ member.firstName }} {{ member.lastName }}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            {{ member.role }}
          </p>
          <div class="flex flex-row gap-4">
            <a :href="member.facebook" target="_blank" v-if="member.facebook">
              <FacebookIcon />
            </a>
            <a :href="'tel:' + member.phone" v-if="member.phone">
              <PhoneIcon />
            </a>
            <a :href="'mailto:' + member.email" v-if="member.email">
              <Mail v-if="member.email" class="hover:text-primary" />
            </a>
          </div>
        </div>
      </FwbCard>
    </div>
  </div>
</template>

<style scoped></style>
