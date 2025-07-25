<template>
  <div class="flex flex-col bg-cover bg-center bg-no-repeat bg-[#FFF2D5]">
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${heroBg})`, opacity: 0.3 }"
    ></div>

    <div class="relative z-10 flex flex-col min-h-screen">
      <nav class="p-4 md:p-6">
        <NuxtLink to="/dashboard" class="flex items-center gap-2">
          <h1
            class="text-3xl md:text-4xl font-bold text-[#6F4E37] bg-[#FFF2D5] font-lora"
          >
            KAWAN <br />
            AKSARA
          </h1>
        </NuxtLink>
      </nav>
      <main class="flex-1 flex items-center">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import heroBg from "~/assets/image/KAWANAKSARA.jpg";
</script>
