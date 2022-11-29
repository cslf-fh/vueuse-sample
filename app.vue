<script setup lang="ts">
const { theme } = useTheme();
</script>

<template>
  <Html :data-theme="theme" />

  <NuxtPage />
</template>
