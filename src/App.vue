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
  <div>
    <input type="text" v-model="searchInput" />
    <span>Results: {{ results }}</span>
  </div>
</template>

<script>
import useEventSpace from "@/use/event-space";
import useSearchSpace from "@/use/search-space";
export default {
  name: "App",
  setup() {
    // return { ...useEventSpace() };
    const { greeting, participants, spacesLeft, increaseCapacity } =
      useEventSpace();
    let { searchInput, results } = useSearchSpace();
    return {
      greeting,
      participants,
      spacesLeft,
      increaseCapacity,
      searchInput,
      results,
    };
  },
};
</script>

<style></style>
