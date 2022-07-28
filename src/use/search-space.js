import { ref, watch } from "vue";

export default function useSearcgSpace() {
  const searchInput = ref("");
  const results = ref(0);

  watch(
    searchInput,
    () => {
      results.value = searchInput.value.length;
    },
    { immediate: true }
  );

  return { searchInput, results };
}
