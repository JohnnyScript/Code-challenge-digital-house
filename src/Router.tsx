import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from './Screens/Home';
import {Detail} from './Screens/Detail';

const Stack = createNativeStackNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail">
          {(p: any) => <Detail {...p} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
