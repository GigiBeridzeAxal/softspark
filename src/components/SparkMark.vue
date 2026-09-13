<script setup lang="ts">
defineProps<{ size?: number }>()
</script>

<template>
  <svg
    :width="size ?? 28"
    :height="size ?? 28"
    viewBox="0 0 64 64"
    aria-hidden="true"
    focusable="false"
    class="spark-mark"
  >
    <rect width="64" height="64" rx="14" fill="var(--ink)" />
    <path
      d="M32 10 C34 22 38 26 50 30 C38 34 34 38 32 50 C30 38 26 34 14 30 C26 26 30 22 32 10 Z"
      fill="var(--paper)"
    />
    <circle cx="32" cy="30" r="5" fill="var(--ember)" />
  </svg>
</template>

<style scoped>
.spark-mark {
  flex: none;
}
</style>
