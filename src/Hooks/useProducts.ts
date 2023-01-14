import {useEffect, useState} from 'react';

import {Product} from '../Common/Types';
import {getProducts} from '../Services/product.service';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const load = async () => {
    const list = await getProducts();
    setProducts(list);
  };

  useEffect(() => {
    load();
  }, []);

  return {
    products,
    loading: products.length === 0,
  };
};
