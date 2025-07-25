<script setup>
import maskot from "~/assets/svg/maskot.svg";
</script>

<template>
  <section
    class="w-full flex flex-col lg:flex-row items-center justify-center gap-y-20 lg:gap-x-20"
  >
    <div class="w-full lg:w-1/2 flex justify-center lg:justify-end">
      <h2
        class="text-4xl sm:text-5xl lg:text-6xl -mt-20 max-w-md lg:max-w-lg text-center lg:text-center font-bold text-[#6F4E37] leading-tight font-lora bg-[#FFF2D5]"
      >
        Mulai Petualangan Belajarmu Bersama Kawan Aksara!
      </h2>
    </div>

    <div class="w-full lg:w-1/2 flex justify-center lg:justify-start">
      <div
        class="w-full max-w-xs sm:max-w-sm flex flex-col items-center gap-y-5"
      >
        <div class="relative w-full">
          <img
            :src="maskot"
            alt="Maskot Kawan Aksara"
            class="absolute left-1/4 -translate-x-1/2 -top-20 sm:-top-[135px] w-32 sm:w-48 -z-10"
          />

          <NuxtLink to="/auth/register">
            <button
              class="px-8 py-3 sm:px-12 sm:py-4 w-full text-lg sm:text-xl font-bold text-white bg-[#D47A12] rounded-xl shadow-lg border-2 border-amber-900/50 hover:bg-orange-700 transition-colors font-lora"
            >
              AYO DAFTAR DULU!
            </button>
          </NuxtLink>
        </div>

        <div class="w-full">
          <NuxtLink to="/auth/login">
            <button
              class="px-8 py-3 sm:px-12 sm:py-4 w-full text-lg sm:text-xl font-bold text-[#6F4E37] bg-[#FFF0D4] rounded-xl shadow-lg border-2 border-[#D47A12] hover:bg-amber-100 transition-colors font-lora"
            >
              SUDAH PUNYA AKUN
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
