<script setup lang="ts">
import {
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
} from "flowbite-vue";
</script>
<template>
  <div class="otr-container">
    <h1 class="page-title mb-10">Secure Your Spot</h1>
    <p class="text-center">
      This year's family reunion is shaping up to be something truly special—filled with laughter,
      good food, games, and unforgettable memories. To help cover the costs of food, venue,
      activities, and keepsakes, we've set a simple admission price. Every contribution helps make
      the event amazing for everyone!
    </p>

    <p class="text-red-600 font-semibold text-center">
      Note: T-Shirts have already been ordered. If you pay today, you will not receive one.
    </p>

    <fwb-table class="lg:w-1/2 place-self-center">
      <fwb-table-head class="text-center">
        <fwb-table-head-cell>Attendee</fwb-table-head-cell>
        <fwb-table-head-cell>Price</fwb-table-head-cell>
      </fwb-table-head>
      <fwb-table-body class="text-center">
        <fwb-table-row>
          <fwb-table-cell>Adult (18+)</fwb-table-cell>
          <fwb-table-cell class="dark:text-white text-black">
            <span class="text-gray-500"><s>$90</s></span> $80
            <small>per person</small></fwb-table-cell
          >
        </fwb-table-row>
        <fwb-table-row>
          <fwb-table-cell>Age 13-17</fwb-table-cell>
          <fwb-table-cell class="dark:text-white text-black">
            <span class="text-gray-500"><s>$25</s></span> $20
            <small>per person</small></fwb-table-cell
          >
        </fwb-table-row>
        <fwb-table-row>
          <fwb-table-cell>Ages 12 and Under</fwb-table-cell>
          <fwb-table-cell class="dark:text-white text-black">FREE</fwb-table-cell>
        </fwb-table-row>
      </fwb-table-body>
    </fwb-table>

    <h2>How to Pay</h2>
    <p>
      We've set up a few simple ways for you to send your admission payment—just pick whatever works
      best for you. Whether you prefer digital options or want to pay in person, we've got you
      covered. Every contribution goes straight into making this reunion one to remember!
    </p>
    <fwb-table class="lg:w-3/4 place-self-center">
      <fwb-table-head class="text-center">
        <fwb-table-head-cell>Medium</fwb-table-head-cell>
        <fwb-table-head-cell>Location</fwb-table-head-cell>
      </fwb-table-head>
      <fwb-table-body class="text-center">
        <fwb-table-row>
          <fwb-table-cell>Zelle</fwb-table-cell>
          <fwb-table-cell class="dark:text-white text-black">
            Send payments to Teresa Barbee at
            <span class="handle"> barbeecc1@gmail.com </span>
            . After sending your payment, please email the same address with the names and ages of
            your attendees to help us keep track.
          </fwb-table-cell>
        </fwb-table-row>
        <fwb-table-row>
          <fwb-table-cell>Mail</fwb-table-cell>
          <fwb-table-cell class="dark:text-white text-black">
            Send cashier's check or money order to the following address:
            <br />
            <br />
            Teresa Barbee
            <br />
            14019 Windy Stream Ln.
            <br />
            Houston, TX 77044
            <br />
            <br />
            Please include the names and ages of all your party members along with contact email for
            one adult.
          </fwb-table-cell>
        </fwb-table-row>
        <fwb-table-row>
          <fwb-table-cell>Venmo</fwb-table-cell>
          <fwb-table-cell class="dark:text-white text-black">
            Venmo payment to Nichole Henderson at
            <span class="handle">@martinnm117</span></fwb-table-cell
          >
        </fwb-table-row>
      </fwb-table-body>
    </fwb-table>
  </div>
</template>

<style scoped></style>
