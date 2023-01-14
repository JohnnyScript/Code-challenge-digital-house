import {render} from '@testing-library/react-native';

import {SummaryCard} from './SummaryCard';

describe('SummaryCard Component', () => {
  it('renders correctly', () => {
    const {getByText} = render(<SummaryCard value={2000} />);

    expect(getByText('2000 pts')).toBeDefined();
  });
});
