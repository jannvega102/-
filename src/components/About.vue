<script setup>
const credentials = [
  { name: 'PHP (Hard): Top 10% Score', url: 'https://www.testdome.com/certificates/9154e89a3ad44bb785d05d10b3a75e7c', label: 'View Verification' },
  { name: 'JavaScript: Top 10% Score', url: 'https://www.testdome.com/certificates/3de075ee75174e3bb508b49d2b45719c', label: 'View Verification' },
  { name: 'Digital Marketing: Fundamentals of Digital Marketing (Google/IAB)', url: null, label: null },
]

const ecosystem = [
  { category: 'Backend', primary: 'Laravel (Expert), PHP 8.x, Django, Node.js', marketing: '' },
  { category: 'Frontend', primary: 'Vue 3 (Pinia), Inertia.js, Tailwind, Native JS', marketing: 'Yoast SEO, Digital Marketing Strategy' },
  { category: 'Design', primary: 'Figma, Adobe Photoshop, Canva', marketing: 'UI/UX Prototyping, Video Editing' },
  { category: 'Mobile & CMS', primary: 'Ionic/Cordova, WordPress (Custom Plugins)', marketing: 'Elementor, daisyUI, Flowbite' },
  { category: 'DevOps', primary: 'Docker, Git, Bash Scripting, Laragon', marketing: 'XAMPP, RESTful API Design' },
  { category: 'Specialized', primary: 'Leaflet.js, GeoJSON, SQL, JSON, XML', marketing: 'Google Maps API, Schema Markup' },
]

const services = [
  { icon: 'https://i.postimg.cc/ZqgqrqzG/icon-dev.png', title: 'Backend', text: 'Laravel (Expert), PHP 8.x, Django, Node.js, RESTful APIs, Authentication (Sanctum/JWT).' },
  { icon: 'https://i.postimg.cc/4389jZkP/icon-design.png', title: 'Frontend', text: 'Vue 3 (Pinia), Inertia.js, Tailwind, Native JS, SPA Development.' },
  { icon: 'https://i.postimg.cc/xjLdzYxZ/icon-app.png', title: 'Database', text: 'MySQL, Database Design, Query Optimization, Caching Strategies.' },
  { icon: 'https://i.postimg.cc/0NL8zHpx/icon-photo.png', title: 'DevOps & Tools', text: 'Docker, Git, Bash Scripting, Laragon, CI/CD, Agile/Scrum.' },
]
</script>

<template>
  <header class="mb-6 mt-4">
    <h2 class="article-title relative pb-2 text-2xl font-semibold capitalize text-[hsl(0,0%,18%)] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-8 after:rounded after:bg-gradient-to-r after:from-[hsl(0,0%,25%)] after:to-[hsl(0,0%,35%)] md:pb-4 md:after:h-1.5 md:after:w-10">
      About me
    </h2>
    <p class="mt-2 text-base font-medium text-accent md:text-lg">
      Full Stack Developer | 7+ Years Experience
    </p>
  </header>

  <section class="about-text mb-6 px-2.5 text-justify text-sm font-light leading-relaxed text-light-gray md:mb-10">
    <p class="mb-4">
      I deliver robust, scalable software solutions with a focus on the <strong>VILT stack</strong> (Vue, Inertia, Laravel, Tailwind). My technical proficiency is independently verified by TestDome, where I scored in the <strong>top 10% globally</strong> for both PHP and JavaScript.
    </p>
    <p class="mb-6">
      Beyond core engineering, I am a certified Digital Marketer with deep expertise in the Google ecosystem (Search Console, AdSense). I bridge the gap between technical architecture, UI/UX design (Figma/Photoshop), and search engine performance to build products that are not only functional but commercially successful.
    </p>

    <div class="verified-credentials mb-8 rounded-xl border border-jet bg-onyx/30 p-4 md:p-5">
      <h4 class="mb-3 text-sm font-semibold uppercase tracking-wide text-[hsl(0,0%,18%)]">
        Verified Technical Credentials
      </h4>
      <ul class="space-y-2">
        <li
          v-for="c in credentials"
          :key="c.name"
          class="flex flex-wrap items-baseline gap-2 text-sm text-light-gray"
        >
          <span>{{ c.name }}</span>
          <a
            v-if="c.url"
            :href="c.url"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium text-accent underline decoration-accent/50 underline-offset-2 hover:decoration-accent"
          >
            {{ c.label }}
          </a>
        </li>
      </ul>
    </div>

    <div class="ecosystem overflow-x-auto">
      <h4 class="mb-3 text-sm font-semibold uppercase tracking-wide text-[hsl(0,0%,18%)]">
        Technical &amp; Strategic Ecosystem
      </h4>
      <table class="w-full min-w-[520px] border-collapse text-sm">
        <thead>
          <tr class="border-b border-jet">
            <th class="py-2 pr-3 text-left font-semibold text-[hsl(0,0%,18%)]">Category</th>
            <th class="py-2 pr-3 text-left font-semibold text-[hsl(0,0%,18%)]">Primary Stack</th>
            <th class="py-2 text-left font-semibold text-[hsl(0,0%,18%)]">Marketing &amp; Growth</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="row in ecosystem"
            :key="row.category"
            class="border-b border-jet/70"
          >
            <td class="py-2.5 pr-3 font-medium text-[hsl(0,0%,18%)]">{{ row.category }}</td>
            <td class="py-2.5 pr-3 text-light-gray">{{ row.primary }}</td>
            <td class="py-2.5 text-light-gray">{{ row.marketing || '—' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="service mb-9">
    <h3 class="mb-5 text-lg font-semibold capitalize text-[hsl(0,0%,18%)] md:text-2xl">
      What I'm doing
    </h3>
    <ul class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5">
      <li
        v-for="s in services"
        :key="s.title"
        class="service-item relative z-[1] rounded-[14px] border border-jet bg-gradient-to-br from-white/60 to-transparent p-5 shadow-card md:flex md:items-start md:gap-4 md:p-7"
      >
        <div class="service-icon-box mb-2.5 md:mb-0 md:mt-1">
          <img :src="s.icon" alt="" width="40" class="mx-auto">
        </div>
        <div class="service-content-box text-center md:text-left">
          <h4 class="mb-1.5 text-base font-semibold capitalize text-[hsl(0,0%,18%)]">
            {{ s.title }}
          </h4>
          <p class="text-sm font-light leading-relaxed text-light-gray">
            {{ s.text }}
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>
