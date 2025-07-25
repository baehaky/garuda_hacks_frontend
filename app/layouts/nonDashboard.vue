<template>
  <div class="fixed top-0 left-0 z-10">
    <img
      src="../assets/image/image1.png"
      alt="Dekorasi awan kiri"
      class="w-48 md:w-64"
    />
  </div>

  <div class="fixed top-0 right-0 z-10">
    <img
      src="../assets/image/image.png"
      alt="Dekorasi awan kanan"
      class="w-64 md:w-96"
    />
  </div>
  <div class="flex flex-col min-h-screen pb-24 bg-[#FFB22C]">
    <main class="flex-1 flex items-center">
      <slot />
    </main>
  </div>

  <div
    class="fixed bottom-0 left-0 right-0 h-24 flex justify-center items-center z-50"
  >
    <div
      class="bg-[#4C2B1A] flex justify-around items-center gap-x-4 md:gap-x-8 px-6 py-3 rounded-full shadow-xl"
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
