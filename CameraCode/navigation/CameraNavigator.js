import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OpenCamera from '../OpenCamera';
import CameraScreen from '../CameraScreen';

const Stack = createStackNavigator();

const CameraNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OpenCamera"
          component={OpenCamera}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CameraScreen"
          component={CameraScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CameraNavigator;
