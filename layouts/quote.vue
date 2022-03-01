<script setup lang="ts">
import { defineProps, defineComponent } from 'vue'
import Default from './default.vue'

const components = defineComponent({ Default })
const props = defineProps({
  titleHeader: {
    type: String,
  }
})
</script>

<template>
  <default
    :titleHeader="props.titleHeader"
    class="center grid place-content-center mx-26 text-xl italic tracking-wide"
  >
    <carbon-quotes class="text-7xl text-$slidev-theme-primary" />
    <slot />
  </default>
</template>
