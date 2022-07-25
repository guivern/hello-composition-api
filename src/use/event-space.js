import { computed, ref } from "vue";

export default function useEventSpace() {
  const greeting = ref("Hello Composition API");
  const participants = ref(["Jhon", "Peter", "Chloe", "Michael"]);
  const capacity = ref(5);
  const spacesLeft = computed(() => {
    return capacity.value - participants.value.length;
  });

  function increaseCapacity() {
    capacity.value++;
  }

  return { greeting, participants, capacity, spacesLeft, increaseCapacity };
}
