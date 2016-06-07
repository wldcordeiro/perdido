import perdido from 'perdido'; // eslint-disable-line import/no-unresolved
import {jssSetup, jssReset, testMethod} from './helpers';

afterEach(jssReset);
beforeEach(jssSetup);

/* eslint-disable max-len */
describe('Perdido FlexContainer', () => {
  testMethod('can support flex for row', perdido.flexContainer('row'), [
    'a {\n  display: flex;\n  flex-flow: row wrap;\n}'
  ]);

  testMethod('can support flex for column', perdido.flexContainer('column'), [
    'a {\n  display: flex;\n  flex-flow: column nowrap;\n}'
  ]);
});
/* eslint-enable max-len */
