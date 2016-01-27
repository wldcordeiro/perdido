# Perdido JSS Grid System

Perdido is a grid system for JSS, it is mostly a translation of the wonderful [Lost PostCSS Grid](https://github.com/peterramsing/lost) (thus the name as "perdido" means lost in Portuguese.) Perdido comes with a set of functions that you can use in your JSS to create fluid grids easily.

Perdido has requirements for the following JSS plugins, so make sure to install and initialize them.

1. jss-extend
2. jss-nested
3. jss-camel-case
4. jss-default-unit
5. jss-vendor-prefixer


## Table of Contents

1. [Example](#example)
2. [Guide](#guide)
    1. [Basic Columns](#basic-columns)
    2. [Centering Elements](#centering-elements)
    3. [Controlling Cycle](#controlling-cycle)
    4. [Nesting](#nesting)
    5. [Offsetting Elements](#offsetting-elements)
    6. [Alignment](#alignment)
    7. [Edit Mode](#edit-mode)
    8. [Vertical Grids](#vertical-grids)
    9. [Waffle Grids](#waffle-grids)
    10. [Flexbox Grids](#flexbox-grids)
    11. [Masonry Support](#masonry-support)
3. [API](#api)
4. [Options][#options]
5. [Contributing](#contributing)
6. [Thanks](#thanks)


## Example

Say we had a simple HTML block like a `section` with three inner `article`'s and we wanted to split it into a 1/3 grid. With Perdido we could do this to generate the `style` block containing your grid.

```html
<section>
    <article>1</article>
    <article>2</article>
    <article>3</article>
</section>
```

```js
import jss from 'jss';
import extend from 'jss-extend';
import nested from 'jss-nested';
import camelCase from 'jss-camel-case';
import defaultUnit from 'jss-default-unit';
import vendorPrefixer from 'jss-vendor-prefixer';
import perdido from 'perdido';


jss.use(extend());
jss.use(nested());
jss.use(camelCase());
jss.use(defaultUnit());
jss.use(vendorPrefixer());


var sectionStyle = {
    section: {
        '& article': {
            ...perdido.column('1/3'),
        }
    }
}

jss.createStyleSheet(sectionStyle, {named: false}).attach();
```

The processed CSS that would be produced looks like this.

```css
section article {
  width: calc(99.99% * 1/3 - (30px - 30px * 1/3));
}
section article:nth-child(n) {
  float: left;
  clear: none;
  margin-right: 30px;
}
section article:last-child {
  margin-right: 0;
}
section article:nth-child(3n) {
  float: right;
  margin-right: 0;
}
section article:nth-child(3n + 1) {
  clear: left;
}
```


## Guide

### Basic Columns

### Centering Elements

### Controlling Cycle

### Nesting

### Offsetting Elements

### Alignment

### Edit Mode

### Vertical Grids

### Waffle Grids

### Flexbox Grids

### Masonry Support


## API

### Perdido.align(..)

### Perdido.center(..)

### Perdido.column(..)

### Perdido.flexContainer(..)

### Perdido.masonryColumn(..)

### Perdido.masonryWrap(..)

### Perdido.move(..)

### Perdido.offset(..)

### Perdido.row(..)

### Perdido.utils.clearFix

### Perdido.utils.edit

### Perdido.waffle(..)


## Options

Perdido comes with some default settings that can be changed to your liking.

```js
// ES6/2015
import {create} from 'perdido';

const perdido = create('20px', true, 3, 'column');
```

* `Perdido.gutter` accepts any unit value (default: '30px')

* `Perdido.flex` accepts a boolean value (default: false)

* `Perdido.cycle` accepts a integer value (default: -1 for auto cycle)

* `Perdido.offsetDir` accepts a string of either 'row' or 'column' (default: row)


## Contributing


## Thanks

* The [Lost CSS Grid team](https://github.com/peterramsing/lost) for making an awesome grid for me to base this on.
