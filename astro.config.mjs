import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://kacpet.github.io',
  base: '/Blog',

  vite: {
    plugins: [tailwindcss()],
  },
})