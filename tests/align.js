import perdido from 'perdido'; // eslint-disable-line import/no-unresolved
import {jssSetup, jssReset, testMethod} from './helpers';

afterEach(jssReset);
beforeEach(jssSetup);

/* eslint-disable max-len */
describe('Perdido Align', () => {
  beforeEach(() => {
    perdido.gutter = '30px';
    perdido.flex = false;
    perdido.cycle = -1;
    perdido.offsetDir = 'row';
  });

  testMethod('can support resetting alignment', perdido.align('reset'), [
    'a {\n  position: static;\n}',
    'a > * {\n  position: static;\n  top: auto;\n  right: auto;\n  bottom: auto;',
    '  left: auto;\n  transform: translate(0, 0);\n}'
  ]);

  testMethod('can support aligning horizontally', perdido.align('horizontal'), [
    'a {\n  position: relative;\n}',
    'a > * {\n  position: absolute;\n  top: auto;\n  right: auto;\n  bottom: auto;',
    '  left: 50%;\n  transform: translate(-50%, 0);\n}'
  ]);

  testMethod('can support aligning verticaly', perdido.align('vertical'), [
    'a {\n  position: relative;\n}',
    'a > * {\n  position: absolute;\n  top: 50%;\n  right: auto;\n  bottom: auto;',
    '  left: auto;\n  transform: translate(0, -50%);\n}'
  ]);

  testMethod('can support aligning top left', perdido.align('top-left'), [
    'a {\n  position: relative;\n}',
    'a > * {\n  position: absolute;\n  top: 0;\n  right: auto;\n  bottom: auto;',
    '  left: 0;\n  transform: translate(0, 0);\n}'
  ]);

  testMethod('can support aligning top center', perdido.align('top-center'), [
    'a {\n  position: relative;\n}',
    'a > * {\n  position: absolute;\n  top: 0;\n  right: auto;\n  bottom: auto;',
    '  left: 50%;\n  transform: translate(-50%, 0);\n}'
  ]);

  testMethod('can support aligning top', perdido.align('top'), [
    'a {\n  position: relative;\n}',
    'a > * {\n  position: absolute;\n  top: 0;\n  right: auto;\n  bottom: auto;',
    '  left: 50%;\n  transform: translate(-50%, 0);\n}'
  ]);

  testMethod('can support aligning top right', perdido.align('top-right'), [
    'a {\n  position: relative;\n}',
    'a > * {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: auto;',
    '  left: auto;\n  transform: translate(0, 0);\n}'
  ]);

  testMethod('can support aligning middle left', perdido.align('middle-left'), [
    'a {\n  position: relative;\n}',
    'a > * {\n  position: absolute;\n  top: 50%;\n  right: auto;\n  bottom: auto;',
    '  left: 0;\n  transform: translate(0, -50%);\n}'
  ]);

  testMethod('can support aligning left', perdido.align('left'), [
    'a {\n  position: relative;\n}',
    'a > * {\n  position: absolute;\n  top: 50%;\n  right: auto;\n  bottom: auto;',
    '  left: 0;\n  transform: translate(0, -50%);\n}'
  ]);

  testMethod('can support aligning middle center', perdido.align('middle-center'), [
    'a {\n  position: relative;\n}',
    'a > * {\n  position: absolute;\n  top: 50%;\n  right: auto;\n  bottom: auto;',
    '  left: 50%;\n  transform: translate(-50%, -50%);\n}'
  ]);

  testMethod('can support aligning center', perdido.align('center'), [
    'a {\n  position: relative;\n}',
    'a > * {\n  position: absolute;\n  top: 50%;\n  right: auto;\n  bottom: auto;',
    '  left: 50%;\n  transform: translate(-50%, -50%);\n}'
  ]);

  testMethod('can support aligning middle right', perdido.align('middle-right'), [
    'a {\n  position: relative;\n}',
    'a > * {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  bottom: auto;',
    '  left: auto;\n  transform: translate(0, -50%);\n}'
  ]);

  testMethod('can support aligning right', perdido.align('right'), [
    'a {\n  position: relative;\n}',
    'a > * {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  bottom: auto;',
    '  left: auto;\n  transform: translate(0, -50%);\n}'
  ]);

  testMethod('can support aligning bottom left', perdido.align('bottom-left'), [
    'a {\n  position: relative;\n}',
    'a > * {\n  position: absolute;\n  top: auto;\n  right: auto;\n  bottom: 0;',
    '  left: 0;\n  transform: translate(0, 0);\n}'
  ]);

  testMethod('can support aligning bottom center', perdido.align('bottom-center'), [
    'a {\n  position: relative;\n}',
    'a > * {\n  position: absolute;\n  top: auto;\n  right: auto;\n  bottom: 0;',
    '  left: 50%;\n  transform: translate(-50%, 0);\n}'
  ]);

  testMethod('can support aligning bottom', perdido.align('bottom'), [
    'a {\n  position: relative;\n}',
    'a > * {\n  position: absolute;\n  top: auto;\n  right: auto;\n  bottom: 0;',
    '  left: 50%;\n  transform: translate(-50%, 0);\n}'
  ]);

  testMethod('can support aligning bottom right', perdido.align('bottom-right'), [
    'a {\n  position: relative;\n}',
    'a > * {\n  position: absolute;\n  top: auto;\n  right: 0;\n  bottom: 0;',
    '  left: auto;\n  transform: translate(0, 0);\n}'
  ]);
});
/* eslint-enable max-len */
