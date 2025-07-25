// File: login.vue

<script setup>
import mascotHappy from "~/assets/svg/maskothappy.svg";

const client = useSupabaseClient();
const router = useRouter();

const email = ref("");
const password = ref("");
const errorMsg = ref("");

const loginUser = async () => {
  try {
    const { data, error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;

    if (!data.user.email_confirmed_at) {
      errorMsg.value = "Email belum dikonfirmasi. Silakan cek inbox Anda.";
      await client.auth.signOut();
      return;
    }

    // UBAH BARIS INI
    router.push("/dashboard");
  } catch (error) {
    errorMsg.value = "Email atau kata sandi salah.";
  }
};
</script>

<template>
  <section
    class="w-full flex flex-col lg:flex-row items-center justify-center p-4 min-h-[85vh] gap-y-10"
  >
    <div
      class="w-full lg:w-1/2 flex flex-col items-center justify-center gap-y-6 -mt-20"
    >
      <div class="relative w-full">
        <img
          :src="mascotHappy"
          alt="Maskot Kawan Aksara"
          class="absolute left-[100px] -translate-x-1/2 -top-20 sm:-top-[70px] w-28 -z-10"
        />
      </div>
      <h2
        class="text-4xl lg:text-5xl max-w-md text-center font-lora font-bold text-[#6F4E37] leading-tight"
      >
        Mulai Petualangan Belajarmu Bersama Kawan Aksara!
      </h2>
    </div>

    <div class="w-full lg:w-1/2 flex justify-center -mt-20">
      <div class="w-full max-w-md p-8">
        <h1
          class="text-4xl font-lora font-bold text-center text-[#6F4E37] mb-6"
        >
          Masuk
        </h1>

        <form @submit.prevent="loginUser" class="space-y-4">
          <div>
            <input
              v-model="email"
              type="email"
              placeholder="Email atau nama pengguna"
              class="w-full px-4 py-3 bg-[#FFF0D4] border-2 border-[#D47A12] focus:border-[#D47A12] rounded-lg placeholder:text-amber-900/60 text-[#6F4E37] outline-none transition-colors"
              required
            />
          </div>

          <div class="relative">
            <input
              v-model="password"
              type="password"
              placeholder="Kata sandi"
              class="w-full px-4 py-3 bg-[#FFF0D4] border-2 border-[#D47A12] focus:border-[#D47A12] rounded-lg placeholder:text-amber-900/60 text-[#6F4E37] outline-none transition-colors"
              required
            />
            <a
              href="#"
              class="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#6F4E37] hover:underline"
            >
              Lupa?
            </a>
          </div>

          <button
            type="submit"
            class="w-full py-3 text-lg font-bold text-white bg-[#D47A12] rounded-lg shadow-md hover:bg-orange-700 transition-colors"
          >
            MASUK
          </button>
        </form>

        <p v-if="errorMsg" class="text-red-600 text-center text-sm mt-4">
          {{ errorMsg }}
        </p>
      </div>
    </div>
  </section>
</template>
