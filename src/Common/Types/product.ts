export type Product = {
  id: string;
  createdAt: Date;
  product: string;
  points: number;
  image: string;
  is_redemption: false;
};

export type FilterProduct = null | 'won' | 'redeemed';
