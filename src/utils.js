export const clearFix = {
  '*zoom': '1',
  '&:after': {
    content: '""',
    display: 'table',
    clear: 'both'
  },

  '&:before': {
    content: '""',
    display: 'table'
  }
};

export const edit = {
  '&*:not(input):not(textarea):not(select)': {
    backgroundColor: 'rgba(0, 0, 255, 0.1)'
  }
};
