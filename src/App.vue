<template>
  <h1>{{ greeting }}</h1>
  <p>Spaces Left: {{ spacesLeft }}</p>
  <p>Current Participants:</p>
  <ul>
    <li v-for="participant in participants" :key="participant">
      {{ participant }}
    </li>
  </ul>
  <button @click="increaseCapacity()">Increase Capacity</button>
</template>

<script>
import useEventSpace from "@/use/event-space";
export default {
  name: "App",
  setup() {
    // return { ...useEventSpace() };
    const { greeting, participants, spacesLeft, increaseCapacity } = useEventSpace();
    return { greeting, participants, spacesLeft, increaseCapacity };
  },
};
</script>

<style></style>
