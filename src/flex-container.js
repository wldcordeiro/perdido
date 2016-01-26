export default function flexContainer(direction) {
  let style = {
    display: 'flex'
  };

  if (direction === 'column') {
    style.flexFlow = 'column nowrap';
  } else {
    style.flexFlow = 'row wrap';
  }

  return style;
}
