import {render} from '@testing-library/react-native';

import {Button} from './Button';

describe('Button Component', () => {
  it('renders correctly', () => {
    const {getByText} = render(<Button onPress={() => {}}>Hola</Button>);

    expect(getByText('Hola')).toBeDefined();
  });
});
