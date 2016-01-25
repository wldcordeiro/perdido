import align from './align';
import column from './column';
import row from './row';
import flexContainer from './flex-container';
import {clearFix, edit} from './utils';

export default class Perdido {
  constructor() {
    this.align = align;
    this.column = column;
    this.row = row;
    this.flexContainer = flexContainer;
    this.utils = {clearFix, edit};
  }
}
