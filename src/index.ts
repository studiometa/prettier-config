import type { Config } from 'prettier';

export const twig = {
  twigMultiTags: ['html_element,end_html_element', 'with,endwith', 'apply,endapply'],
  plugins: [import.meta.resolve('@zackad/prettier-plugin-twig')],
} satisfies Config;

export const liquid = {
  singleQuote: false,
  plugins: [import.meta.resolve('@shopify/prettier-plugin-liquid')],
} satisfies Config;

export const config = {
  bracketSpacing: true,
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  bracketSameLine: true,
  useTabs: false,
  vueIndentScriptAndStyle: true,
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: '**/*.twig',
      options: twig,
    },
    {
      files: '**/*.liquid',
      options: liquid,
    },
  ],
} satisfies Config;

export default config;
