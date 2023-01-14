import {render} from '@testing-library/react-native';

import {Home} from './Home';
import {Product} from '../../Common/Types';
import mockProducts from '../../../__mocks__/product.mock';

const product = mockProducts[0] as Product;

jest.mock('../../Hooks/useProducts', () => ({
  useProducts: jest.fn().mockImplementation(() => ({
    products: mockProducts as Product[],
  })),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('Home screen', () => {
  it('renders correctly', () => {
    const {getByText} = render(<Home />);

    expect(getByText(product.product)).toBeDefined();
  });
});
