import perdido from 'perdido'; // eslint-disable-line import/no-unresolved
import {jssSetup, jssReset, testMethod} from './helpers';

afterEach(jssReset);
beforeEach(jssSetup);

/* eslint-disable max-len */
describe('Perdido Move', () => {
  testMethod('can support moving elements left', perdido.move('1/3'), [
    'a {\n  position: relative;',
    '  left: calc(99.99% * 1/3 - (30px - 30px * 1/3) + 30px);\n}'
  ]);

  testMethod('can support moving elements right', perdido.move('-1/3'), [
    'a {\n  position: relative;',
    '  left: calc(99.99% * -1/3 - (30px - 30px * -1/3) + 30px);\n}'
  ]);

  testMethod('can support moving elements up', perdido.move('1/3', {direction: 'column'}), [
    'a {\n  position: relative;',
    '  top: calc(99.99% * 1/3 - (30px - 30px * 1/3) + 30px);\n}'
  ]);

  testMethod('can support moving elements down', perdido.move('-1/3', {direction: 'column'}), [
    'a {\n  position: relative;',
    '  top: calc(99.99% * -1/3 - (30px - 30px * -1/3) + 30px);\n}'
  ]);

  testMethod('can support custom gutter', perdido.move('1/2', {gutter: '60px'}), [
    'a {\n  position: relative;',
    '  left: calc(99.99% * 1/2 - (60px - 60px * 1/2) + 60px);\n}'
  ]);

  testMethod('can support no gutter', perdido.move('1/2', {gutter: '0'}), [
    'a {\n  position: relative;',
    '  left: calc(99.999999% * 1/2);\n}'
  ]);

  testMethod('can support no gutter column', perdido.move('1/2', {gutter: '0', direction: 'column'}), [
    'a {\n  position: relative;',
    '  top: calc(99.999999% * 1/2);\n}'
  ]);
});
/* eslint-enable max-len */
