<script setup>
definePageMeta({
  layout: "quiz",
});
const quizData = ref([
  {
    question: 'Tuliskan dalam bahasa Jawa "Selamat Pagi"',
    options: ["Sugeng Enjing", "Sugeng Sonten", "Sugeng Siang", "Sugeng Dalu"],
    correctAnswerIndex: 0,
  },
  {
    question: 'Apa arti dari "Sugeng Rawuh"?',
    options: [
      "Selamat Jalan",
      "Selamat Datang",
      "Sampai Jumpa",
      "Terima Kasih",
    ],
    correctAnswerIndex: 1,
  },
  {
    question: 'Bahasa Jawa dari "Terima Kasih" adalah...',
    options: ["Nyuwun Sewu", "Matur Nuwun", "Kulo Nuwun", "Monggo"],
    correctAnswerIndex: 1,
  },
  {
    question: 'Aksara "ꦲ" dalam aksara Jawa dibaca...',
    options: ["Na", "Ca", "Ra", "Ha"],
    correctAnswerIndex: 3,
  },
  {
    question: "Angka 5 dalam aksara Jawa ditulis...",
    options: ["꧑", "꧓", "꧕", "꧗"],
    correctAnswerIndex: 2,
  },
]);

// --- State Kuis ---
const currentQuestionIndex = ref(0);
const selectedAnswerIndex = ref(null);
const score = ref(0);
const quizFinished = ref(false);

const currentQuestion = computed(() => {
  return quizData.value[currentQuestionIndex.value];
});

const selectAnswer = (index) => {
  if (selectedAnswerIndex.value !== null) return;
  selectedAnswerIndex.value = index;

  if (index === currentQuestion.value.correctAnswerIndex) {
    score.value++;
  }
};

const nextQuestion = () => {
  if (currentQuestionIndex.value < quizData.value.length - 1) {
    currentQuestionIndex.value++;
    selectedAnswerIndex.value = null;
  } else {
    quizFinished.value = true;
  }
};

const restartQuiz = () => {
  currentQuestionIndex.value = 0;
  selectedAnswerIndex.value = null;
  score.value = 0;
  quizFinished.value = false;
};

const getButtonClass = (index) => {
  if (selectedAnswerIndex.value === null) {
    return "border-[#A1887F] hover:border-blue-500 hover:bg-white";
  }
  if (index === currentQuestion.value.correctAnswerIndex) {
    return "border-green-500 bg-green-100 text-green-800 font-bold";
  }
  if (index === selectedAnswerIndex.value) {
    return "border-red-500 bg-red-100 text-red-800";
  }
  return "border-gray-300 bg-gray-50 text-gray-400";
};
</script>

<template>
  <div
    class="w-full max-w-4xl mx-auto p-4 flex flex-col items-center min-h-screen"
  >
    <div v-if="!quizFinished" class="w-full">
      <div class="flex flex-col md:flex-row items-center gap-6 mb-8 w-full">
        <div class="flex-shrink-0 p-2 rounded-full">
          <img
            src="~/assets/svg/maskot-quiz.svg"
            alt="Maskot Kuis"
            class="w-25 h-24"
          />
        </div>

        <div
          class="w-full bg-[#6F4E37] text-white p-6 rounded-2xl shadow-lg text-center"
        >
          <p class="text-lg mb-2">
            {{ currentQuestion.question.split('"')[0] }}
          </p>
          <p class="text-4xl font-bold">
            “{{
              currentQuestion.question.split('"')[1] ||
              currentQuestion.question
            }}”
          </p>
        </div>
      </div>

      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
        <button
          v-for="(option, index) in currentQuestion.options"
          :key="index"
          @click="selectAnswer(index)"
          :class="getButtonClass(index)"
          :disabled="selectedAnswerIndex !== null"
          class="p-5 text-2xl font-semibold text-center rounded-2xl border-4 transition-all duration-300"
        >
          {{ option }}
        </button>
      </div>

      <div class="text-center mt-10" v-if="selectedAnswerIndex !== null">
        <button
          @click="nextQuestion"
          class="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-colors"
        >
          Lanjut
        </button>
      </div>
    </div>

    <div v-else class="text-center bg-white/80 p-10 rounded-2xl shadow-lg">
      <h2 class="text-4xl font-bold text-[#6F4E37] mb-4">Kuis Selesai!</h2>
      <p class="text-2xl text-gray-700 mb-6">
        Skor Anda:
        <span class="font-bold text-green-600">{{ score }}</span> /
        <span class="font-bold">{{ quizData.length }}</span>
      </p>
      <button
        @click="restartQuiz"
        class="bg-[#D47A12] text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition-colors"
      >
        Ulangi Kuis
      </button>
    </div>
  </div>
</template>
