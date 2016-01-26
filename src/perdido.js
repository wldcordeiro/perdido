import align from './align';
import center from './center';
import column from './column';
import flexContainer from './flex-container';
import move from './move';
import offset from './offset';
import row from './row';
import * as utils from './utils';
import {GUTTER, FLEX, CYCLE, OFFSET_DIR} from './defaults';

export default class Perdido {
  constructor(gutter=GUTTER, flex=FLEX, cycle=CYCLE, offsetDir=OFFSET_DIR) {
    // Set the default values.
    this.gutter = gutter;
    this.flex = flex;
    this.cycle = cycle;
    this.offsetDir = offsetDir;

    this.flexContainer = flexContainer;
    this.utils = utils;
  }

  create(gutter=this.gutter, flex=this.flex, cycle=this.cycle, offsetDir=this.offsetDir) {
    return new Perdido(gutter, flex, cycle, offsetDir);
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

  move(moveVal, direction, gutter=this.gutter) {
    return move(moveVal, direction, gutter);
  }

  offset(offsetVal, direction=this.offsetDir, gutter=this.gutter) {
    return offset(offsetVal, direction, gutter);
  }

  row(rowVal, gutter=this.gutter, flex=this.flex) {
    return row(rowVal, gutter, flex);
  }
}
