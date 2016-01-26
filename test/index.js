'use strict';

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

test('provides 3 column layout', function() {
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
})

test('provides 2/5 column layout', function() {
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
})

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
})

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
})

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
})

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
})