/**
 * Perdido.move: Source ordering. Shift elements left, right, up, or down, by
 *               their left or top position by passing a positive or negative
 *               fraction.
 * @param  {string} moveVal   fraction of the container to be shifted.
 * @param  {string} direction direction the grid should be going. Should
 *                            be opposite of column or row it's being used on.
 * @param  {string} gutter    Adjust the size of the gutter for this movement.
 *                            Should match the element's gutter.
 * @return {object} an object containing the valid JSS rules and values to shift
 *                  an element around the grid.
 */
export default function move(moveVal, direction, gutter) {
  let style = {
    position: 'relative',
  };

  if (direction === 'column') {
    if (gutter !== '0') {
      style.top = [
        `calc(99.99% * ${moveVal} - (${gutter} - ${gutter}`,
        ` * ${moveVal}) + ${gutter})`].join('');
    } else {
      style.top = `calc(99.999999% * ${moveVal})`;
    }
  } else {
    if (gutter !== '0') {
      style.left = [
        `calc(99.99% * ${moveVal} - (${gutter} - ${gutter}`,
        ` * ${moveVal}) + ${gutter})`].join('');
    } else {
      style.left = `calc(99.999999% * ${moveVal})`;
    }
  }

  return style;
}
