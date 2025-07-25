// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss", "@nuxt/icon"],
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NUXT_PUBLIC_SUPABASE_KEY,
    },
  },
  supabase: {
    redirect: false, // biar kita kontrol manual redirect
  },
  app: {
    head: {
      title: "Kawan Aksara",
      link: [
        // Tambahkan 3 baris ini
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap",
        },
      ],
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    config: {
      // Di sinilah semua kustomisasi Tailwind Anda berada
      theme: {
        extend: {
          fontFamily: {
            // Daftarkan Lora di sini
            lora: ["Lora", "serif"],
          },
        },
      },
    },
  },
});