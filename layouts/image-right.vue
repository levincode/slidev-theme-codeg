<script setup lang="ts">
import { computed, defineComponent } from 'vue'
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
      <div class="slidev-layout default" :class="props.class">
        <slot />
      </div>
      <div class="w-full" :style="style" />
    </div>
  </div>
</template>
