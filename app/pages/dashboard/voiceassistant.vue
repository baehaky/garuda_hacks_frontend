<template>
  <div
    class="voice-assistant-container max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg flex flex-col items-center space-y-6"
  >
    <h3 class="text-2xl font-bold text-blue-700 flex items-center gap-2">
      <span>🤖</span> Asisten Suara AI
    </h3>
    <p class="text-lg">
      Status:
      <span
        :class="[
          statusClass,
          'ml-2 px-3 py-1 rounded-full text-sm font-semibold',
          callStatus === 'Terhubung' && 'bg-green-100 text-green-700',
          callStatus === 'Error' && 'bg-red-100 text-red-700',
          callStatus === 'Idle' && 'bg-gray-100 text-gray-700',
          callStatus === 'Menghubungkan...' && 'bg-yellow-100 text-yellow-700',
          callStatus === 'Panggilan Selesai' && 'bg-blue-100 text-blue-700',
        ]"
      >
        {{ callStatus }}
      </span>
    </p>
    <div class="button-group flex gap-4">
      <button
        @click="startCall"
        :disabled="isCalling"
        class="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition disabled:bg-blue-300 disabled:cursor-not-allowed"
      >
        Mulai Panggilan
      </button>
      <button
        @click="stopCall"
        :disabled="!isCalling"
        class="px-5 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition disabled:bg-red-300 disabled:cursor-not-allowed"
      >
        Hentikan Panggilan
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "quiz",
});

import Vapi from "@vapi-ai/web";

type VapiType = typeof Vapi & {
  on: (event: string, callback: (...args: any[]) => void) => void;
  start: (assistantId: string) => void;
  stop: () => void;
  destroy: () => void;
};

const config = useRuntimeConfig();
const assistantId: string = config.public.vapiAssistantId;
const publicKey: string = config.public.vapiPublicKey;

let vapi: VapiType | null = null;
const isCalling = ref<boolean>(false);
const callStatus = ref<string>("Idle");

// Transcript state
const transcript = ref<{ role: string; text: string }[]>([]);

onMounted(() => {
  if (process.client) {
    if (!publicKey) {
      console.error(
        "GAGAL: Vapi Public Key tidak ditemukan! Periksa file .env."
      );
      callStatus.value = "Error: Konfigurasi Kunci Salah";
      return;
    }

    vapi = new Vapi(publicKey);

    vapi.on("call-start", () => {
      console.log("Panggilan dimulai.");
      isCalling.value = true;
      callStatus.value = "Terhubung";
      transcript.value = [];
    });

    vapi.on("call-end", () => {
      console.log("Panggilan berakhir.");
      isCalling.value = false;
      callStatus.value = "Panggilan Selesai";
    });

    vapi.on("error", (e: any) => {
      console.error("Terjadi error Vapi:", e);
      isCalling.value = false;
      callStatus.value = "Error";
    });

    vapi.on(
      "transcript",
      (payload: {
        type: string;
        role: "user" | "assistant";
        transcript: string;
        transcriptType: "partial" | "final";
      }) => {
        // 👇 TAMBAHKAN BARIS INI UNTUK DEBUG
        console.log("Transcript event diterima:", payload);

        if (payload.type !== "transcript") {
          return;
        }

        const lastTranscript = transcript.value[transcript.value.length - 1];
        const newEntry = {
          role: payload.role,
          text: payload.transcript,
        };

        if (lastTranscript && lastTranscript.role === payload.role) {
          lastTranscript.text = payload.transcript;
        } else {
          transcript.value.push(newEntry);
        }
      }
    );
  }
});

onUnmounted(() => {
  if (vapi) {
    vapi.destroy();
  }
});

const startCall = (): void => {
  console.log("Mencoba memulai panggilan dengan ID:", assistantId);

  if (vapi && assistantId) {
    callStatus.value = "Menghubungkan...";
    transcript.value = [];
    vapi.start(assistantId);
  } else {
    console.error(
      "GAGAL: Assistant ID kosong atau tidak ada. Periksa file .env dan restart server!"
    );
    callStatus.value = "Error: Konfigurasi ID Salah";
  }
};

const stopCall = (): void => {
  if (vapi) {
    vapi.stop();
  }
};

const statusClass = computed<string>(() => {
  if (callStatus.value === "Terhubung") return "status-active";
  if (callStatus.value === "Error") return "status-error";
  return "status-idle";
});
</script>
