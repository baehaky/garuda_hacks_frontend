<script setup>
import { useAuth } from "/composable/useAuth";
import test from "../assets/svg/Group 37.svg";
import test1 from "../assets/svg/testtt.svg";
const { logout } = useAuth();
</script>

<template>
  <NuxtLink class="fixed top-[89px] left-4 z-50" to="/dashboard/belajar">
    <img :src="test" class="w-[175px]" alt="" />
  </NuxtLink>
  <NuxtLink class="fixed bottom-[135px] left-[250px] z-50" to="/dashboard/voiceassistant">
    <img :src="test1" class="w-[150px]" alt="" />
  </NuxtLink>
  <div class="main-layout">
    <div class="relative z-10 flex flex-col min-h-screen ">
      <nav class="p-4 md:p-6">
        <div class="flex items-center gap-2">
          <h1 class="text-3xl md:text-4xl font-bold text-[#4F200D] bg-[#FFB22C] font-lora">
            KAWAN <br />
            AKSARA
          </h1>
          <button
            @click="logout"
            class="ml-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold shadow transition-colors duration-200"
          >
            <Icon name="mdi:logout" size="20" />
            Keluar
          </button>
        </div>
      </nav>
      <main class="flex items-center">
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
  </div>
</template>

<style scoped>
.main-layout {
  background-image: url("~/assets/svg/test.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

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
