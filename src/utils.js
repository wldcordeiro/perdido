/* @flow */

/**
 * Perdido.utils.clearFix: An object containing the styles necessary to apply
 *                         a clear fix to an element.
 * @type {Object}
 */
export const clearFix = {
  '*zoom': '1',

  '&:before': {
    content: "''",
    display: 'table',
  },

  '&:after': {
    content: "''",
    display: 'table',
    clear: 'both',
  },
};

/**
 * Perdido.utils.edit: An object containing the styling to apply an "edit" or
 *                     "debug" view.
 * @type {Object}
 */
export const edit = {
  '& *:not(input):not(textarea):not(select)': {
    backgroundColor: 'rgba(0, 0, 255, 0.1)',
  },
};
