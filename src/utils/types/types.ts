export type TCategory = {
  id: string;
  name: string;
  src: string;
  subCategories: string[];
};

export type TProduct = {
  readonly id: string;
  readonly image: string;
  readonly images: string[];
  readonly name: string;
  readonly miktar: string;
  readonly fiyat: number;
  readonly fiyatIndirimli?: number;
};

export type TFiltering = {
  readonly id: string;
  readonly name: string;
};
