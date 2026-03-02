<script setup>
import { computed } from 'vue'

const props = defineProps<{
  filter: string
  selectOpen: boolean
}>()
const emit = defineEmits<{
  'update:filter': [value: string]
  'update:select-open': [value: boolean]
}>()

const categories = [
  { id: 'all', label: 'All' },
  { id: 'web development', label: 'Web Development' },
]

const projects = [
  {
    title: 'Impact',
    category: 'web development',
    description: 'Market research platform that measures which design assets grab attention. Analyses reaction times to show which pack or product visuals are most attention-grabbing, helping optimise packaging and advertising strategies.',
    url: 'https://impact.connoisseur-suite.com/app/NAGE97ISDM?id=test',
    image: 'https://placehold.co/600x400/1a1a2e/eee?text=Impact',
  },
  {
    title: 'Impulse',
    category: 'web development',
    description: 'Moment-by-moment testing platform that captures emotional reactions to audio-visual content—from ads and trailers to speeches and training videos. Analyses up to six emotions per test and delivers downloadable insights to optimise campaigns and content.',
    url: 'https://impulse.splitsecondsurveys.co.uk/engine/#/?code=BYiPbmYJi2&id=test',
    image: 'https://placehold.co/600x400/1a1a2e/eee?text=Impulse',
  },
]

const filteredProjects = computed(() => {
  if (props.filter === 'all') return projects
  return projects.filter(p => p.category === props.filter)
})

function setFilter(id) {
  emit('update:filter', id)
  emit('update:select-open', false)
}

function toggleSelect() {
  emit('update:select-open', !props.selectOpen)
}

const selectLabel = computed(() => {
  const c = categories.find(cat => cat.id === props.filter)
  return c ? c.label : 'Select Category'
})
</script>

<template>
  <header class="mb-8">
    <h2 class="article-title relative pb-2 text-2xl font-semibold capitalize text-[hsl(0,0%,18%)] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-8 after:rounded after:bg-gradient-to-r after:from-[hsl(0,0%,25%)] after:to-[hsl(0,0%,35%)] md:pb-4 md:after:h-1.5 md:after:w-10">
      Portfolio
    </h2>
  </header>

  <section class="projects">
    <!-- Desktop filter buttons -->
    <ul class="filter-list hidden gap-6 pl-1.5 md:flex md:items-center md:pb-0 md:pt-0">
      <li v-for="cat in categories" :key="cat.id">
        <button
          type="button"
          class="text-[15px] text-light-gray transition-colors duration-300 hover:text-light-gray/90"
          :class="{ 'text-accent': filter === cat.id }"
          @click="setFilter(cat.id)"
        >
          {{ cat.label }}
        </button>
      </li>
    </ul>

    <!-- Mobile filter dropdown -->
    <div class="filter-select-box relative mb-6 md:hidden">
      <button
        type="button"
        class="filter-select flex w-full items-center justify-between rounded-[14px] border border-jet bg-white px-4 py-3 text-sm font-light text-light-gray shadow-sm"
        :class="{ 'active': selectOpen }"
        @click="toggleSelect"
      >
        <span>{{ selectLabel }}</span>
        <span class="select-icon transition-transform duration-500" :class="{ 'rotate-180': selectOpen }">
          <ion-icon name="chevron-down" />
        </span>
      </button>
      <ul
        class="select-list absolute left-0 top-[calc(100%+6px)] z-[2] w-full rounded-[14px] border border-jet bg-white p-1.5 shadow-soft transition-all duration-500"
        :class="selectOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'"
      >
        <li v-for="cat in categories" :key="cat.id">
          <button
            type="button"
            class="w-full rounded-lg px-2.5 py-2 text-left text-sm font-light capitalize text-light-gray hover:bg-gray-100"
            @click="setFilter(cat.id)"
          >
            {{ cat.label }}
          </button>
        </li>
      </ul>
    </div>

    <ul class="project-list grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <li
        v-for="proj in filteredProjects"
        :key="proj.title"
        class="project-item animate-scaleUp"
      >
        <a
          :href="proj.url"
          target="_blank"
          rel="noopener noreferrer"
          class="block w-full group"
        >
          <figure class="project-img relative mb-4 h-[200px] w-full overflow-hidden rounded-2xl border border-jet shadow-card">
            <img
              :src="proj.image"
              :alt="proj.title"
              loading="lazy"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            >
            <div class="project-item-icon-box absolute left-1/2 top-1/2 z-[1] flex -translate-x-1/2 -translate-y-1/2 scale-90 items-center justify-center rounded-xl bg-jet p-4 text-xl text-accent opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
              <ion-icon name="eye-outline" />
            </div>
          </figure>
          <h3 class="project-title ml-2.5 text-[15px] font-normal capitalize leading-snug text-[hsl(0,0%,18%)]">
            {{ proj.title }}
          </h3>
          <p class="project-category ml-2.5 text-sm font-light text-light-gray/90">
            {{ proj.category.replace('-', ' ') }}
          </p>
          <p class="project-description ml-2.5 mt-1.5 text-xs font-light leading-snug text-light-gray/90">
            {{ proj.description }}
          </p>
        </a>
      </li>
    </ul>
  </section>
</template>
