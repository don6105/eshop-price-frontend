<template>
  <svg class="processing-icon" fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
</template>

<style scoped>
.processing-icon {
  @apply inline-block h-5 w-5 ;
  @apply animate-spin text-red-600;
}
.processing-icon > circle {
  @apply opacity-25;
}
.processing-icon > path {
  @apply opacity-75;
}
</style>