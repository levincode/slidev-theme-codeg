<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  class: {
    type: String,
  },
  titleHeader: {
    type: String,
  }
})
</script>

<template>
  <div class="h-full">
    <layout-header :titleHeader="props.titleHeader" />
    <div class="bg-main slidev-layout" :class="props.class">
      <div class="my-auto">
        <slot />
      </div>
    </div>
  </div>
</template>
