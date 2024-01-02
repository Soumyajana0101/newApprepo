import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Home from './screens/Home';
import Account from './screens/Account';
import Search from './screens/ProductDetails';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductContext from './context';
import ProductDetails from './screens/ProductDetails';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
 
 
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
 
function BottomTabs() {
  return (
    <Tab.Navigator>
    
      <Tab.Screen name='Home' component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={25} color={'#606060'} />
          ),
        }} />
      <Tab.Screen name='Account' component={Account} options = {{
        tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-circle" size={25} color={'#606060'}/> 
            ),
            }}/>
      
    </Tab.Navigator>
  )
}
 
export default function App() {
  return (
    <ProductContext>
      
      <View style={styles.container}>
      <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator
          screenOptions = {{
            headerStyle :{
              backgroundColor : "#fff"
            },contentStyle : {
              backgroundColor:"#7d7f7c"
            }
          }}
          >
            <Stack.Screen options={{
              headerShown: false
              }}
 
              name='bottomTabs' component={BottomTabs} />
            <Stack.Screen
              name='ProductDetails' component={ProductDetails} />
          </Stack.Navigator>
 
        </NavigationContainer>
      </View>
    </ProductContext>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
});