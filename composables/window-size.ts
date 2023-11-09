const clientWidth: Ref<number> = ref(0)
const clientHeight: Ref<number> = ref(0)
const targetDom: Ref<HTMLElement | null> = ref(null)

export const useWindowSize = () => {

  onMounted(() => {
    targetDom.value = document.getElementById('app')
    if (targetDom.value === null) return
    clientWidth.value = targetDom.value.clientWidth
    clientHeight.value = targetDom.value.clientHeight
    window.addEventListener('resize', updateWindowSize)
  })
  const updateWindowSize = () => {
    if (targetDom.value === null) return
    clientWidth.value = targetDom.value.clientWidth
    clientHeight.value = targetDom.value.clientHeight
  }
  return {
    clientWidth,
    clientHeight
  }
}