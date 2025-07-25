<template>
  <div class="main-layout">
    <slot />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});
</script>

<style></style>
