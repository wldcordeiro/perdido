import align from './align';
import center from './center';
import column from './column';
import flexContainer from './flex-container';
import row from './row';
import offset from './offset';
import {clearFix, edit} from './utils';
import {GUTTER, FLEX, CYCLE, OFFSET_DIR} from './defaults';

export default class Perdido {
  constructor(cycle=CYCLE, gutter=GUTTER, flex=FLEX, offsetDir=OFFSET_DIR) {
    // Set the default values.
    this.cycle = cycle;
    this.gutter = gutter;
    this.flex = flex;
    this.offsetDir = offsetDir;

    this.flexContainer = flexContainer;
    this.utils = {clearFix, edit};
  }

  create(cycle=CYCLE, gutter=GUTTER, flex=FLEX, offsetDir=OFFSET_DIR) {
    return new Perdido(cycle, gutter, flex, offsetDir);
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

  offset(offsetVal, direction=this.offsetDir, gutter=this.gutter) {
    return offset(offsetVal, direction, gutter);
  }
}
