<template>
  <div
    class="w-full max-w-7xl mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-8 items-center px-10"
  >
    <aside class="bg-[#FFF0D4] shadow-lg border-2 border-[#4F200D] rounded-3xl">
      <div class="rounded-3xl p-5">
        <div class="flex space-x-4 flex-col">
          <img
            class="w-full h-32 rounded-2xl border-2 bg-yellow-400 object-contain"
            :src="picture"
            alt="Avatar Mas Bro"
          />
          <div class="text-left">
            <h2 class="text-2xl font-bold">username || "Pengguna"</h2>
            <p class="text-sm">{{ username }}</p>
            <p class="text-xs mt-1">Bergabung sejak {{ joinedAt }}</p>
          </div>
        </div>
      </div>

      <div class="rounded-3xl p-5">
        <h3 class="font-bold text-lg ml-5 mb-3">Bagian Statistik Belajar</h3>
        <div
          class="bg-kawan-card-dark rounded-2xl p-4 flex justify-around text-center"
        >
          <div class="border-2 border-[#693D2C] p-5 rounded-xl bg-[#F8D8A5]">
            <p class="text-xs">Poin Total</p>
            <p class="font-bold text-xl">1.100 Pt</p>
          </div>
          <div
            class="border-2 border-[#693D2C] py-5 px-8 rounded-xl bg-[#F8D8A5]"
          >
            <p class="text-xs">Runtunan Saiki</p>
            <p class="font-bold text-xl">3 hari</p>
          </div>
        </div>
      </div>

      <div class="rounded-3xl p-5 ml-5 mr-5 shadow-lg">
        <h3 class="font-bold text-lg mb-3">Tembung Dikuasai</h3>
        <div
          class="bg-kawan-card-dark rounded-2xl p-4 text-center border-2 border-[#693D2C] bg-[#F8D8A5]"
        >
          <p class="font-bold text-xl">100 Kosakata</p>
          <p class="text-sm">7 hari</p>
        </div>
      </div>
    </aside>

    <main class="flex justify-center items-end mt-32">
      <img
        :src="picture1"
        alt="Avatar Kapibara Utama"
        class="w-72 drop-shadow-2xl"
      />
    </main>

    <div>
      <img src="../../assets/image/Group 22.jpg" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "profile-dashboard",
});
import picture from "../../assets/svg/image 10 2.svg";
import picture1 from "../../assets/svg/maskotprofile.svg";

import { ref, onMounted } from "vue";

const user = useSupabaseUser();
const username = ref("Udin");
const joinedAt = ref("");

const supabase = useSupabaseClient();

onMounted(async () => {
  if (!user.value) return;

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("first_name, last_name, picture, created_at")
    .eq("id", user.value.id)
    .single();

  if (error) {
    console.error("Gagal mengambil data profile:", error.message);
  } else if (profile) {
    // Set username
    username.value =
      `${profile.first_name || ""} ${profile.last_name || ""}`.trim() ||
      user.value.email.split("@")[0];

    // Set tanggal join
    joinedAt.value = new Date(
      profile.created_at || user.value.created_at
    ).toLocaleDateString("id-ID", {
      month: "long",
      year: "numeric",
    });
  }
});
</script>
