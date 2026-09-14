<script setup lang="ts">
/*
  The Softspark mark: a six-spoke spark, three rounded strokes through one
  centre. Drawn in currentColor so it takes the tone of whatever text it sits
  beside. Source of truth is src/assets/brand/softspark-mark.svg; the raster
  exports live in public/brand/.
*/
withDefaults(defineProps<{ size?: number | string; weight?: number }>(), {
  size: 20,
  weight: 11,
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    :stroke-width="weight"
    stroke-linecap="round"
    aria-hidden="true"
    focusable="false"
    class="brand-mark"
  >
    <line x1="50" y1="8" x2="50" y2="92" />
    <line x1="13.7" y1="29" x2="86.3" y2="71" />
    <line x1="13.7" y1="71" x2="86.3" y2="29" />
  </svg>
</template>

<style scoped>
.brand-mark {
  flex: none;
}
</style>
