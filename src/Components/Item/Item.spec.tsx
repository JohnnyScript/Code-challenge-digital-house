import {render} from '@testing-library/react-native';

import {Item} from './Item';
import mockProducts from '../../../__mocks__/product.mock';
import {Product} from '../../Common/Types';

const product = mockProducts[0] as Product;

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('Item Component', () => {
  it('renders correctly', () => {
    const {getByText} = render(<Item product={product} />);

    expect(getByText(product.product)).toBeDefined();
  });
});
