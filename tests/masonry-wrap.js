import perdido from 'perdido'; // eslint-disable-line import/no-unresolved
import {jssSetup, jssReset, testMethod} from './helpers';

afterEach(jssReset);
beforeEach(jssSetup);

/* eslint-disable max-len */
describe('Perdido Masonry Wrap', () => {
  testMethod('can support creating a flexbox wrapper', perdido.masonryWrap({flex: true}), [
    'a {\n  display: flex;\n  flex-flow: row wrap;\n  margin-left: -15px;',
    '  margin-right: -15px;\n}'
  ]);

  testMethod('can support creating a non-flexbox wrapper', perdido.masonryWrap(false), [
    'a {\n  margin-left: -15px;\n  margin-right: -15px;\n}',
    'a:before {\n  content: \'\';\n  display: table;\n}',
    'a:after {\n  content: \'\';\n  display: table;\n  clear: both;\n}'
  ]);

  testMethod('can support a custom gutter.', perdido.masonryWrap({flex: true, gutter: '60px'}), [
    'a {\n  display: flex;\n  flex-flow: row wrap;\n  margin-left: -30px;',
    '  margin-right: -30px;\n}'
  ]);
});
/* eslint-enable max-len */
