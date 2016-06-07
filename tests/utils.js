import perdido from 'perdido'; // eslint-disable-line import/no-unresolved
import {jssSetup, jssReset, testMethod} from './helpers';

afterEach(jssReset);
beforeEach(jssSetup);

/* eslint-disable max-len */
describe('Perdido Utilities', () => {
  testMethod('can support applying edit indicator', perdido.utils.edit, [
    'a {\n}',
    'a *:not(input):not(textarea):not(select) {',
    '  background-color: rgba(0, 0, 255, 0.1);\n}'
  ]);

  testMethod('can support applying clearfix', perdido.utils.clearFix, [
    'a {\n  *zoom: 1;\n}',
    'a:before {\n  content: \'\';\n  display: table;\n}',
    'a:after {\n  content: \'\';\n  display: table;\n  clear: both;\n}'
  ]);
});
/* eslint-enable max-len */
