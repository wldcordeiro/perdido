import perdido from 'perdido'; // eslint-disable-line import/no-unresolved
import {jssSetup, jssReset, testMethod} from './helpers';

afterEach(jssReset);
beforeEach(jssSetup);

/* eslint-disable max-len */
describe('Perdido Masonry Column', () => {
  testMethod('can support masonry grid custom column', perdido.masonryColumn('60px'), [
    'a {\n  float: left;\n  width: calc(99.99% * 60px - 30px);\n  margin-left: 15px;',
    '  margin-right: 15px;\n}'
  ]);

  testMethod('can support masonry grid custom column no gutter', perdido.masonryColumn('60px', {gutter: '0'}), [
    'a {\n  float: left;\n  width: calc(99.99% * 60px);\n}'
  ]);

  testMethod('can support masonry grid no column', perdido.masonryColumn('0'), [
    'a {\n  float: left;\n  width: calc(99.99% * 0 - 30px);\n  margin-left: 15px;',
    '  margin-right: 15px;\n}'
  ]);

  testMethod('can support masonry flexbox grid custom column', perdido.masonryColumn('60px', {gutter: '30px', flex: true}), [
    'a {\n  flex: 0 0 auto;\n  width: calc(99.99% * 60px - 30px);',
    '  margin-left: 15px;\n  margin-right: 15px;\n}'
  ]);

  testMethod('can support masonry flexbox grid no column', perdido.masonryColumn('0', {gutter: '30px', flex: true}), [
    'a {\n  flex: 0 0 auto;\n  width: calc(99.99% * 0 - 30px);',
    '  margin-left: 15px;\n  margin-right: 15px;\n}'
  ]);
});
/* eslint-enable max-len */
