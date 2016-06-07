import perdido from 'perdido'; // eslint-disable-line import/no-unresolved
import {jssSetup, jssReset, testMethod} from './helpers';

afterEach(jssReset);
beforeEach(jssSetup);

/* eslint-disable max-len */
describe('Perdido Waffle', () => {
  testMethod('can support a 3 column layout', perdido.waffle('1/3'), [
    'a {\n  width: calc(99.99% * 1/3 - (30px - 30px * 1/3));',
    '  height: calc(99.99% * 1/3 - (30px - 30px * 1/3));\n}',
    'a:nth-child(n) {\n  float: left;\n  margin-right: 30px;',
    '  margin-bottom: 30px;\n  clear: none;\n}',
    'a:last-child {\n  margin-right: 0;\n  margin-bottom: 0;\n}',
    'a:nth-child(3n) {\n  margin-right: 0;\n  float: right;\n}',
    'a:nth-child(3n + 1) {\n  clear: left;\n}',
    'a:nth-last-child(-n + 3) {\n  margin-bottom: 0;\n}'
  ]);

  testMethod('can support a custom cycle', perdido.waffle('2/4', {cycle: 2}), [
    'a {\n  width: calc(99.99% * 2/4 - (30px - 30px * 2/4));',
    '  height: calc(99.99% * 2/4 - (30px - 30px * 2/4));\n}',
    'a:nth-child(n) {\n  float: left;\n  margin-right: 30px;',
    '  margin-bottom: 30px;\n  clear: none;\n}',
    'a:last-child {\n  margin-right: 0;\n  margin-bottom: 0;\n}',
    'a:nth-child(2n) {\n  margin-right: 0;\n  float: right;\n}',
    'a:nth-child(2n + 1) {\n  clear: left;\n}',
    'a:nth-last-child(-n + 2) {\n  margin-bottom: 0;\n}'
  ]);

  testMethod('can support a custom gutter', perdido.waffle('3/6', {cycle: 2, gutter: '60px'}), [
    'a {\n  width: calc(99.99% * 3/6 - (60px - 60px * 3/6));',
    '  height: calc(99.99% * 3/6 - (60px - 60px * 3/6));\n}',
    'a:nth-child(n) {\n  float: left;\n  margin-right: 60px;',
    '  margin-bottom: 60px;\n  clear: none;\n}',
    'a:last-child {\n  margin-right: 0;\n  margin-bottom: 0;\n}',
    'a:nth-child(2n) {\n  margin-right: 0;\n  float: right;\n}',
    'a:nth-child(2n + 1) {\n  clear: left;\n}',
    'a:nth-last-child(-n + 2) {\n  margin-bottom: 0;\n}'
  ]);

  testMethod('can support flexbox', perdido.waffle('2/5', {cycle: 3, gutter: '0', flex: true}), [
    'a {\n  flex: 0 0 auto;\n  width: calc(99.999999% * 2/5);',
    '  height: calc(99.999999% * 2/5);\n}',
    'a:nth-child(n) {\n  margin-right: 0;\n  margin-bottom: 0;\n}',
    'a:last-child {\n  margin-right: 0;\n  margin-bottom: 0;\n}',
    'a:nth-child(3n) {\n  margin-right: 0;\n  float: right;\n}',
    'a:nth-last-child(-n + 3) {\n  margin-bottom: 0;\n}'
  ]);
});
/* eslint-enable max-len */
