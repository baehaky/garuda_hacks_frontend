<template>
  <div
    class="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
    :style="`background-image: url(${bgSvg})`"
  >
    <aside class="space-y-6 bg-[#F8D8A5]">
      <div
        class="bg-kawan-card-light border-4 border-kawan-brown rounded-3xl p-5 shadow-lg"
      >
        <div class="flex items-center space-x-4 flex-col">
          <img
            class="w-full h-32 rounded-2xl border-2 border-kawan-brown bg-yellow-400 object-cover"
            src="https://i.imgur.com/8QW2aAv.png"
            alt="Avatar Mas Bro"
          />
          <div>
            <h2 class="text-2xl font-bold text-kawan-brown">Mas Bro</h2>
            <p class="text-sm text-kawan-brown/80">@masbro_</p>
            <p class="text-xs text-kawan-brown/70 mt-1">
              Bergabung sejak Juli 2025
            </p>
          </div>
        </div>
      </div>

      <div
        class="bg-kawan-card-light border-4 border-kawan-brown rounded-3xl p-5 shadow-lg"
      >
        <h3 class="font-bold text-lg text-kawan-brown mb-3">
          Bagian Statistik Belajar
        </h3>
        <div
          class="bg-kawan-card-dark rounded-2xl p-4 flex justify-around text-center"
        >
          <div>
            <p class="text-xs text-kawan-brown/80">Poin Total</p>
            <p class="font-bold text-xl text-kawan-brown">1.100 Pt</p>
          </div>
          <div class="border-l-2 border-kawan-brown/50 h-12"></div>
          <div>
            <p class="text-xs text-kawan-brown/80">Runtunan Saiki</p>
            <p class="font-bold text-xl text-kawan-brown">3 hari</p>
          </div>
        </div>
      </div>

      <div
        class="bg-kawan-card-light border-4 border-kawan-brown rounded-3xl p-5 shadow-lg"
      >
        <h3 class="font-bold text-lg text-kawan-brown mb-3">
          Tembung Dikuasai
        </h3>
        <div class="bg-kawan-card-dark rounded-2xl p-4 text-center">
          <p class="font-bold text-xl text-kawan-brown">100 Kosakata</p>
          <p class="text-sm text-kawan-brown/80">7 hari</p>
        </div>
      </div>
    </aside>

    <main class="flex justify-center order-first lg:order-none">
      <img
        src="https://i.imgur.com/x0RmzNo.png"
        alt="Avatar Kapibara Utama"
        class="w-full max-w-sm drop-shadow-2xl"
      />
    </main>

    <aside>
      <div
        class="bg-kawan-card-light border-4 border-kawan-brown rounded-3xl p-6 shadow-lg h-full space-y-4"
      >
        <h2 class="text-2xl font-bold text-kawan-brown text-center">
          Galeri Ageman
        </h2>

        <div
          class="bg-kawan-card-dark rounded-2xl p-4 border-2 border-kawan-brown/50"
        >
          <p class="font-semibold text-base text-kawan-brown">
            Mendapatkan 100 Point
          </p>
          <div
            class="w-full bg-[#EADBC0] rounded-full h-4 mt-2 overflow-hidden"
          >
            <div
              class="bg-kawan-brown h-4 rounded-full"
              style="width: 100%"
            ></div>
          </div>
          <p class="text-right text-xs text-kawan-brown/80 mt-1">100 / 100</p>
        </div>

        <div
          class="bg-kawan-card-dark rounded-2xl p-4 border-2 border-kawan-brown/50"
        >
          <p class="font-semibold text-base text-kawan-brown">
            Jawadwipa Ngulandara
          </p>
          <div
            class="w-full bg-[#EADBC0] rounded-full h-4 mt-2 overflow-hidden"
          >
            <div
              class="bg-kawan-brown h-4 rounded-full"
              style="width: 30%"
            ></div>
          </div>
          <p class="text-right text-xs text-kawan-brown/80 mt-1">30 / 100</p>
        </div>

        <div
          class="bg-kawan-card-dark rounded-2xl p-4 border-2 border-kawan-brown/50"
        >
          <p class="font-semibold text-base text-kawan-brown">Kanca Kapibara</p>
          <div
            class="w-full bg-[#EADBC0] rounded-full h-4 mt-2 overflow-hidden"
          >
            <div
              class="bg-kawan-brown h-4 rounded-full"
              style="width: 60%"
            ></div>
          </div>
          <p class="text-right text-xs text-kawan-brown/80 mt-1">60 / 100</p>
        </div>

        <div
          class="bg-kawan-card-dark rounded-2xl p-4 border-2 border-kawan-brown/50"
        >
          <p class="font-semibold text-base text-kawan-brown">Lali Wayah</p>
          <div
            class="w-full bg-[#EADBC0] rounded-full h-4 mt-2 overflow-hidden"
          >
            <div
              class="bg-kawan-brown h-4 rounded-full"
              style="width: 25%"
            ></div>
          </div>
          <p class="text-right text-xs text-kawan-brown/80 mt-1">25 / 100</p>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "non-dashboard",
});
import bgSvg from "@/assets/svg/bgprofile.svg";
</script>
