import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Load from './src/pages/Load';
import Auth from './src/pages/Auth';
import Register from './src/pages/Register';
import Feed from './src/pages/Feed';
import CriarPost from './src/pages/MenuResgister';
import Menu from './src/pages/Menu';
import MenuRegister from './src/pages/MenuResgister';


const Stack = createStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Load">
        <Stack.Screen name="Load" component={Load} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Feed" component={Feed} options={{ headerShown: false }} />
        <Stack.Screen name="MenuResgister" component={MenuRegister} options={{ headerShown: false }} />
        <Stack.Screen name="Comodidade" component={Comodidade} options={{ headerShown: false }} />
        <Stack.Screen name="Atletica" component={Atletica} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
