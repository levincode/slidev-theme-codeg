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
  <default :titleHeader="props.titleHeader" class="center grid place-content-center">
    <div class="my-auto">
      <slot />
    </div>
  </default>
</template>
