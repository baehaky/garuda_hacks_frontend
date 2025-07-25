import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";

export default defineNuxtRouteMiddleware(() => {
  const user = useSupabaseUser();
  const token = localStorage.getItem("token");

  if (!user.value && !token) {
    return navigateTo("/auth/login");
  }
});
