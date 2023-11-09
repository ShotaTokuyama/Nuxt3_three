<template>
  <header class="w-full fixed z-50 flex p-4 bg-black items-center justify-between">
    <div class="flex gap-x-4">
      <NuxtLink to="/" class="text-slate-300 hover:text-slate-100">Home</NuxtLink>
    </div>
    <ColorMode />
  </header>
  <slot />
</template>