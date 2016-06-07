import perdido from 'perdido'; // eslint-disable-line import/no-unresolved
import {jssSetup, jssReset, testMethod} from './helpers';

afterEach(jssReset);
beforeEach(jssSetup);

/* eslint-disable max-len */
describe('Perdido Row', () => {
  testMethod('can support 3 row layout', perdido.row('1/3'), [
    'a {\n  width: 100%;\n  height: calc(99.99% * 1/3 - (30px - 30px * 1/3));',
    '  margin-bottom: 30px;\n}',
    'a:last-child {\n  margin-bottom: 0;\n}'
  ]);

  testMethod('can support 2/5 row layout', perdido.row('2/5'), [
    'a {\n  width: 100%;\n  height: calc(99.99% * 2/5 - (30px - 30px * 2/5));',
    '  margin-bottom: 30px;\n}\na:last-child {\n  margin-bottom: 0;\n}'
  ]);

  testMethod('can support no gutter', perdido.row('2/5', {gutter: '0'}), [
    'a {\n  width: 100%;\n  height: calc(99.999999% * 2/5);\n  margin-bottom: 0;\n}',
    'a:last-child {\n  margin-bottom: 0;\n}'
  ]);

  testMethod('can support flexbox', perdido.row('2/6', {gutter: '60px', flex: true}), [
    'a {\n  width: 100%;\n  flex: 0 0 auto;',
    '  height: calc(99.99% * 2/6 - (60px - 60px * 2/6));\n  margin-bottom: 60px;\n}',
    'a:last-child {\n  margin-bottom: 0;\n}'
  ]);
});
/* eslint-enable max-len */
