export function clearFix() {
  return {
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
}

export function edit() {
  return {
    '&*:not(input):not(textarea):not(select)': {
      backgroundColor: 'rgba(0, 0, 255, 0.1)'
    }
  };
}
