<script setup>
import { ref, computed } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import Resume from './components/Resume.vue'
import Portfolio from './components/Portfolio.vue'

const sidebarOpen = ref(false)
const currentPage = ref('about')
const portfolioFilter = ref('all')
const selectOpen = ref(false)

function setPage(page) {
  currentPage.value = page
  window.scrollTo(0, 0)
}


const showAbout = computed(() => currentPage.value === 'about')
const showResume = computed(() => currentPage.value === 'resume')
const showPortfolio = computed(() => currentPage.value === 'portfolio')
</script>

<template>
  <main class="mx-3 my-4 mb-20 min-w-[259px] md:mt-16 md:mb-24 lg:mb-16 lg:mx-auto lg:mt-16 lg:flex lg:max-w-[1200px] lg:items-stretch lg:gap-6">
    <Sidebar v-model:open="sidebarOpen" />

    <div class="lg:relative lg:mx-auto lg:min-w-[75%] lg:w-3/4">
      <Navbar :current-page="currentPage" @navigate="setPage" />

      <article
        v-show="showAbout"
        class="article-card animate-fade"
      >
        <About />
      </article>

      <article
        v-show="showResume"
        class="article-card animate-fade"
      >
        <Resume />
      </article>

      <article
        v-show="showPortfolio"
        class="article-card animate-fade"
      >
        <Portfolio
          v-model:filter="portfolioFilter"
          v-model:select-open="selectOpen"
        />
      </article>
    </div>
  </main>
</template>

<style scoped>
.article-card {
  @apply rounded-[20px] border border-jet bg-white p-4 shadow-soft shadow-card z-[1];
  box-shadow: 0 1px 0 hsla(0,0%,100%,.8) inset;
}
</style>
