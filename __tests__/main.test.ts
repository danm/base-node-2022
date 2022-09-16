import { expect, test } from 'vitest'
import main from '../src';

test('Application says hello', () => {
  const result = main();
  expect(result).eq('Hello world');
});
