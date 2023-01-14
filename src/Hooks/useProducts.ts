import {useCallback, useEffect, useState} from 'react';

import {Product, FilterProduct} from '../Common/Types';
import {getProducts} from '../Services/product.service';

const filterProduct = (p: Product, filter: FilterProduct): boolean => {
  if (!filter) {
    return true;
  }
  if (filter === 'won' && !p.is_redemption) {
    return true;
  }
  if (filter === 'redeemed' && p.is_redemption) {
    return true;
  }
  return false;
};

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<FilterProduct>(null);

  const load = async () => {
    const list = await getProducts();
    setProducts(list);
  };

  const filteredProducts = useCallback(() => {
    if (products.length === 0) {
      return [];
    }
    const list = filter
      ? products.filter(p => filterProduct(p, filter))
      : products;

    return list;
  }, [products, filter]);

  const points = () => {
    if (products.length === 0) {
      return 0;
    }
    const list = filteredProducts();

    return list.length > 0
      ? list.reduce(
          (prev, curr) => prev + (curr.is_redemption ? -1 : 1) * curr.points,
          0,
        )
      : 0;
  };

  useEffect(() => {
    load();
  }, []);

  return {
    filter,
    setFilter,
    points: points(),
    products: filteredProducts(),
    loading: products.length === 0,
  };
};
