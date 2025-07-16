<script setup lang="ts">
import { FwbButton, FwbNavbar, FwbNavbarCollapse, FwbNavbarLink } from "flowbite-vue";
</script>
<template>
  <fwb-navbar>
    <template #logo>
      <a href="/" class="font-bold text-2xl otr-gradient">Murphy Reunion</a>
    </template>
    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link link="/">
          <span class="header-link">Home</span>
        </fwb-navbar-link>
        <fwb-navbar-link link="/about">
          <span class="header-link">About</span>
        </fwb-navbar-link>
        <!-- <fwb-navbar-link link="/committee">
          <span class="header-link">Committee</span>
        </fwb-navbar-link> -->
        <!-- <fwb-navbar-link link="/post">
          <span class="header-link">Post Event</span>
        </fwb-navbar-link> -->
        <!-- <fwb-navbar-link link="/lodging">
          <span class="header-link">Lodging</span>
        </fwb-navbar-link> -->
        <!-- <fwb-navbar-link link="#"> Contact </fwb-navbar-link> -->
      </fwb-navbar-collapse>
    </template>
    <template #right-side>
      <!-- <fwb-button href="/post" class="otr-bg-gradient"> We Did It! </fwb-button> -->
      <fwb-button href="/pay" class="otr-bg-gradient"> Secure Your Spot </fwb-button>
    </template>
  </fwb-navbar>
</template>

<style scoped>
.header-link {
  @apply hover:!text-red-600 dark:text-white;
}
</style>
