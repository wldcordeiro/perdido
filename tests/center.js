import perdido from 'perdido'; // eslint-disable-line import/no-unresolved
import {jssSetup, jssReset, testMethod} from './helpers';

afterEach(jssReset);
beforeEach(jssSetup);

/* eslint-disable max-len */
describe('Perdido Center', () => {
  beforeEach(() => {
    perdido.gutter = '30px';
    perdido.flex = false;
    perdido.cycle = -1;
    perdido.offsetDir = 'row';
  });

  testMethod('can support horizontal centering containers', perdido.center('980px'), [
    'a {\n  max-width: 980px;\n  margin-left: auto;\n  margin-right: auto;\n}',
    'a:before {\n  content: \'\';\n  display: table;\n}',
    'a:after {\n  content: \'\';\n  display: table;\n  clear: both;\n}'
  ]);

  testMethod('can support adding 30px padding', perdido.center('980px', {padding: '30px'}), [
    'a {\n  max-width: 980px;\n  margin-left: auto;\n  margin-right: auto;',
    '  padding-left: 30px;\n  padding-right: 30px;\n}',
    'a:before {\n  content: \'\';\n  display: table;\n}',
    'a:after {\n  content: \'\';\n  display: table;\n  clear: both;\n}'
  ]);

  testMethod('can support flexbox', perdido.center('1140px', {padding: '30px', flex: true}), [
    'a {\n  max-width: 1140px;\n  margin-left: auto;\n  margin-right: auto;',
    '  padding-left: 30px;\n  padding-right: 30px;\n  display: flex;',
    '  flex-flow: row wrap;\n}'
  ]);
});
/* eslint-enable max-len */
