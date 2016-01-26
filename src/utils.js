export const clearFix = {
  '*zoom': '1',

  '&:before': {
    content: "''",
    display: 'table'
  },

  '&:after': {
    content: "''",
    display: 'table',
    clear: 'both'
  }
};

export const edit = {
  '& *:not(input):not(textarea):not(select)': {
    backgroundColor: 'rgba(0, 0, 255, 0.1)'
  }
};
