import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetExtra } from 'unocss-preset-extra'
import { presetHeroPatterns } from '@julr/unocss-preset-heropatterns'

export function createConfig({ strict = true, dev = true } = {}) {
  return defineConfig({
    shortcuts: [
      ['col', 'flex flex-col'],
      ['center', 'flex items-center justify-center'],
      ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
      ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ],
    presets: [
      presetUno(),
      presetAttributify(),
      presetExtra() as any,
      presetHeroPatterns(),
      presetIcons({
        scale: 1.2,
      }),
      presetTypography(),
      presetWebFonts({
        fonts: {
          sans: 'DM Sans',
          serif: 'DM Serif Display',
          mono: 'DM Mono',
          script: [
            {
              name: 'Dancing Script',
              italic: true,
            },

          ],
        },
      }),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  });
}

export default createConfig(); 
