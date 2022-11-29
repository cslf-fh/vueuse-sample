<script setup lang="ts">
const { theme, changeTheme } = useTheme();
const isDark = usePreferredDark();
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center text-xl capitalize">
      <div class="max-w-md">
        <p>{{ `OS : ${isDark ? 'dark' : 'light'} mode` }}</p>
        <p class="py-6">{{ `Theme : ${theme}` }}</p>
        <button class="btn" @click="changeTheme()">change</button>
      </div>
    </div>
  </div>
</template>
