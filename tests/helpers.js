import expect from 'expect.js';
import jss from 'jss';
import jssExtend from 'jss-extend';
import jssNested from 'jss-nested';
import jssCamelCase from 'jss-camel-case';
import jssDefaultUnit from 'jss-default-unit';
import jssVendorPrefixer from 'jss-vendor-prefixer'; // eslint-disable-line import/no-unresolved

export function jssReset() {
  jss.plugins.registry = [];
  jss.sheets.registry = [];
  jss.uid.reset();
}

export function jssSetup() {
  jss.use(jssExtend());
  jss.use(jssNested());
  jss.use(jssCamelCase());
  jss.use(jssDefaultUnit());
  jss.use(jssVendorPrefixer());
}

export function testMethod(testName, method, testStrs) {
  return it(testName, () => {
    const sheet = jss.createStyleSheet({
      a: {
        extend: method,
      },
    }, {named: false});
    expect(sheet.toString()).to.be(testStrs.join('\n'));
  });
}
