import type { Config } from 'prettier';

export default {
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
      options: {
        twigMultiTags: ['html_element,end_html_element', 'with,endwith', 'apply,endapply'],
        plugins: [import.meta.resolve('@zackad/prettier-plugin-twig')],
      },
    },
    {
      files: '**/*.liquid',
      options: {
        singleQuote: false,
        plugins: [import.meta.resolve('@shopify/prettier-plugin-liquid')],
      },
    },
  ],
} satisfies Config;
