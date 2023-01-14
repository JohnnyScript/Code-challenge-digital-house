import {Product} from '../Common/Types';
import {get} from '../Common/Utils/AxiosAdapter';
import {API_BASE_URL} from '../Common/Constants/api';

export const getProducts = (): Promise<Product[]> => {
  return get({
    url: `${API_BASE_URL}/products`,
  });
};
