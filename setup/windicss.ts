import { resolve } from 'path'
import { defineWindiSetup } from '@slidev/types'

export default defineWindiSetup(() => ({
  extract: {
    include: [
      resolve(__dirname, '../**/*.{vue,ts}'),
    ],
  },
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#202226] text-[#ddd])',
    'header-title': 'text-lg uppercase font-semibold ml-8 tracking-wider',
    'glow': 'text-$slidev-theme-primary',
  },
}))
