import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard, Profile, Transaction, Settings} from '../../containers/Home';
import {SafeAreaView} from 'react-native-safe-area-context';
import Constants from '../../constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Stack = createBottomTabNavigator();

const DashboardNavigator = () => {
  return (
    <SafeAreaView
      edges={['top']}
      style={{
        flex: 1,
        backgroundColor: Constants.Colors.White,
      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Transaction" component={Transaction} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};
export default DashboardNavigator;
