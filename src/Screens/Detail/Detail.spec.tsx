import {render} from '@testing-library/react-native';

import {Detail} from './Detail';
import products from '../../../__mocks__/product.mock';
import {Product} from '../../Common/Types';

const product = products[0] as Product;

describe('Detail Screen', () => {
  it('renders correctly', () => {
    const {getByText} = render(
      <Detail
        navigation={{
          goBack: jest.fn(),
        }}
        route={{
          params: product,
        }}
      />,
    );

    expect(getByText(product.product)).toBeDefined();
  });
});
