import align from './align';
import center from './center';
import column from './column';
import flexContainer from './flex-container';
import {masonryColumn, masonryWrap} from './masonry';
import move from './move';
import offset from './offset';
import row from './row';
import * as utils from './utils';
import waffle from './waffle';
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

  create(gutter=GUTTER, flex=FLEX, cycle=CYCLE, offsetDir=OFFSET_DIR) {
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

  masonryColumn(columnVal, gutter=this.gutter, flex=this.flex) {
    return masonryColumn(columnVal, gutter, flex);
  }

  masonryWrap(flex=this.flex, gutter=this.gutter) {
    return masonryWrap(flex, gutter);
  }

  move(moveVal, direction=this.offsetDir, gutter=this.gutter) {
    return move(moveVal, direction, gutter);
  }

  offset(offsetVal, direction=this.offsetDir, gutter=this.gutter) {
    return offset(offsetVal, direction, gutter);
  }

  row(rowVal, gutter=this.gutter, flex=this.flex) {
    return row(rowVal, gutter, flex);
  }

  waffle(waffleVal, cycle=this.cycle, gutter=this.gutter, flex=this.flex) {
    return waffle(waffleVal, cycle, gutter, flex);
  }
}
