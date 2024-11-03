<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})

const items = ref([
  {
    label: 'Nuxt UI v3',
    icon: 'i-heroicons-swatch',
    content: 'A comprehensive, Nuxt-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.',
  },
  {
    label: 'Nuxt ESLint',
    icon: 'carbon:code',
    content: 'Module only generates Nuxt-specific rules so that it can be merged with Antfu ESLint Config.',
  },
  {
    label: 'Antfu ESLint Config',
    icon: 'carbon:code-block',
    content: 'Provides a flexible yet opinionated ESLint configuration and is designed to work with TypeScript, JSX, Vue, JSON, YAML, Toml, Markdown, etc. Out-of-box. It includes popular ESLint plugins, Prettier integration and a streamlined setup to maintain consistent code style across projects.',
  },
])

useHead({
  title: 'Nuxt starter kit',
  meta: [
    { name: 'description', content: 'Nuxt starter kit including ESLint to maintain consistent code style with better DX and Nuxt UI 3 to get started asap.' },
  ],
})
</script>

<template>
  <div class="flex h-screen justify-center items-center">
    <div class="flex-1 max-w-2xl">
      <div class="flex justify-center items-center mb-4">
        <UIcon name="vscode-icons:file-type-nuxt" class="size-12" />
        <h1 class="text-3xl ml-2">
          Nuxt starter kit
        </h1>
      </div>

      <UCard>
        <template #header>
          Minimal configuration including modules below.
        </template>
        <UAccordion :items="items" />
      </UCard>

      <div class="flex justify-center mt-4">
        <UButton
          :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
          color="primary"
          variant="ghost"
          aria-label="Theme"
          size="xl"
          @click="isDark = !isDark "
        />
      </div>
    </div>
  </div>
</template>
