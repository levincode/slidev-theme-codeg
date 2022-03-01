<template>
  <div class="slidev-layout section grid place-content-center text-center">
    <div
      class="glow absolute top-1/8 inset-x-0 w-full border-2 rounded-full border-$slidev-theme-primary"
    />
    <slot />
    <div
      class="glow absolute bottom-1/8 inset-x-0 w-full border-2 rounded-full border-$slidev-theme-primary"
    />
  </div>
</template>
