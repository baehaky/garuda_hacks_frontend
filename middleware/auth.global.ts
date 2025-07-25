// middleware/auth.global.ts

import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  if (
    !user.value &&
    to.path !== "/auth/login" &&
    to.path !== "/auth/register" &&
    to.path !== "/auth/confirm"
  ) {
    return navigateTo("/auth/login");
  }
  if (
    user.value &&
    (to.path === "/auth/login" || to.path === "/auth/register")
  ) {
    return navigateTo("/dashboard");
  }
});
