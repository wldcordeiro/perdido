import perdido from 'perdido'; // eslint-disable-line import/no-unresolved
import {jssSetup, jssReset, testMethod} from './helpers';

afterEach(jssReset);
beforeEach(jssSetup);

/* eslint-disable max-len */
describe('Perdido Column', () => {
  testMethod('can support 3 column layout', perdido.column('1/3'), [
    'a {\n  width: calc(99.99% * 1/3 - (30px - 30px * 1/3));\n}',
    'a:nth-child(n) {\n  float: left;\n  margin-right: 30px;\n  clear: none;\n}',
    'a:last-child {\n  margin-right: 0;\n}',
    'a:nth-child(3n) {\n  float: right;\n  margin-right: 0;\n}',
    'a:nth-child(3n + 1) {\n  clear: left;\n}'
  ]);

  testMethod('can support 2/5 column layout', perdido.column('2/5'), [
    'a {\n  width: calc(99.99% * 2/5 - (30px - 30px * 2/5));\n}',
    'a:nth-child(n) {\n  float: left;\n  margin-right: 30px;\n  clear: none;\n}',
    'a:last-child {\n  margin-right: 0;\n}',
    'a:nth-child(5n) {\n  float: right;\n  margin-right: 0;\n}',
    'a:nth-child(5n + 1) {\n  clear: left;\n}'
  ]);

  testMethod('can support custom cycle', perdido.column('2/4', {cycle: 2}), [
    'a {\n  width: calc(99.99% * 2/4 - (30px - 30px * 2/4));\n}',
    'a:nth-child(n) {\n  float: left;\n  margin-right: 30px;\n  clear: none;\n}',
    'a:last-child {\n  margin-right: 0;\n}',
    'a:nth-child(2n) {\n  float: right;\n  margin-right: 0;\n}',
    'a:nth-child(2n + 1) {\n  clear: left;\n}'
  ]);

  testMethod('can support no gutter', perdido.column('2/5', {cycle: 3, gutter: '0'}), [
    'a {\n  width: calc(99.999999% * 2/5);\n}',
    'a:nth-child(n) {\n  float: left;\n  margin-right: 0;\n  clear: none;\n}',
    'a:last-child {\n  margin-right: 0;\n}',
    'a:nth-child(3n) {\n  float: right;\n  margin-right: 0;\n}',
    'a:nth-child(3n + 1) {\n  clear: left;\n}'
  ]);

  testMethod('can support flexbox', perdido.column('2/6', {cycle: 3, gutter: '60px', flex: true}), [
    'a {\n  width: calc(99.99% * 2/6 - (60px - 60px * 2/6));\n  flex: 0 0 auto;\n}',
    'a:nth-child(n) {\n  margin-right: 60px;\n}',
    'a:last-child {\n  margin-right: 0;\n}',
    'a:nth-child(3n) {\n  float: right;\n  margin-right: 0;\n}'
  ]);

  testMethod('can support none rule', perdido.column('none'), [
    'a {\n  width: auto;\n}',
    'a:last-child {\n  float: none;\n  clear: none;\n  margin-right: 0;\n  width: auto;\n}',
    'a:nth-child(n) {\n  float: none;\n  clear: none;\n  margin-right: 0;\n  width: auto;\n}',
    'a:nth-child(1n + 1) {\n  float: none;\n  clear: none;\n  margin-right: 0;\n  width: auto;\n}',
    'a:nth-child(1n) {\n  float: none;\n  clear: none;\n  margin-right: 0;\n  width: auto;\n}'
  ]);
});
/* eslint-enable max-len */
