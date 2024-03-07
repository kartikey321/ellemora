export enum SizesEnum {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
}

export interface SizeData {
  id: string;
  size: SizesEnum;
  available: boolean;
}
