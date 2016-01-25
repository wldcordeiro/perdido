# Perdido JSS Grid System

Perdido is a grid system for JSS, it is mostly a translation of the wonderful [Lost PostCSS Grid](https://github.com/peterramsing/lost). Perdido comes with a set of functions that you can use in your JSS to create fluid grids easily.

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
import Perdido from 'perdido';


var sectionStyle = {
    section: {
        article: {
            ...Perdido.column('1/3'),
        }
    }
}

jss.createStyleSheet(sectionStyle, {named: false}).attach();
```

## API

## Options

## Contributing


