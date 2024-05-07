import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './components/home/index';
import AddEditContact from './components/Contact/addEditContact/index';
import Contacts from './components/Contact/contactListing/index';
import SettingTab from './components/settingMenu/index';
import ManageProfile from './components/manageProfile';
import CreateDIDScreen from './components/DId/createDid/index';
import Congratulations from './components/DId/congratulations/index';
import WelcomeBack from './components/unauthroised/welcomeBack/index';
import TransactionsScreen from './components/transaction/transactionListing/index';
import TransactionDetailScreen from './components/transaction/transactionDetails/index';
import Notifications from './components/notifications/index';
import AssetDetailScreen from './components/assetDetail/index';
import AddNewToken from './components/addToken/index';
import Header from './reusableComponents/header/index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function NoScreenComponent() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{ textAlign: 'center' }}>No Screen</Text>
    </View>
  );
}

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#940569', // Change the active icon color here
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet" color={color} size={size} />
          ),
          header: () => <Header />,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        // options={{
        //   tabBarIcon: ({ focused }) => (
        //     <Image
        //       style={{ tintColor: focused ? '#940569' : '#5A5A5A' }}
        //       source={require('./assets/otherAppsTabIcon.png')}
        //     />
        //   ),
        // }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="apps" color={color} size={size} />
          ),
          header: () => <Header />,
        }}
        name="DApps"
        component={NoScreenComponent} // Adjust this to point to the appropriate component
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library" color={color} size={size} />
          ),
          header: () => <Header />,
        }}
        name="History"
        component={TransactionsScreen} // Adjust this to point to the appropriate component
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
          header: () => <Header />,
        }}
        name="Settings"
        component={SettingTab}
      />
    </Tab.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={TabStack}
      />
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
        name="AddEditContact"
        component={AddEditContact}
      />
      <Stack.Screen
        name="Contacts"
        options={{
          header: () => <Header />,
        }}
        component={Contacts}
      />
      <Stack.Screen
        name="ManageProfile"
        options={{
          header: () => <Header />,
        }}
        component={ManageProfile}
      />
      <Stack.Screen
        name="CreateDIDScreen"
        options={{
          header: () => <Header />,
        }}
        component={CreateDIDScreen}
      />
      <Stack.Screen
        name="Congratulations"
        options={{
          header: () => <Header />,
        }}
        component={Congratulations}
      />
      <Stack.Screen
        name="WelcomeBack"
        options={{
          header: () => <Header />,
        }}
        component={WelcomeBack}
      />
      <Stack.Screen
        name="TransactionDetailScreen"
        options={{
          header: () => <Header />,
        }}
        component={TransactionDetailScreen}
      />

      <Stack.Screen
        name="Notifications"
        options={{
          header: () => <Header hideNotificationIcon={true} />,
        }}
        component={Notifications}
      />

      <Stack.Screen
        name="AssetDetail"
        options={{
          header: () => <Header />,
        }}
        component={AssetDetailScreen}
      />

      <Stack.Screen
        name="AddNewToken"
        options={{
          header: () => <Header />,
        }}
        component={AddNewToken}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="WelcomeScreen"
            options={{
              header: () => <Header hideNotificationIcon={true} />,
            }}
            component={WelcomeBack}
          />
          <Stack.Screen
            name="Authenticated"
            options={{
              headerShown: false,
            }}
            component={AuthenticatedStack}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
