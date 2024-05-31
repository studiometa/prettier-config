/** @type {import('prettier').Config} */
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
        twigPrintWidth: 100,
        twigMultiTags: ['html_element,end_html_element', 'with,endwith'],
        plugins: [import.meta.resolve('@afshinhaghighat/prettier-plugin-twig-melody')],
      },
    },
    {
      files: '**/*.liquid',
      options: {
        singleQuote: false,
        plugins: [import.meta.resolve('@shopify/prettier-plugin-liquid')],
      }
    }
  ],
};
