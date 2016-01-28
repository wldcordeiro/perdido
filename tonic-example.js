var jss = require('jss');
var extend = require('jss-extend');
var nested = require('jss-nested');
var camelCase = require('jss-camel-case');
var defaultUnit = require('jss-default-unit');

var perdido = require('perdido');

jss.use(extend());
jss.use(nested());
jss.use(camelCase());
jss.use(defaultUnit());

var testGrid = {
  article: {
    extend: perdido.flexContainer('row'),
    '& div': {
      extend: perdido.column('1/3'),
    },
  },
};


var styleSheet = jss.createStyleSheet(testGrid, {named: false});

styleSheet.toString();

var perdidoFlex = perdido.create('30px', {flex: true});
perdido.flex = true;

var testGrid2 = {
  article: {
    extend: perdidoFlex.flexContainer('row'),
    '& div': {
      extend: perdidoFlex.column('1/3'),
    },
  },
};

var styleSheet2 = jss.createStyleSheet(testGrid2, {named: false});

styleSheet2.toString();
