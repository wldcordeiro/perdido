import perdido from 'perdido'; // eslint-disable-line import/no-unresolved
import {jssSetup, jssReset, testMethod} from './helpers';

afterEach(jssReset);
beforeEach(jssSetup);

/* eslint-disable max-len */
describe('Perdido Align Flex', () => {
  beforeEach(() => {
    perdido.gutter = '30px';
    perdido.flex = false;
    perdido.cycle = -1;
    perdido.offsetDir = 'row';
  });

  testMethod('can support resetting alignment', perdido.align('reset', {flex: true}), [
    'a {\n  display: initial;\n}',
    'a > * {\n  justify-content: inherit;\n  align-items: inherit;\n}',
  ]);

  testMethod('can support aligning horizontally', perdido.align('horizontal', {flex: true}), [
    'a {\n  display: flex;\n}',
    'a > * {\n  justify-content: center;\n  align-items: inherit;\n}',
  ]);

  testMethod('can support aligning verticaly', perdido.align('vertical', {flex: true}), [
    'a {\n  display: flex;\n}',
    'a > * {\n  justify-content: inherit;\n  align-items: center;\n}',
  ]);

  testMethod('can support aligning top left', perdido.align('top-left', {flex: true}), [
    'a {\n  display: flex;\n}',
    'a > * {\n  justify-content: flex-start;\n  align-items: flex-start;\n}'
  ]);

  testMethod('can support aligning top center', perdido.align('top-center', {flex: true}), [
    'a {\n  display: flex;\n}',
    'a > * {\n  justify-content: center;\n  align-items: flex-start;\n}'
  ]);

  testMethod('can support aligning top', perdido.align('top', {flex: true}), [
    'a {\n  display: flex;\n}',
    'a > * {\n  justify-content: center;\n  align-items: flex-start;\n}'
  ]);

  testMethod('can support aligning top right', perdido.align('top-right', {flex: true}), [
    'a {\n  display: flex;\n}',
    'a > * {\n  justify-content: flex-end;\n  align-items: flex-start;\n}'
  ]);

  testMethod('can support aligning middle left', perdido.align('middle-left', {flex: true}), [
    'a {\n  display: flex;\n}',
    'a > * {\n  justify-content: flex-start;\n  align-items: center;\n}'
  ]);

  testMethod('can support aligning left', perdido.align('left', {flex: true}), [
    'a {\n  display: flex;\n}',
    'a > * {\n  justify-content: flex-start;\n  align-items: center;\n}'
  ]);

  testMethod('can support aligning middle center', perdido.align('middle-center', {flex: true}), [
    'a {\n  display: flex;\n}',
    'a > * {\n  justify-content: center;\n  align-items: center;\n}'
  ]);

  testMethod('can support aligning center', perdido.align('center', {flex: true}), [
    'a {\n  display: flex;\n}',
    'a > * {\n  justify-content: center;\n  align-items: center;\n}'
  ]);

  testMethod('can support aligning middle right', perdido.align('middle-right', {flex: true}), [
    'a {\n  display: flex;\n}',
    'a > * {\n  justify-content: flex-end;\n  align-items: center;\n}'
  ]);

  testMethod('can support aligning right', perdido.align('right', {flex: true}), [
    'a {\n  display: flex;\n}',
    'a > * {\n  justify-content: flex-end;\n  align-items: center;\n}'
  ]);

  testMethod('can support aligning bottom left', perdido.align('bottom-left', {flex: true}), [
    'a {\n  display: flex;\n}',
    'a > * {\n  justify-content: flex-start;\n  align-items: flex-end;\n}'
  ]);

  testMethod('can support aligning bottom center', perdido.align('bottom-center', {flex: true}), [
    'a {\n  display: flex;\n}',
    'a > * {\n  justify-content: center;\n  align-items: flex-end;\n}'
  ]);

  testMethod('can support aligning bottom', perdido.align('bottom', {flex: true}), [
    'a {\n  display: flex;\n}',
    'a > * {\n  justify-content: center;\n  align-items: flex-end;\n}'
  ]);

  testMethod('can support aligning bottom right', perdido.align('bottom-right', {flex: true}), [
    'a {\n  display: flex;\n}',
    'a > * {\n  justify-content: flex-end;\n  align-items: flex-end;\n}'
  ]);
});
/* eslint-enable max-len */
