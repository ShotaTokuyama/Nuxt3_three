<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiHome, mdiFaceManProfile, mdiLaptop, mdiGithub, mdiPost } from '@mdi/js';
</script>
<template>
  <div class="flex bg-black text-slate-200">
    <div
      class="z-50 relative flex flex-col bg-clip-border rounded-xl text-slate-300 h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-slate-900/5">
      <div class="mb-2 p-4">
        <h1 class="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-slate-200">
          Tokuyama Shota</h1>
        <p class="text-slate-200">Web Frontend Engineer</p>
      </div>
      <nav class="flex flex-col gap-4 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700 mb-8">
        <div role="button" tabindex="0"
          class="flex items-center w-full p-3 rounded-lg text-start text-slate-200 text-2xl leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
          <div class="grid place-items-center mr-4">
            <svg-icon type="mdi" :path="mdiHome"></svg-icon>
          </div>
          <NuxtLink to="/">HOME</NuxtLink>
        </div>
        <div role="button" tabindex="0"
          class="flex items-center w-full p-3 rounded-lg text-start text-slate-200 text-2xl leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
          <div class="grid place-items-center mr-4">
            <svg-icon type="mdi" :path="mdiFaceManProfile"></svg-icon>
          </div>
          <NuxtLink to="/profile">PROFILE</NuxtLink>
        </div>
        <div role="button" tabindex="0"
          class="flex items-center w-full p-3 rounded-lg text-start text-slate-200 text-2xl leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
          <div class="grid place-items-center mr-4">
            <svg-icon type="mdi" :path="mdiGithub"></svg-icon>
          </div>
          <a href="https://github.com/ShotaTokuyama" target="_blank">GitHub</a>
        </div>
        <div role="button" tabindex="0"
          class="flex items-center w-full p-3 rounded-lg text-start text-slate-200 text-2xl leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
          <div class="grid place-items-center mr-4">
            <svg-icon type="mdi" :path="mdiPost"></svg-icon>
          </div>
          <a href="https://qiita.com/ShotaTokuyama" target="_blank">Qiita</a>
        </div>
      </nav>
    </div>
    <main class="w-full h-screen p-10">
      <slot />
    </main>
  </div>
</template>
