<script setup lang="ts">
const containerRef: Ref<HTMLElement | null> = ref(null);
const container: Ref<HTMLElement> = containerRef as Ref<HTMLElement>;
const { clientWidth, clientHeight } = useWindowSize()
useWindowSize()
onMounted(() => {
  const { init } = useSphere(container, clientWidth, clientHeight)
  init()
})
</script>

<template>
  <div id="app" class="fixed top-0 left-0 w-full h-full">
    <div class="w-full h-full" ref="container"></div>
  </div>
</template>