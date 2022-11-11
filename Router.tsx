import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Menu,
  Welcom,
  ToAdd,
  List,
  ToAddTravel,
  ToAddTourOperator,
  ListTravel,
  ListTourOperator,
} from './components';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcom" component={Welcom} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="ToAdd" component={ToAdd} />
        <Stack.Screen name="ToAddTravel" component={ToAddTravel} />
        <Stack.Screen name="ToAddTourOperator" component={ToAddTourOperator} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="ListTravel" component={ListTravel} />
        <Stack.Screen name="ListTourOperator" component={ListTourOperator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
