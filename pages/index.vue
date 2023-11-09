<script setup lang="ts">
const containerRef: Ref<HTMLElement | null> = ref(null);
const container: Ref<HTMLElement> = containerRef as Ref<HTMLElement>;
const { clientWidth, clientHeight } = useWindowSize()

onMounted(() => {
  const { init } = useSphere(container, clientWidth, clientHeight)
  init()
})
</script>

<template>
  <div class="w-full h-full" ref="container">
  </div>
</template>