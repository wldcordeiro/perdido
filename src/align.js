/**
 * alignProps: Simple helper function that returns the appropriate JSON
 *             object for the style block.
 *
 * @param  {string} position  value for position rule
 * @param  {string} top       value for top rule
 * @param  {string} right     value for right rule
 * @param  {string} bottom    value for bottom rule
 * @param  {string} left      value for left rule
 * @param  {string} transform value for transform rule
 * @return {object}           An object containing the valid JSS rules and
 *                            values.
 */
function alignProps(position, top, right, bottom, left, transform) {
  return {
    position,
    top,
    right,
    bottom,
    left,
    transform,
  };
}

/**
 * Perdido.align: Align nested elements. Apply this to a parent container.
 *
 * @param {string} [reset|horizontal|vertical|top-left|top-center|top|
 * top-right|middle-left|left|middle-center|center|middle-right|right|
 * bottom-left|bottom-center|bottom|bottom-right] - The position the nested
 *   element takes relative to the containing element.
 * @param {boolean} - Determines whether this element should use Flexbox or not.
 * @return {object} an object containing the valid JSS rules and values to align
 *                  nested elements.
 */

export default function align(alignment, flex) {
  const style = {};

  if (flex === false) {
    if (alignment === 'reset') {
      style.position = 'static';

      style['& > *'] = alignProps(
        'static',
        'auto',
        'auto',
        'auto',
        'auto',
        'translate(0, 0)'
      );
    } else {
      style.position = 'relative';

      if (alignment === 'horizontal') {
        style['& > *'] = alignProps(
          'absolute',
          'auto',
          'auto',
          'auto',
          '50%',
          'translate(-50%, 0)'
        );
      } else if (alignment === 'vertical') {
        style['& > *'] = alignProps(
          'absolute',
          '50%',
          'auto',
          'auto',
          'auto',
          'translate(0, -50%)'
        );
      } else if (alignment === 'top-left') {
        style['& > *'] = alignProps(
          'absolute',
          '0',
          'auto',
          'auto',
          '0',
          'translate(0, 0)'
        );
      } else if (alignment === 'top-center' || alignment === 'top') {
        style['& > *'] = alignProps(
          'absolute',
          '0',
          'auto',
          'auto',
          '50%',
          'translate(-50%, 0)'
        );
      } else if (alignment === 'top-right') {
        style['& > *'] = alignProps(
          'absolute',
          '0',
          '0',
          'auto',
          'auto',
          'translate(0, 0)'
        );
      } else if (alignment === 'middle-left' || alignment === 'left') {
        style['& > *'] = alignProps(
          'absolute',
          '50%',
          'auto',
          'auto',
          '0',
          'translate(0, -50%)'
        );
      } else if (alignment === 'middle-center' || alignment === 'center') {
        style['& > *'] = alignProps(
          'absolute',
          '50%',
          'auto',
          'auto',
          '50%',
          'translate(-50%, -50%)'
        );
      } else if (alignment === 'middle-right' || alignment === 'right') {
        style['& > *'] = alignProps(
          'absolute',
          '50%',
          '0',
          'auto',
          'auto',
          'translate(0, -50%)'
        );
      } else if (alignment === 'bottom-left') {
        style['& > *'] = alignProps(
          'absolute',
          'auto',
          'auto',
          '0',
          '0',
          'translate(0, 0)'
        );
      } else if (alignment === 'bottom-center' || alignment === 'bottom') {
        style['& > *'] = alignProps(
          'absolute',
          'auto',
          'auto',
          '0',
          '50%',
          'translate(-50%, 0)'
        );
      } else if (alignment === 'bottom-right') {
        style['& > *'] = alignProps(
          'absolute',
          'auto',
          '0',
          '0',
          'auto',
          'translate(0, 0)'
        );
      }
    }
  } else {
    if (alignment === 'reset') {
      style.display = 'initial';

      style['& > *'] = {
        justifyContent: 'inherit',
        alignItems: 'inherit',
      };
    } else {
      style.display = 'flex';

      if (alignment === 'horizontal') {
        style['& > *'] = {
          justifyContent: 'center',
          alignItems: 'inherit',
        };
      } else if (alignment === 'vertical') {
        style['& > *'] = {
          justifyContent: 'inherit',
          alignItems: 'center',
        };
      } else if (alignment === 'top-left') {
        style['& > *'] = {
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        };
      } else if (alignment === 'top-center' || alignment === 'top') {
        style['& > *'] = {
          justifyContent: 'center',
          alignItems: 'flex-start',
        };
      } else if (alignment === 'top-right') {
        style['& > *'] = {
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
        };
      } else if (alignment === 'middle-left' || alignment === 'left') {
        style['& > *'] = {
          justifyContent: 'flex-start',
          alignItems: 'center',
        };
      } else if (alignment === 'middle-center' || alignment === 'center') {
        style['& > *'] = {
          justifyContent: 'center',
          alignItems: 'center',
        };
      } else if (alignment === 'middle-right' || alignment === 'right') {
        style['& > *'] = {
          justifyContent: 'flex-end',
          alignItems: 'center',
        };
      } else if (alignment === 'bottom-left') {
        style['& > *'] = {
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
        };
      } else if (alignment === 'bottom-center' || alignment === 'bottom') {
        style['& > *'] = {
          justifyContent: 'center',
          alignItems: 'flex-end',
        };
      } else if (alignment === 'bottom-right') {
        style['& > *'] = {
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        };
      }
    }
  }

  return style;
}
