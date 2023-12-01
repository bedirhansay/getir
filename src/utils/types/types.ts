export type TCategory = {
  id: string;
  name: string;
  src: string;
  subCategories: string[];
};

export type TProduct = {
  id: string;
  image: string;
  images: string[];
  name: string;
  miktar: string;
  fiyat: number;
  fiyatIndirimli?: number;
};

export type TFiltering = {
  readonly id: string;
  readonly name: string;
};
