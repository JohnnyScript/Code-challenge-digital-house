import {Text, View} from 'react-native';
import {render} from '@testing-library/react-native';

import {Screen} from './Screen';

describe('Screen Component', () => {
  it('renders correctly', () => {
    const {getByText} = render(
      <Screen>
        <View>
          <Text>Test Success</Text>
        </View>
      </Screen>,
    );

    expect(getByText('Test Success')).toBeDefined();
  });
});
