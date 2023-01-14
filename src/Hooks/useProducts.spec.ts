import {useProducts} from './useProducts';

import list from '../../__mocks__/product.mock';
import {act} from 'react-test-renderer';
import {waitFor} from '@testing-library/react-native';
import {renderHook} from '@testing-library/react-hooks';
// import {Product} from '../../Common/Types';

jest.mock('../Services/product.service', () => ({
  getProducts: jest.fn().mockImplementation(() => Promise.resolve(list)),
}));

describe('useProducts Hook', () => {
  it('should hook', async () => {
    let resultHook: any;
    act(() => {
      const {result} = renderHook(() => useProducts());

      resultHook = result;
    });
    await waitFor(() => {
      expect(resultHook.current.products).toHaveLength(3);

      resultHook.current.setFilter('won');
      expect(resultHook.current.filter).toEqual('won');
      expect(resultHook.current.products).toHaveLength(2);

      resultHook.current.setFilter('redeemed');
      expect(resultHook.current.filter).toEqual('redeemed');
      expect(resultHook.current.products).toHaveLength(1);

      resultHook.current.setFilter(null);
      expect(resultHook.current.filter).toEqual(null);
      expect(resultHook.current.products).toHaveLength(3);
    });
  });
});
