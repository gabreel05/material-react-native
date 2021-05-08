import { StatusBar } from 'expo-status-bar'

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-native-paper'

import { ContactList } from './ContactList'
import { Profile } from './Profile'

import { MenuIcon } from './components/MenuIcon'
import { MenuContent } from './components/MenuContext'

export default function App() {
  const { Navigator, Screen } = createDrawerNavigator()

  return (
    <SafeAreaProvider>
      <Provider>
        <NavigationContainer>
          <Navigator
            screenOptions={{
              headerShown: true,
              headerLeft: () => <MenuIcon />
            }}
            drawerContent={props => <MenuContent {...props} />}
          >
            <Screen name="ContactList" component={ContactList} />
            <Screen name="Profile" component={Profile} />
          </Navigator>
        </NavigationContainer>
      </Provider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  )
}
