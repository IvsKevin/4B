import react from "react";
import { Text, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './screens/HomeScreen'
import Register from './screens/Register'
import EmployeeForm from "./screens/EmployeeForm";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Usuarios',
            headerStyle: { backgroundColor: '#222f3e' },
            headerTitleStyle: { color: '#ffffff' },
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate('EmployeeForm')}>
                <Text style={{ color: '#ffffff', marginRight: 20, fontSize: 15 }}>New</Text>
              </Pressable>
            )
          })} />
        <Stack.Screen name="Register" component={Register}
          options={({ navigation }) => ({
            title: 'Crea un nuevo usuario',
            headerStyle: { backgroundColor: '#222f3e' },
            headerTitleStyle: { color: '#ffffff' },
            headerTintColor: '#ffffff',
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate('Register')}>
                <Text style={{ color: '#ffffff', marginRight: 20, fontSize: 15 }}>New</Text>
              </Pressable>
            )
          })}
        />
         <Stack.Screen name="EmployeeForm" component={EmployeeForm}
          options={({ navigation }) => ({
            title: 'Crea un nuevo empleado',
            headerStyle: { backgroundColor: '#222f3e' },
            headerTitleStyle: { color: '#ffffff' },
            headerTintColor: '#ffffff',
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate('EmployeeForm')}>
                <Text style={{ color: '#ffffff', marginRight: 20, fontSize: 15 }}>New</Text>
              </Pressable>
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;