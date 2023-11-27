export type TCategory = {
  id: string;
  name: string;
  src: string;
  subCategories: string[];
};

export type Product = {
  readonly id: string;
  readonly image: string;
  readonly images: string[];
  readonly name: string;
  readonly miktar: string;
  readonly fiyat: number;
  readonly fiyatIndirimli?: number;
};

// Category.ts
export type Category = {
  readonly id: string;
  readonly name: string;
  readonly src: string;
  readonly subCategories: string[];
};

export type Filtering = {
  readonly id: string;
  readonly name: string;
};
