<script setup>
defineProps<{ currentPage: string }>()
const emit = defineEmits<{ navigate: [page: string] }>()
const pages = ['about', 'resume', 'portfolio']
</script>

<template>
  <nav class="navbar fixed bottom-0 left-0 z-[5] w-full rounded-t-xl border border-b-0 border-jet bg-white/95 shadow-[0_-4px_20px_hsla(0,0%,0%,.08)] backdrop-blur-xl lg:absolute lg:bottom-auto lg:left-auto lg:right-0 lg:top-0 lg:w-max lg:rounded-r-[20px] lg:border lg:border-jet lg:px-5 lg:py-0 lg:shadow-none">
    <ul class="flex flex-wrap items-center justify-center gap-2 px-2.5 py-0 md:gap-5 lg:gap-6 lg:px-5">
      <li v-for="page in pages" :key="page">
        <button
          type="button"
          class="navbar-link px-2 py-5 text-xs text-light-gray transition-colors duration-300 hover:text-light-gray/90 md:text-sm lg:font-medium"
          :class="{ 'text-accent': currentPage === page }"
          @click="emit('navigate', page)"
        >
          {{ page.charAt(0).toUpperCase() + page.slice(1) }}
        </button>
      </li>
    </ul>
  </nav>
</template>
