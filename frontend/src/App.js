import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Load from './pages/Load';
import Auth from './pages/Auth';
import Feed from './pages/Feed';
import Menu from './pages/Menu';
<<<<<<< HEAD:frontend/src/App.js
import MenuRegister from './pages/MenuRegister';
import Admin from './pages/Admin';

=======
import MenuRegister from './pages/MenuResgister';
import Suporte from './pages/Suporte';
>>>>>>> c45a067c8482f1501b499673ae757d70f306f599:src/App.js

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Load">
        <Stack.Screen name="Load" component={Load} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        <Stack.Screen name="Feed" component={Feed} options={{ headerShown: false }} />
        <Stack.Screen name="MenuRegister" component={MenuRegister} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
<<<<<<< HEAD:frontend/src/App.js
        <Stack.Screen name="Admin" component={Admin} options={{ headerShown: false }} />
=======
        <Stack.Screen name="Suporte" component={Suporte} options={{ headerShown: false }} />
>>>>>>> c45a067c8482f1501b499673ae757d70f306f599:src/App.js
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
