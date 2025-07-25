<script setup>
import mascotHappy from "~/assets/svg/maskothappy2.svg";
import { useAuth } from "/composable/useAuth";

const { register } = useAuth();
const router = useRouter();

const email = ref("");
const password = ref("");
const passwordConfirm = ref("");
const first_name = ref("");
const last_name = ref("");
const errorMsg = ref("");

const registerUser = async () => {
  errorMsg.value = "";
  if (password.value !== passwordConfirm.value) {
    errorMsg.value = "Konfirmasi kata sandi tidak cocok.";
    return;
  }
  try {
    await register({
      email: email.value,
      password: password.value,
      first_name: first_name.value,
      last_name: last_name.value,
    });
    router.push("/auth/confirm");
  } catch (error) {
    errorMsg.value = error.message;
  }
};
</script>

<template>
  <section
    class="w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-y-5"
  >
    <div
      class="w-full lg:w-1/2 flex flex-col items-center justify-start -mt-20"
    >
      <img :src="mascotHappy" alt="Maskot Kawan Aksara" class="w-64" />
    </div>

    <div class="w-full lg:w-1/2 flex justify-center lg:justify-start -mt-20">
      <div class="w-full max-w-lg p-8">
        <h1
          class="text-4xl font-lora font-bold text-center text-[#6F4E37] mb-6"
        >
          Registrasi
        </h1>

        <form @submit.prevent="registerUser" class="space-y-4">
          <div class="flex flex-col sm:flex-row gap-4">
            <input
              v-model="first_name"
              type="text"
              placeholder="Nama Depan"
              class="w-full px-4 py-3 bg-[#FFF0D4] border-2 border-[#D47A12] focus:border-[#D47A12] rounded-lg placeholder:text-amber-900/60 text-[#6F4E37] outline-none transition-colors"
              required
            />
            <input
              v-model="last_name"
              type="text"
              placeholder="Nama Belakang"
              class="w-full px-4 py-3 bg-[#FFF0D4] border-2 border-[#D47A12] focus:border-[#D47A12] rounded-lg placeholder:text-amber-900/60 text-[#6F4E37] outline-none transition-colors"
              required
            />
          </div>

          <input
            v-model="email"
            type="email"
            placeholder="Email atau nama pengguna"
            class="w-full px-4 py-3 bg-[#FFF0D4] border-2 border-[#D47A12] focus:border-[#D47A12] rounded-lg placeholder:text-amber-900/60 text-[#6F4E37] outline-none transition-colors"
            required
          />

          <input
            v-model="password"
            type="password"
            placeholder="Kata Sandi"
            class="w-full px-4 py-3 bg-[#FFF0D4] border-2 border-[#D47A12] focus:border-[#D47A12] rounded-lg placeholder:text-amber-900/60 text-[#6F4E37] outline-none transition-colors"
            required
          />

          <input
            v-model="passwordConfirm"
            type="password"
            placeholder="Konfirmasi Kata Sandi"
            class="w-full px-4 py-3 bg-[#FFF0D4] border-2 border-[#D47A12] focus:border-[#D47A12] rounded-lg placeholder:text-amber-900/60 text-[#6F4E37] outline-none transition-colors"
            required
          />

          <button
            type="submit"
            class="w-full py-3 mt-2 text-lg font-bold text-white bg-[#D47A12] rounded-lg shadow-md hover:bg-orange-700 transition-colors"
          >
            DAFTAR
          </button>
        </form>

        <p v-if="errorMsg" class="text-red-600 text-center text-sm mt-4">
          {{ errorMsg }}
        </p>
      </div>
    </div>
  </section>
</template>
