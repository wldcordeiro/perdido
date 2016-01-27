/* @flow */

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


/**
 * Main Perdido class.
 *
 * @api public
 */
export default class Perdido {
  constructor(
      gutter: string = GUTTER,
      flex: bool = FLEX,
      cycle: number = CYCLE,
      offsetDir:string = OFFSET_DIR): Perdido {
    // Set the default values.
    this.gutter = gutter;
    this.flex = flex;
    this.cycle = cycle;
    this.offsetDir = offsetDir;

    // Simple properties/methods.
    this.flexContainer = flexContainer;
    this.utils = utils;
  }

  /**
   * Creates a new instance of Perdido.
   *
   * @see Perdido
   * @api public
   */
  create(
      gutter: string = GUTTER,
      flex: bool = FLEX,
      cycle: number = CYCLE,
      offsetDir: string = OFFSET_DIR): Perdido {
    return new Perdido(gutter, flex, cycle, offsetDir);
  }

  /**
   * Aligns nested elements.
   *
   * @see align
   * @api public
   */
  align(alignment: string, flex: bool = this.flex): Object {
    return align(alignment, flex);
  }

  /**
   * Centers a containing element.
   *
   * @see center
   * @api public
   */
  center(maxWidth: string, padding: string, flex: bool = this.flex): Object {
    return center(maxWidth, padding, flex);
  }

  /**
   * Creates a column that is a fraction of its containing element's size.
   *
   * @see column
   * @api public
   */
  column(
      columnVal: string,
      cycle: number = this.cycle,
      gutter: string = this.gutter,
      flex: bool = this.flex): Object {
    return column(columnVal, cycle, gutter, flex);
  }

  /**
   * Create a column for working with JS Masonry libraries like Isotope.
   *
   * @see masonry.masonryColumn
   * @api public
   */
  masonryColumn(
      columnVal: string,
      gutter: string = this.gutter,
      flex: bool = this.flex): Object {
    return masonryColumn(columnVal, gutter, flex);
  }

  /**
   * Create a wrapping element for working with JS Masonry libraries
   * like Isotope.
   *
   * @see masonry.masonryWrap
   * @api public
   */
  masonryWrap(flex: bool = this.flex, gutter: string = this.gutter): Object {
    return masonryWrap(flex, gutter);
  }

  /**
   * Source ordering. Shift elements left, right, up, or down.
   *
   * @see move
   * @api public
   */
  move(
      moveVal: string,
      direction: string = this.offsetDir,
      gutter: string = this.gutter): Object {
    return move(moveVal, direction, gutter);
  }

  /**
   * Margin to the left, right, bottom, or top, of an element.
   *
   * @see offset
   * @api public
   */
  offset(
      offsetVal: string,
      direction: string = this.offsetDir,
      gutter: bool = this.gutter): Object {
    return offset(offsetVal, direction, gutter);
  }

  /**
   * Creates a row that is a fraction of its containing element's size.
   *
   * @see row
   * @api public
   */
  row(
      rowVal: string,
      gutter: string = this.gutter,
      flex: bool = this.flex): Object {
    return row(rowVal, gutter, flex);
  }

  /**
   * Creates a block that is a fraction of the size of its containing element.
   *
   * @see waffle
   * @api public
   */
  waffle(
      waffleVal,
      cycle: number = this.cycle,
      gutter: string = this.gutter,
      flex: bool = this.flex): Object {
    return waffle(waffleVal, cycle, gutter, flex);
  }
}
