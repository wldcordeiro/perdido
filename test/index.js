'use strict';

// Center
QUnit.module('Perdido Center', {
  setup() {
    var jss = window.jss,
        jssExtend = window.jssExtend,
        jssNested = window.jssNested,
        jssCamelCase = window.jssCamelCase,
        jssDefaultUnit = window.jssDefaultUnit,
        jssVendorPrefixer = window.jssVendorPrefixer,
        perdido = window.perdido;

    jss.use(jssExtend());
    jss.use(jssNested());
    jss.use(jssCamelCase());
    jss.use(jssDefaultUnit());
    jss.use(jssVendorPrefixer());
  }
});

test('can support horizontal centering containers', function() {
  var sheet = jss.createStyleSheet({
    a: {
      extend: perdido.center('980px')
    }
  }, {named: false});
  ok(sheet.rules.a);

  var testStr = [
    'a {\n  max-width: 980px;\n  margin-left: auto;\n  margin-right: auto;\n  *zoom: 1;\n}',
    'a:before {\n  content: \'\';\n  display: table;\n}',
    'a:after {\n  content: \'\';\n  display: table;\n  clear: both;\n}'
  ].join('\n');
  equal(sheet.toString(), testStr);
});

test('can support adding 30px padding', function() {
  var sheet = jss.createStyleSheet({
    a: {
      extend: perdido.center('980px', '30px')
    }
  }, {named: false});
  ok(sheet.rules.a);

  var testStr = [
    'a {\n  max-width: 980px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 30px;\n  padding-right: 30px;\n  *zoom: 1;\n}',
    'a:before {\n  content: \'\';\n  display: table;\n}',
    'a:after {\n  content: \'\';\n  display: table;\n  clear: both;\n}'
  ].join('\n');
  equal(sheet.toString(), testStr);
});

test('can support flexbox', function() {
  var sheet = jss.createStyleSheet({
    a: {
      extend: perdido.center('1140px', '30px', 'flex')
    }
  }, {named: false});
  ok(sheet.rules.a);

  var testStr = [
    'a {\n  max-width: 1140px;\n  margin-left: auto;\n  margin-right: auto;',
    '  padding-left: 30px;\n  padding-right: 30px;\n  display: flex;',
    '  flex-flow: row wrap;\n}'
  ].join('\n');
  equal(sheet.toString(), testStr);
});

// Column
QUnit.module('Perdido Column', {
  setup() {
    var jss = window.jss,
        jssExtend = window.jssExtend,
        jssNested = window.jssNested,
        jssCamelCase = window.jssCamelCase,
        jssDefaultUnit = window.jssDefaultUnit,
        jssVendorPrefixer = window.jssVendorPrefixer,
        perdido = window.perdido;

    jss.use(jssExtend());
    jss.use(jssNested());
    jss.use(jssCamelCase());
    jss.use(jssDefaultUnit());
    jss.use(jssVendorPrefixer());
  }
});

test('can support 3 column layout', function() {
  var sheet = jss.createStyleSheet({
    a: {
      extend: perdido.column('1/3')
    }
  }, {named: false});
  ok(sheet.rules.a);

  var testStr = [
    'a {\n  width: calc(99.99% * 1/3 - (30px - 30px * 1/3));\n}',
    'a:nth-child(n) {\n  float: left;\n  margin-right: 30px;\n  clear: none;\n}',
    'a:last-child {\n  margin-right: 0;\n}',
    'a:nth-child(3n) {\n  float: right;\n  margin-right: 0;\n}',
    'a:nth-child(3n + 1) {\n  clear: left;\n}'
  ].join('\n');
  equal(sheet.toString(), testStr);
});

test('can support 2/5 column layout', function() {
  var sheet = jss.createStyleSheet({
    a: {
      extend: perdido.column('2/5')
    }
  }, {named: false});
  ok(sheet.rules.a);

  var testStr = [
    'a {\n  width: calc(99.99% * 2/5 - (30px - 30px * 2/5));\n}',
    'a:nth-child(n) {\n  float: left;\n  margin-right: 30px;\n  clear: none;\n}',
    'a:last-child {\n  margin-right: 0;\n}',
    'a:nth-child(5n) {\n  float: right;\n  margin-right: 0;\n}',
    'a:nth-child(5n + 1) {\n  clear: left;\n}'
  ].join('\n');
  equal(sheet.toString(), testStr);
});

test('can support custom cycle', function() {
  var sheet = jss.createStyleSheet({
    a: {
      extend: perdido.column('2/4', 2)
    }
  }, {named: false});
  ok(sheet.rules.a);

  var testStr = [
    'a {\n  width: calc(99.99% * 2/4 - (30px - 30px * 2/4));\n}',
    'a:nth-child(n) {\n  float: left;\n  margin-right: 30px;\n  clear: none;\n}',
    'a:last-child {\n  margin-right: 0;\n}',
    'a:nth-child(2n) {\n  float: right;\n  margin-right: 0;\n}',
    'a:nth-child(2n + 1) {\n  clear: left;\n}'
  ].join('\n');
  equal(sheet.toString(), testStr);
});

