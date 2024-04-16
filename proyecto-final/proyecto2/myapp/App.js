import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';

import EmployeeForm from "./screens/EmployeeForm";
import ParkingForm from "./screens/ParkingsForm";
import Employee from "./screens/Employee";
import Parkings from './screens/Parkings';
import History from './screens/History';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const EmployeeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Employee"
        component={Employee}
        options={({ navigation }) => ({
          headerRight: () => (
            <Ionicons.Button
              name="add-circle-outline"
              size={30}
              color="green"
              backgroundColor="transparent"
              onPress={() => navigation.navigate('EmployeeForm')}
            />
          ),
        })}
      />
      <Stack.Screen
        name="EmployeeForm"
        component={EmployeeForm}
        options={{ title: 'Agregar Empleado' }}
      />
    </Stack.Navigator>
  );
};

const ParkingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Parkings"
        component={Parkings}
        options={({ navigation }) => ({
          headerRight: () => (
            <Ionicons.Button
              name="add-circle-outline"
              size={30}
              color="green"
              backgroundColor="transparent"
              onPress={() => navigation.navigate('ParkingsForm')}
            />
          ),
        })}
      />
      <Stack.Screen
        name="ParkingsForm"
        component={ParkingForm}
        options={{ title: 'Agregar Parking' }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Empleados"
          component={EmployeeStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Parkings"
          component={ParkingStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="grid-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Historial"
          component={History}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="newspaper-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
