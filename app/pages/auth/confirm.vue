<template>
  <div
    class="bg-white/70 backdrop-blur-sm shadow-lg rounded-lg p-8 w-full max-w-md mx-auto border border-[#A1887F]/50"
  >
    <h1 class="text-3xl font-bold mb-6 text-center text-[#6F4E37] font-lora">
      Konfirmasi Email
    </h1>

    <div
      v-if="!confirmed"
      class="flex flex-col items-center transition-opacity duration-500"
    >
      <svg
        class="w-20 h-20 text-yellow-500 mb-4"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        ></path>
      </svg>
      <p class="text-gray-800 text-center mb-4 leading-relaxed">
        Satu langkah lagi! Kami telah mengirimkan tautan konfirmasi ke email
        Anda. Silakan periksa kotak masuk untuk mengaktifkan akun.
      </p>
      <p class="text-sm text-gray-600 text-center">
        Belum menerima email? Cek folder spam atau
        <button
          @click="resendConfirmation"
          class="font-semibold text-[#6F4E37] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6F4E37]/50 rounded"
        >
          kirim ulang</button
        >.
      </p>
    </div>

    <div
      v-else
      class="flex flex-col items-center transition-opacity duration-500"
    >
      <svg
        class="w-20 h-20 text-green-600 mb-4"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12l2 2 4-4m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p class="text-xl text-green-700 text-center font-semibold mb-2">
        Email berhasil dikonfirmasi!
      </p>
      <p class="text-gray-800 text-center">
        Sekarang Anda bisa
        <NuxtLink
          to="/auth/login"
          class="font-semibold text-[#6F4E37] hover:underline"
        >
          masuk
        </NuxtLink>
        ke akun Anda.
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const client = useSupabaseClient();
const confirmed = ref(false);

onMounted(async () => {
  const { data } = await client.auth.getUser();
  if (data?.user?.email_confirmed_at) {
    confirmed.value = true;
  }
});
</script>
