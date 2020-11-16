import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  PlaidRegistration,
} from '../../containers/Auth';
import {SafeAreaView} from 'react-native-safe-area-context';
import Constants from '../../constants';
const Stack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <SafeAreaView
      edges={['top']}
      style={{
        flex: 1,
        backgroundColor: Constants.Colors.White,
      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen name="PlaidRegistration" component={PlaidRegistration} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};
export default AuthNavigator;
