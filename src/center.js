/* @flow */
import {centerType} from './types';
/**
 * Perdido.center: Horizontally center a containing element and apply padding
 * to it.
 *
 * @param  {length} maxWidth a max width to assign of any unit type.
 * @param  {length} padding  left and right padding on the element, can be
 *                           any unit.
 * @param  {boolean} flex     determines whether to use flex or not.
 * @return {object} an object containing the valid JSS rules and values
 *                  to center containing elements.
 */


export default function center(maxWidth: string, padding: string,
                               flex: bool): centerType {
  let style: centerType = {
    maxWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  if (padding !== null) {
    style.paddingLeft = padding;
    style.paddingRight = padding;
  }

  if (flex === false) {
    style['&:before'] = {
      content: "''",
      display: 'table',
    };

    style['&:after'] = {
      content: "''",
      display: 'table',
      clear: 'both',
    };
  } else {
    style.display = 'flex';
    style.flexFlow = 'row wrap';
  }

  return style;
}
