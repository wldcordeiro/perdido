import perdido from 'perdido'; // eslint-disable-line import/no-unresolved
import {jssSetup, jssReset, testMethod} from './helpers';

afterEach(jssReset);
beforeEach(jssSetup);

/* eslint-disable max-len */
describe('Perdido Offset', () => {
  testMethod('can support moving elements to the left', perdido.offset('1/3'), [
    'a {\n  margin-right: calc(99.99% * 1/3 - (30px - 30px * 1/3) + (30px * 2)) !important;\n}'
  ]);

  testMethod('can support moving elements to the right', perdido.offset('-1/3'), [
    'a {\n  margin-left: calc(99.99% * (-1/3 * -1) - (30px - 30px * (-1/3 * -1)) + 30px) !important;\n}'
  ]);

  testMethod('can support moving elements up', perdido.offset('1/3', {direction: 'column'}), [
    'a {\n  margin-bottom: calc(99.99% * 1/3 - (30px - 30px * 1/3) + (30px * 2)) !important;\n}'
  ]);

  testMethod('can support moving elements down', perdido.offset('-1/3', {direction: 'column'}), [
    'a {\n  margin-top: calc(99.99% * (-1/3 * -1) - (30px - 30px * (-1/3 * -1)) + 30px) !important;\n}'
  ]);

  testMethod('can support custom gutter', perdido.offset('1/2', {gutter: '60px'}), [
    'a {\n  margin-right: calc(99.99% * 1/2 - (60px - 60px * 1/2) + (60px * 2)) !important;\n}'
  ]);

  testMethod('can support no gutter', perdido.offset('1/2', {gutter: '0'}), [
    'a {\n  margin-right: calc(99.999999% * 1/2) !important;\n}'
  ]);

  testMethod('can support no gutter negative offset', perdido.offset('-1/2', {gutter: '0'}), [
    'a {\n  margin-left: calc(99.999999% * -1/2) !important;\n}'
  ]);

  testMethod('can support no gutter column offset',
    perdido.offset('1/2', {gutter: '0', direction: 'column'}), [
      'a {\n  margin-bottom: calc(99.999999% * 1/2) !important;\n}'
    ]);

  testMethod('can support no gutter column negative offset',
    perdido.offset('-1/2', {gutter: '0', direction: 'column'}), [
      'a {\n  margin-top: calc(99.999999% * -1/2) !important;\n}'
    ]);

  testMethod('can support zero offset', perdido.offset('0'), [
    'a {\n  margin-left: 0 !important;\n  margin-right: 30px !important;\n}'
  ]);

  testMethod('can support zero offset column', perdido.offset('0', {direction: 'column'}), [
    'a {\n  margin-top: 0 !important;\n  margin-bottom: 30px !important;\n}'
  ]);
});
/* eslint-enable max-len */
