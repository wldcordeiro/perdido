import align from './align';
import center from './center';
import column from './column';
import row from './row';
import flexContainer from './flex-container';
import {clearFix, edit} from './utils';
import {GUTTER, FLEX, CYCLE} from './defaults';

export default class Perdido {
  constructor(cycle=CYCLE, gutter=GUTTER, flex=FLEX) {
    // Set the default values.
    this.cycle = cycle;
    this.gutter = gutter;
    this.flex = flex;

    this.flexContainer = flexContainer;
    this.utils = {clearFix, edit};
  }

  align(alignment, flex=this.flex) {
    return align(alignment, flex);
  }

  center(maxWidth, padding, flex=this.flex) {
    return center(maxWidth, padding, flex);
  }

  column(columnVal, cycle=this.cycle, gutter=this.gutter, flex=this.flex) {
    return column(columnVal, cycle, gutter, flex);
  }

  row(rowVal, gutter=this.gutter, flex=this.flex) {
    return row(rowVal, gutter, flex);
  }
}
