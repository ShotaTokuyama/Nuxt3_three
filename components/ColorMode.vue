<script setup lang="ts">
const colorMode = useColorMode();
const onClick = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))
</script>

<template>
  <button aria-label="Color Mode"
    class="bg-slate-500 hover:bg-slate-700 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center"
    @click="onClick">
    <Icon v-if="colorMode.value === 'dark'" name="heroicons-outline:moon" class="text-2xl" />
    <Icon v-else name="heroicons-outline:sun" class="text-2xl" />
  </button>
</template>