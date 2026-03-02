<script setup>
const props = defineProps({ open: Boolean })
const emit = defineEmits(['update:open'])
function toggle() {
  emit('update:open', !props.open)
}
</script>

<template>
  <aside
    class="sidebar mb-4 max-h-28 overflow-hidden rounded-[20px] border border-jet bg-white p-4 shadow-soft shadow-card transition-all duration-500 ease-in-out lg:sticky lg:top-[60px] lg:mb-0 lg:max-h-none lg:py-[60px]"
    :class="{ 'max-h-[405px] lg:max-h-none': props.open }"
  >
    <div class="flex items-center justify-start gap-4 lg:flex-col">
      <div class="info-content flex-1 lg:text-center">
        <h1 class="name mb-2.5 text-[clamp(1rem,2.5vw+0.75rem,17px)] font-medium leading-tight text-[hsl(0,0%,18%)]">
          Jann Niño Armar T. Vega
        </h1>
        <p class="title inline-block rounded-lg border border-jet bg-onyx px-3 py-1 text-xs font-light text-[hsl(0,0%,18%)] shadow-sm">
          Full Stack Web Developer
        </p>
      </div>

      <button
        type="button"
        class="info-more-btn -right-4 -top-4 z-[1] rounded-r-[15px] border border-jet bg-gradient-to-br from-white/60 to-transparent px-2.5 py-2.5 text-[13px] text-accent shadow-soft transition-[background] duration-300 hover:from-[hsl(0,0%,98%)] hover:to-transparent lg:hidden"
        @click="toggle"
      >
        <span class="hidden sm:inline">Show Contacts</span>
        <ion-icon class="sm:hidden" name="chevron-down" />
      </button>
    </div>

    <div
      class="sidebar-more transition-all duration-500 ease-in-out lg:visible lg:opacity-100"
      :class="props.open ? 'visible opacity-100' : 'invisible opacity-0'"
    >
      <div class="separator my-4 h-px w-full bg-jet shadow-[0_1px_0_hsla(0,0%,100%,.5)]" />

      <ul class="contacts-list grid grid-cols-1 gap-4 lg:grid-cols-1">
        <li class="contact-item flex items-center gap-4">
          <div class="icon-box flex h-8 w-8 items-center justify-center rounded-lg border border-jet text-base text-accent shadow-sm">
            <ion-icon name="mail-outline" />
          </div>
          <div class="contact-info min-w-0 max-w-[calc(100%-46px)]">
            <p class="contact-title mb-0.5 text-xs uppercase text-light-gray/90">Email</p>
            <a href="mailto:jannarmarvega@gmail.com" class="contact-link text-[13px] text-[hsl(0,0%,18%)]">jannarmarvega@gmail.com</a>
          </div>
        </li>
        <li class="contact-item flex items-center gap-4">
          <div class="icon-box flex h-8 w-8 items-center justify-center rounded-lg border border-jet text-base text-accent shadow-sm">
            <ion-icon name="phone-portrait-outline" />
          </div>
          <div class="contact-info min-w-0 max-w-[calc(100%-46px)]">
            <p class="contact-title mb-0.5 text-xs uppercase text-light-gray/90">Phone</p>
            <a href="tel:+639525567487" class="contact-link text-[13px] text-[hsl(0,0%,18%)]">+63 952 556 7487</a>
          </div>
        </li>
        <li class="contact-item flex items-center gap-4">
          <div class="icon-box flex h-8 w-8 items-center justify-center rounded-lg border border-jet text-base text-accent shadow-sm">
            <ion-icon name="logo-linkedin" />
          </div>
          <div class="contact-info min-w-0 max-w-[calc(100%-46px)]">
            <p class="contact-title mb-0.5 text-xs uppercase text-light-gray/90">LinkedIn</p>
            <a href="https://linkedin.com/in/jannarmarvega" target="_blank" rel="noopener" class="contact-link text-[13px] text-[hsl(0,0%,18%)]">linkedin.com/in/jannarmarvega</a>
          </div>
        </li>
      </ul>

      <div class="separator my-4 h-px w-full bg-jet shadow-[0_1px_0_hsla(0,0%,100%,.5)]" />

      <ul class="social-list flex items-center justify-start gap-4 pb-1 pl-1.5">
        <li>
          <a href="https://linkedin.com/in/jannarmarvega" target="_blank" rel="noopener" title="LinkedIn" class="text-lg text-light-gray/90 hover:text-light-gray">
            <ion-icon name="logo-linkedin" />
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>