test('can support no gutter', function() {
  var sheet = jss.createStyleSheet({
    a: {
      extend: perdido.column('2/5', 3, '0')
    }
  }, {named: false});
  ok(sheet.rules.a);

  var testStr = [
    'a {\n  width: calc(99.999999% * 2/5);\n}',
    'a:nth-child(n) {\n  float: left;\n  margin-right: 0;\n  clear: none;\n}',
    'a:last-child {\n  margin-right: 0;\n}',
    'a:nth-child(3n) {\n  float: right;\n  margin-right: 0;\n}',
    'a:nth-child(3n + 1) {\n  clear: left;\n}'
  ].join('\n');
  equal(sheet.toString(), testStr);
});

test('can support flexbox', function() {
  var sheet = jss.createStyleSheet({
    a: {
      extend: perdido.column('2/6', 3, '60px', 'flex')
    }
  }, {named: false});
  ok(sheet.rules.a);

  var testStr = [
    'a {\n  width: calc(99.99% * 2/6 - (60px - 60px * 2/6));\n  flex: 0 0 auto;\n}',
    'a:nth-child(n) {\n  margin-right: 60px;\n}',
    'a:last-child {\n  margin-right: 0;\n}',
    'a:nth-child(3n) {\n  float: right;\n  margin-right: 0;\n}'
  ].join('\n');
  equal(sheet.toString(), testStr);
});

test('can support none rule', function() {
  var sheet = jss.createStyleSheet({
    a: {
      extend: perdido.column('none')
    }
  }, {named: false});
  ok(sheet.rules.a);

  var testStr = [
    'a {\n  width: auto;\n}',
    'a:last-child {\n  float: none;\n  clear: none;\n  margin-right: 0;\n  width: auto;\n}',
    'a:nth-child(n) {\n  float: none;\n  clear: none;\n  margin-right: 0;\n  width: auto;\n}',
    'a:nth-child(1n + 1) {\n  float: none;\n  clear: none;\n  margin-right: 0;\n  width: auto;\n}',
    'a:nth-child(1n) {\n  float: none;\n  clear: none;\n  margin-right: 0;\n  width: auto;\n}'
  ].join('\n');
  equal(sheet.toString(), testStr);
});

// Row

QUnit.module('Perdido Row', {
  setup() {
    var jss = window.jss,
        jssExtend = window.jssExtend,
        jssNested = window.jssNested,
        jssCamelCase = window.jssCamelCase,
        jssDefaultUnit = window.jssDefaultUnit,
        jssVendorPrefixer = window.jssVendorPrefixer,
        perdido = window.perdido;

    jss.use(jssExtend());
    jss.use(jssNested());
    jss.use(jssCamelCase());
    jss.use(jssDefaultUnit());
    jss.use(jssVendorPrefixer());
  }
});

test('can support 3 row layout', function() {
  var sheet = jss.createStyleSheet({
    a: {
      extend: perdido.row('1/3')
    }
  }, {named: false});
  ok(sheet.rules.a);

  var testStr = [
    'a {\n  width: 100%;\n  height: calc(99.99% * 1/3 - (30px - 30px * 1/3));\n  margin-bottom: 30px;\n}',
    'a:last-child {\n  margin-bottom: 0;\n}'
  ].join('\n');
  equal(sheet.toString(), testStr);
});

test('can support 2/5 row layout', function() {
  var sheet = jss.createStyleSheet({
    a: {
      extend: perdido.row('2/5')
    }
  }, {named: false});
  ok(sheet.rules.a);

  var testStr = [
    'a {\n  width: 100%;\n  height: calc(99.99% * 2/5 - (30px - 30px * 2/5));\n  margin-bottom: 30px;\n}',
    'a:last-child {\n  margin-bottom: 0;\n}'
  ].join('\n');
  equal(sheet.toString(), testStr);
});

test('can support no gutter', function() {
  var sheet = jss.createStyleSheet({
    a: {
      extend: perdido.row('2/5', '0')
    }
  }, {named: false});
  ok(sheet.rules.a);

  var testStr = [
    'a {\n  width: 100%;\n  height: calc(99.999999% * 2/5);\n  margin-bottom: 0;\n}',
    'a:last-child {\n  margin-bottom: 0;\n}'
  ].join('\n');
  equal(sheet.toString(), testStr);
});

test('can support flexbox', function() {
  var sheet = jss.createStyleSheet({
    a: {
      extend: perdido.row('2/6', '60px', 'flex')
    }
  }, {named: false});
  ok(sheet.rules.a);

  var testStr = [
    'a {\n  width: 100%;\n  flex: 0 0 auto;\n  height: calc(99.99% * 2/6 - (60px - 60px * 2/6));\n  margin-bottom: 60px;\n}',
    'a:last-child {\n  margin-bottom: 0;\n}'
  ].join('\n');
  equal(sheet.toString(), testStr);
});
