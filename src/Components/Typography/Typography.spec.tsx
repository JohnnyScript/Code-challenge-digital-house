import {render} from '@testing-library/react-native';

import {Typography} from './Typography';

describe('Typography Component', () => {
  it('renders correctly', () => {
    const {getByText} = render(<Typography>Hola mundo</Typography>);

    expect(getByText('Hola mundo')).toBeDefined();
  });

  it('renders correctly with bold, small, margin and color', () => {
    const {getByText} = render(
      <Typography
        weight="bold"
        size="small"
        color="gray"
        margin="large"
        upperCase>
        Hola mundo
      </Typography>,
    );

    expect(getByText('Hola mundo')).toBeDefined();
  });
});
