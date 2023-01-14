import {render} from '@testing-library/react-native';

import {ItemList} from './ItemList';
import products from '../../../__mocks__/product.mock';
import {Product} from '../../Common/Types';

const product = products[0] as Product;

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('ItemList Component', () => {
  it('renders correctly', () => {
    const {getByText} = render(<ItemList products={products as Product[]} />);

    expect(getByText(product.product)).toBeDefined();
  });
});
