<template>
  <div
    class="flex flex-col py-10 font-lora font-bold text-[#443A30]"
    :style="`background-image: url(${picture1})`"
  >
    <main class="flex-1 flex items-center">
      <slot />
    </main>
  </div>

  <div
    class="fixed bottom-0 left-0 right-0 h-24 flex justify-center items-center z-50"
  >
    <div
      class="bg-[#4C2B1A] w-[60%] flex justify-around items-center gap-x-4 md:gap-x-8 px-6 py-3 rounded-lg shadow-xl"
    >
      <NuxtLink to="/dashboard" class="nav-link" aria-label="Dashboard">
        <Icon name="mdi:home" size="32" />
      </NuxtLink>

      <NuxtLink
        to="/dashboard/translate"
        class="nav-link"
        aria-label="Translate"
      >
        <Icon name="mdi:translate" size="32" />
      </NuxtLink>

      <NuxtLink to="/dashboard/profile" class="nav-link" aria-label="Profile">
        <Icon name="mdi:account" size="32" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import picture1 from "../assets/svg/bgprofile.svg";

definePageMeta({
  layout: "profile-dashboard",
});
</script>

<style>
.nav-link {
  @apply p-3 rounded-full text-white/70 transition-all duration-300;
}

.router-link-exact-active {
  @apply text-white bg-red-800/60;
  box-shadow: 0 0 15px 5px rgba(255, 100, 100, 0.4);
}

.nav-link:not(.router-link-exact-active):hover {
  @apply text-white bg-white/20;
}
</style>
