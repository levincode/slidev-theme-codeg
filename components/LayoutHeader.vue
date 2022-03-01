<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  titleHeader: {
    type: String,
  },
})
</script>

<template>
  <header class="abs-tl z-10 w-full my-1 glow" v-if="props.titleHeader">
    <span class="header-title">
      <slot>{{ props.titleHeader }}</slot>
    </span>
  </header>
</template>
