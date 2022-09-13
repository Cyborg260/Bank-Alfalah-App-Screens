import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SendMoney from './SendMoney';
import {useSafeAreaInsets} from 'react-native-safe-area-context';



const Tab = createMaterialTopTabNavigator();

// function SendMoney(){

//     return (
//         <View>
//           <Text>SendMoney</Text>
//         </View>
//       )
//     };

function Screens() {
    const insets = useSafeAreaInsets ();

  return (
 <Tab.Navigator
        // initialRouteName="SendMoney"
        tabBarOptions={{
            activeTintColor:"#e91e63",
            labelStyle:{fontSize:12},
            style:{backgroundColor:"white",marginTop:insets.top}
        }}
 >
    <Tab.Screen
    name="SendMoney"
    component={SendMoney}
    options={{tabBarlabel:"SendMoney"}}
    />
     {/* <Tab.Screen
    name={MobileTopUp}
    component={MobileTopUp}
    options={{tabBarlabel:"Mobile Top Up"}}
    />
     <Tab.Screen
    name={Utility}
    component={Utility}
    options={{tabBarlabel:"Utility"}}
    /> */}

 </Tab.Navigator>
)
}
const TopTabNavigation =()=>{
    return(
        <NavigationContainer>
            <Screens/>
        </NavigationContainer>
    )
}
export default TopTabNavigation;
