<script setup>
import { computed } from 'vue'

const resumeUrl = computed(() => `${import.meta.env.BASE_URL}Resume.docx`)

const skills = [
  { label: 'Laravel & Backend', value: 95 },
  { label: 'Vue 3 & Frontend', value: 90 },
  { label: 'MySQL & Database', value: 85 },
  { label: 'DevOps (Git, Docker, CI/CD)', value: 80 },
]
</script>

<template>
  <header class="mb-8 flex flex-wrap items-center justify-between gap-4">
    <h2 class="article-title relative pb-2 text-2xl font-semibold capitalize text-[hsl(0,0%,18%)] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-8 after:rounded after:bg-gradient-to-r after:from-[hsl(0,0%,25%)] after:to-[hsl(0,0%,35%)] md:pb-4 md:after:h-1.5 md:after:w-10">
      Resume
    </h2>
    <a
      :href="resumeUrl"
      download="Jann-Vega-Resume.docx"
      class="inline-flex items-center gap-2 rounded-xl border border-jet bg-gradient-to-br from-white/60 to-transparent px-4 py-2.5 text-sm font-medium text-[hsl(0,0%,18%)] shadow-sm transition-[background] duration-300 hover:from-[hsl(0,0%,98%)] hover:to-transparent"
    >
      <ion-icon name="download-outline" class="text-lg" />
      Download resume (Word)
    </a>
  </header>

  <section class="timeline mb-8">
    <div class="title-wrapper mb-6 flex items-center gap-4">
      <div class="icon-box flex h-8 w-8 items-center justify-center rounded-lg border border-jet text-base text-accent shadow-sm md:h-12 md:w-12 md:text-lg">
        <ion-icon name="briefcase-outline" />
      </div>
      <h3 class="text-lg font-semibold capitalize text-[hsl(0,0%,18%)] md:text-2xl">
        Professional Experience
      </h3>
    </div>
    <ol class="timeline-list ml-11 md:ml-16">
      <li class="timeline-item relative rounded-xl border border-jet bg-white p-4 shadow-sm first:before:absolute first:before:left-[-30px] first:before:top-[-25px] first:before:h-[calc(100%+50px)] first:before:w-px first:before:bg-jet md:first:before:left-[-40px]">
        <span class="absolute left-[-33px] top-[5px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[hsl(0,0%,25%)] to-[hsl(0,0%,35%)] ring-4 ring-jet md:left-[-43px] md:h-2 md:w-2" />
        <h4 class="mb-1.5 text-sm font-semibold leading-snug text-[hsl(0,0%,18%)]">
          Full Stack Web Developer
        </h4>
        <span class="text-sm font-normal leading-relaxed text-vegas">Split Second Research (SSR) | 2018 – Present</span>
        <p class="mt-2 text-justify text-sm font-light leading-relaxed text-light-gray">
          Designed and developed full-stack web applications using Laravel and Vue 3. Architected and implemented SPA systems using Inertia.js. Built internal development tools to automate project setup and testing workflows. Developed simulation systems for executing research testing phases. Improved database performance and reduced load times by up to 40%. Led feature development from requirements gathering to production deployment. Conducted code reviews and mentored junior developers. Collaborated with cross-functional teams including researchers, QA, and designers.
        </p>
        <p class="mt-2 text-sm font-light leading-relaxed text-light-gray">
          <strong>Tech Stack:</strong> Laravel, Vue 3, Inertia, TailwindCSS, MySQL, Docker.
        </p>
      </li>
    </ol>
  </section>

  <section class="skill">
    <h3 class="mb-5 text-lg font-semibold capitalize text-[hsl(0,0%,18%)] md:text-2xl">
      Technical Skills
    </h3>
    <ul class="skills-list content-card relative z-[1] rounded-[14px] border border-jet bg-gradient-to-br from-white/60 to-transparent p-5 pt-12 shadow-card md:p-7 md:pt-7">
      <li
        v-for="s in skills"
        :key="s.label"
        class="skills-item mb-4 last:mb-0 md:mb-6 md:last:mb-0"
      >
        <div class="title-wrapper mb-2 flex items-center justify-between gap-2">
          <h5 class="text-[13px] font-medium text-[hsl(0,0%,18%)] md:text-[15px]">
            {{ s.label }}
          </h5>
          <data :value="s.value">{{ s.value }}%</data>
        </div>
        <div class="skills-progress-bg h-2 w-full overflow-hidden rounded-[10px] bg-jet">
          <div
            class="skills-progress-fill h-full rounded-[10px] bg-gradient-to-r from-[hsl(0,0%,25%)] to-[hsl(0,0%,35%)]"
            :style="{ width: s.value + '%' }"
          />
        </div>
      </li>
    </ul>
  </section>
</template>
