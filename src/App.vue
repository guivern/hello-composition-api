<template>
  <h1>{{ greeting }}</h1>
  <p>Capacity: {{ capacity }}</p>
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
import { computed, reactive, toRefs } from "vue";

export default {
  name: "App",
  setup() {
    const data = reactive({
      greeting: "Hello Composition API",
      participants: ["Jhon", "Peter", "Chloe", "Michael"],
      capacity: 5,
      spacesLeft: computed(() => {
        return data.capacity - data.participants.length;
      }),
    });

    function increaseCapacity() {
      data.capacity = data.capacity + 1;
    }

    return { ...toRefs(data), increaseCapacity };
  },
};
</script>

<style></style>
