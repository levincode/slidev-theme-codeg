<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  titleHeader: {
    type: String,
  },
  image: {
    type: String,
  },
  class: {
    type: String,
  },
})

const style = computed(() => handleBackground(props.image))
</script>

<template>
  <div class="h-full">
    <layout-header :titleHeader="props.titleHeader" />
    <div class="grid grid-cols-2 w-full h-full">
      <div class="w-full w-full" :style="style" />
      <div class="slidev-layout default" :class="props.class">
        <slot />
      </div>
    </div>
  </div>
</template>
