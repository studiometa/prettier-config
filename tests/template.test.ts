import { describe, it, expect } from 'vitest';
import { format } from 'prettier';
import template from './template.twig?raw';
import { config, twig } from '../src/index.js';

describe('The Prettier config', () => {
  it('should formate Twig templates', async () => {
    expect(
      await format(template, {
        ...config,
        ...twig,
        parser: 'twig',
      }),
    ).toMatchSnapshot();
  });
});
