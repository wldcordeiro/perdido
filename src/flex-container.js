export default function flexContainer(direction) {
  let style = {
    display: 'flex'
  };

  if (direction === 'column') {
    style['flex-flow'] = 'column nowrap';
  } else {
    style['flex-flow'] = 'row wrap';
  }


  return style;
}
