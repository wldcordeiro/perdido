/* @flow */

export type alignType = {
  display?: string,
  position?: string,
  '& > *': Object,
};

export type centerType = {
  display?: string,
  flexFlow?: string,
  maxWidth: string,
  marginLeft: string,
  marginRight: string,
  paddingLeft?: string,
  paddingRight?: string,
  '&:before'?: Object,
  '&:after'?: Object,
};

export type flexContainerType = {
  display: string,
  flexFlow: string,
};

export type masonryColumnType = {
  flex?: string,
  float?: string,
  width: string,
  marginLeft: string,
  marginRight: string,
};

export type masonryWrapType = {
  display?: string,
  flexFlow?: string,
  '&:before'?: Object,
  '&:after'?: Object,
  marginLeft: string,
  marginRight: string,
};
