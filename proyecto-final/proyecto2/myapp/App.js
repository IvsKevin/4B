import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'; // Importa los iconos que desees utilizar

// import HomeScreen from './screens/HomeScreen'
// import Register from './screens/Register'
import EmployeeForm from "./screens/EmployeeForm";

import Employee from "./screens/Employee";
import Parkings from './screens/Parkings';
import History from './screens/History';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Parkings"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Employee') {
              iconName = focused ? 'people-outline' : 'people-outline'; // Cambia 'ios-Employee' por el nombre del icono que deseas utilizar
            } else if (route.name === 'Parkings') {
              iconName = focused ? 'grid-outline' : 'grid-outline'; // Cambia 'ios-person' por el nombre del icono que deseas utilizar
            } else if (route.name === 'History') {
              iconName = focused ? 'newspaper-outline' : 'newspaper-outline'; // Cambia 'ios-create' por el nombre del icono que deseas utilizar
            }

            // Devuelve el componente de icono con el nombre y el color especificados
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen
          name="Employee"
          component={Employee}
          options={{
            tabBarLabel: 'Empleados',
          }}
        />
        <Tab.Screen
          name="Parkings"
          component={Parkings}
          options={{
            tabBarLabel: 'Parkings',
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarLabel: 'Historial',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
