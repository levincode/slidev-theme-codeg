<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
import LayoutHeader from '../components/LayoutHeader.vue';

const props = defineProps({
  titleHeader: {
    type: String,
  },
  image: {
    type: String,
  },
  overlayClass: {
    type: String,
  }
})

const style = computed(() => handleBackground(props.image))
</script>

<template>
  <div class="slidev-layout w-full h-full" :style="style">
    <div
      :class="['fixed inset-0 w-full h-full', props.overlayClass ? props.overlayClass : 'bg-[rgba(0,0,0,0.5)]']"
    />
    <layout-header :titleHeader="props.titleHeader" />
    <div class="relative z-4">
      <slot />
    </div>
  </div>
</template>
