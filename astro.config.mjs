import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://kacpet.github.io',
  base: '/my-blog',

  vite: {
    plugins: [tailwindcss()],
  },
})