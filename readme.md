# Perdido JSS Grid System

Perdido is a grid system for JSS, it is mostly a translation of the wonderful [Lost PostCSS Grid](https://github.com/peterramsing/lost) (thus the name as "perdido" means lost in Portuguese.) Perdido comes with a set of functions that you can use in your JSS to create fluid grids easily.

Perdido has requirements for the following JSS plugins, so make sure to install and initialize them.

1. jss-extend
2. jss-nested
3. jss-camel-case
4. jss-default-unit
5. jss-vendor-prefixer

## Table of Contents

1. Example
2. API
3. Options
4. Contributing

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
import perdido from 'perdido';


var sectionStyle = {
    section: {
        article: {
            ...perdido.column('1/3'),
        }
    }
}

jss.createStyleSheet(sectionStyle, {named: false}).attach();
```

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

```

* `Perdido.gutter` accepts any unit value (default: '30px')

* `Perdido.flex` accepts a boolean value (default: false)

* `Perdido.cycle` accepts a integer value (default: -1 for auto cycle)

* `Perdido.offsetDir` accepts a string of either 'row' or 'column' (default: row)

## Contributing

## Thanks
