<template>
  <div class="fixed top-0 left-0 z-10">
    <img
      src="../../assets/image/image1.png"
      alt="Dekorasi awan kiri"
      class="w-48 md:w-64"
    />
  </div>

  <div class="fixed top-0 right-0 z-10">
    <img
      src="../../assets/image/image.png"
      alt="Dekorasi awan kanan"
      class="w-64 md:w-96"
    />
  </div>
  <div class="fixed bottom-0 left-10 z-50">
    <img
      :src="maskot"
      alt="Dekorasi awan kanan"
      class="w-74 md:w-96"
    />
  </div>
  <section class="w-full flex-col bg-[#FFB22C]">
    <div class="w-full flex justify-center items-center">
      <h1
        class="text-5xl text-center p-5 mb-5 rounded-lg border-4 border-[#443A2C] bg-[#F8D8A5] relative z-20"
      >
        Aksara Jawa
      </h1>
    </div>
    <div class="relative z-20 pb-20">
      <div class="flex flex-wrap justify-center items-start gap-6">
        <img :src="bahasa1" alt="Aksara Jawa 1" class="w-[30%] rounded-lg" />
        <img :src="bahasa2" alt="Aksara Jawa 2" class="w-[20%] rounded-lg" />
        <img :src="bahasa3" alt="Aksara Jawa 3" class="w-[20%] rounded-lg" />
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "non-dashboard",
});
import bahasa1 from "@/assets/svg/bahasa1.svg";
import bahasa2 from "@/assets/svg/bahasa2.svg";
import bahasa3 from "@/assets/svg/bahasa3.svg";
import maskot from "@/assets/svg/maskotTranslate.svg";
</script>
