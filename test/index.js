'use strict';

QUnit.module('Perdido JSS Grid plugin', {
  setup() {
    var row = Perdido.row,
        column = Perdido.column;
  }
});

// test('nesting with space', function () {
//   var sheet = jss.createStyleSheet({
//     a: {
//       float: 'left',
//       '& b': {float: 'left'}
//     }
//   }, {named: false})
//   ok(sheet.rules.a)
//   ok(sheet.rules['a b'])
//   equal(sheet.toString(), 'a {\n  float: left;\n}\na b {\n  float: left;\n}')
// })

// test('nesting without space', function () {
//   var sheet = jss.createStyleSheet({
//     a: {
//       float: 'left',
//       '&b': {float: 'left'}
//     }
//   }, {named: false})
//   ok(sheet.rules.a)
//   ok(sheet.rules['ab'])
//   equal(sheet.toString(), 'a {\n  float: left;\n}\nab {\n  float: left;\n}')
// })

// test('multi nesting', function () {
//   var sheet = jss.createStyleSheet({
//     a: {
//       float: 'left',
//       '&b': {float: 'left'},
//       '& c': {float: 'left'}
//     }
//   }, {named: false})
//   ok(sheet.rules.a)
//   ok(sheet.rules.ab)
//   ok(sheet.rules['a c'])
//   equal(sheet.toString(), 'a {\n  float: left;\n}\nab {\n  float: left;\n}\na c {\n  float: left;\n}')
// })

// test('multi nesting in one selector', function () {
//   var sheet = jss.createStyleSheet({
//     a: {
//       float: 'left',
//       '&b, &c': {float: 'left'}
//     }
//   }, {named: false})
//   ok(sheet.rules.a)
//   ok(sheet.rules['ab, ac'])
//   equal(sheet.toString(), 'a {\n  float: left;\n}\nab, ac {\n  float: left;\n}')
// })


// test('deep nesting', function () {
//   var sheet = jss.createStyleSheet({
//     a: {
//       '&b': {
//         '&c': {
//           float: 'left'
//         }
//       }
//     }
//   }, {named: false})
//   ok(sheet.rules.a)
//   ok(sheet.rules.ab)
//   ok(sheet.rules.abc)
//   equal(sheet.toString(), 'a {\n}\nab {\n}\nabc {\n  float: left;\n}')
// })

// test('addRules', function () {
//   var sheet = jss.createStyleSheet({
//     a: {
//       height: '1px'
//     }
//   }, {named: false})

//   sheet.addRules({
//     b: {
//       height: '2px',
//       '& c': {
//         height: '3px'
//       }
//     }
//   })
//   sheet.attach()
//   equal(sheet.element.sheet.rules[0].cssText, 'a { height: 1px; }')
//   equal(sheet.element.sheet.rules[1].cssText, 'b { height: 2px; }')
//   equal(sheet.element.sheet.rules[2].cssText, 'b c { height: 3px; }')
//   sheet.detach()
// })

// test('nesting in a namespaced rule', function () {
//   jss.uid.reset()
//   var sheet = jss.createStyleSheet({
//     a: {
//       float: 'left',
//       '& b': {float: 'left'}
//     }
//   })
//   ok(sheet.rules['.jss-0-0'])
//   ok(sheet.rules['.jss-0-0 b'])
//   equal(sheet.toString(), '.jss-0-0 {\n  float: left;\n}\n.jss-0-0 b {\n  float: left;\n}')
// })
