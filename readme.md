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
// ES6/7/2015/whatever you call it
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

To create a basic horizontal grid, just insert some elements into any containing element like so and pass a fraction to the `Perdido.column` method. To unset (or remove) a column rule, possibly at a larger breakpoint, use `Perdido.column('none')`;

```html
<section>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</section>
```

```js
{
    section: {
        ...perdido.utils.clearFix,
        '& div': {
           ...perdido.column('1/3'),
        }
    }
}
```

`Perdido.utils.clearFix` is just a [clearfix](http://nicolasgallagher.com/micro-clearfix-hack/) style object since Perdido Grid elements are floated. It's a good idea to give this to the element wrapping your grid elements every time you have nested floated elements.

### Centering Elements

You can also make use of the `Perdido.center` property to assign a `max-width` and `margin: auto` to an element and center it on the page. clearfix will automatically be applied in this case.

```js
{
    section: {
        ...perdido.center('980px'),
        '& div': {
            ...perdido.column('1/2'),
        }
    }
}
```

### Controlling Cycle

Every element gets a `float: left` and `margin-right: gutter` applied to it except the last element in the row and the last item in a container. Perdido will automatically detect the last item in a row (based on the denominator you passed) and apply a `margin-right: 0` to it by default.

To override this behavior and tell Perdido to apply margin-right: 0 to a specific iteration, simply pass a cycle param to your `perdido.column` method. It's the second argument.

```js
{
    div: {
        ...perdido.column('2/4', 2),
    }
}
```

This will tell Perdido to create `div:nth-child(2n) { margin-right: 0; }` *instead* of `div:nth-child(4n) { margin-right: 0; }` (like it would by default and break).

Using this knowledge we can create really flexible layouts with varying widths like so (this will work for a single row nicely).

```html
<section class="row">
    <div class="quarter">1</div>
    <div class="half">2</div>
    <div class="quarter">3</div>
</section>
```

```js
{
    '.row': {
        ...perdido.utils.clearFix,
    },
    '.quarter': {
        ...perdido.column('1/4', 0),
    },
    '.half': {
        ...perdido.column('1/2', 0),
    },
}
```

The concept of cycle is extremely important to Lost and what sets good Perdido developers apart from great Perdido developers. Really try to grok this!

### Nesting

Nesting is simple. There is no context required.

```html
<section>
    <div>a</div>
    <div>
        <div>b</div>
        <div>
            <div>c</div>
            <div>c</div>
        </div>
    </div>
</section>
```

```js
{
    div: {
        ...perdido.column(1/2),
    }
}
```

### Offsetting Elements

You can offset columns easily. To offset in the other direction, pass a negative fraction.

```html
<section>
    <div>1</div>
    <div>2</div>
</section>
```

```js
{
    div: {
        ...perdido.column('1/3'),
        '&:first-child' {
            ...perdido.offset('1/3'),
        }
    }
}
```

### Alignment

Easily align children elements with the `Perdido.align` method. It accepts options like top-left, right, center, [etc](#perdidoalign).

```html
<section>
    <div>Aligned</div>
</section>
```

```js
{
    section: {
        ...perdido.align('center'),
        width: '600px',
        height: '400px',

        '& div': {
            width: '100px',
            height: '100px',
        }
    }
}
```

### Edit Mode

Use `perdido.utils.edit` on `body` to visualize the entire structure of your site, or just specify the areas you're working on.

```html
<section>
    <div>1</div>
    <div>2</div>
    <div>3</div>
</section>

<section>
    <div>4</div>
    <div>5</div>
    <div>6</div>
</section>
```

```js
{
    section: {
        '&:nth-of-type(1)': {
            ...perdido.utils.edit,
        },
        '&:nth-of-type(2)': {
            ...perdido.utils.edit,
        }
    }
}
```

### Vertical Grids

Once you've mastered the basic horizontal grid system (it shouldn't take long), you can start to make vertical grids that have the same vertical gutters as your horizontal grids. Just use the `perdido.row` method in place of `perdido.column`. These rows will stretch to fill their container's height, so if you'd like to see them take up the full height of the page, set `height: 100%` on your container.

```html
<section>
    <div>1</div>
    <div>2</div>
    <div>3</div>
</section>
```

```js
{
    section: {
        height: '100%',
        '& div': {
            ...perdido.row('1/3'),
        }
    }
}
```

### Waffle Grids

You can even make a horizontal/vertical grid (a **waffle grid**) which resembles a tic-tac-toe board.

```html
<section>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
</section>
```

```js
{
    section: {
        height: '100%',
        '& div': {
            ...perdido.waffle('1/3'),
        }
    }
}
```

### Flexbox Grids

You can easily change your grids to support Flexbox by altering the perdido property `flex` by setting it to `true`. Once you do this, all grids throughout your site will use flexed elements. To make sure they are displayed as flexed elements, you need to wrap them in `perdido.flexContainer` or `perdido.center` (which includes `perdido.flexContainer` by default).

```html
<section>
    <div>1</div>
    <div>2</div>
    <div>3</div>
</section>
```

```js
perdido.flex = true;

{
    section: {
       ...perdido.center('980px'), 
    },
    div: {
        ...perdido.column('1/3'),
    }
}
```

Flexbox offers slightly cleaner output and avoids the use of `clearfix` and other issues with float-based layouts. It also allows you to have elements of even height rather easily, and [much more](https://github.com/philipwalton/flexbugs/issues/32#issuecomment-90789645). The downside is, Flexbox doesn't work in IE9 or below, so keep that in mind if you have a client that needs that kind of support.

Also note that waffle grids work well for the most part, but are somewhat finicky in fringe situations. All methods provide a way to disable or enable Flexbox per element with the `flex` parameter so if you'd like to disable it for a specific case you could do this:

```html
<section>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
</section>
```

```js
perdido.flex = true;

{
    section: {
       ...perdido.center('980px', perdido.gutter, false), 
    },
    div: {
        ...perdido.waffle('1/3', perdido.cycle, perdido.gutter, false),
    }
}
```

### Masonry Support

Perdido supports masonry plugins like [Isotope](http://isotope.metafizzy.co/). To accomplish this we need to change how the margins work. Instead of applying a `margin-right` to everything, we need to apply it to both sides. We've made a couple special methods to help with this: `perdido.masonryColumn` which creates a margin on the left and right of each element it's applied to, and `perdido.masonryWrap` which wraps your columns and applies a negative margin to the left and right to them to help line them up with containing elements.

```html
<section>
    <div>1</div>
    <div>2</div>
    <div>3</div>
</section>
```

```js
{
    section: {
        ...perdido.masonryWrap(false),
        '& div': {
            ...perdido.masonryColumn('1/3'),
        }
    }
}
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
