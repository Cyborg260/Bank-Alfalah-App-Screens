import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, StyleSheet} from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import TopTabNavigation from "./android/topTabNavigation";
const App = () => {


  return (

<SafeAreaProvider>
      <View style={{ flexDirection: "row", backgroundColor: '#b22222', justifyContent: 'space-between', height: 50 }}>
        <View>
          <Image
            style={{ width: 40, height: 40, marginLeft: 10, marginTop: 5, tintColor: "#fff" }}
            source={require("./android/components/assets/icons8-left-50.png")}
          />
        </View>
        <View>
          <Text style={{ fontSize: 18, color: 'white', marginTop: 15, marginRight: 10 }}>
            My Payees
          </Text>
        </View>
        <Image
          style={{ width: 30, height: 30, marginRight: 10, marginTop: 10, tintColor: "#fff" }}
          source={require("./android/components/assets/icons8-home-24.png")}

        />
      </View>

     <TopTabNavigation/>

     </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "blue"
  // }
})
export default App;








 // const [username, setusername] = useState("")

    // return (
        // <SafeAreaView style={styles.container}>
        //     <View style={styles.inputView}>
        //         <TextInput
        //             style={styles.input}
        //             placeholder='Search My Payees'
        //             autoCapitalize="none"
        //             // maxLength={15}
        //             autoCorrect={false}
        //             value={username}
        //             onChangeText={(text) => {
        //                 setusername(text)
        //             }}

        //         />

        //         <Text style={styles.text}>
        //             GO
        //         </Text>

        //     </View>

        //     <View style={{
        //         backgroundColor: 'blue',
        //         marginTop: 15,
        //         height: "12%",
        //         padding: 20,
        //         flexDirection: "row",

        //     }}>
        //         <ScrollView

        //             horizontal={true}
        //             style={{
        //                 backgroundColor: 'red',
        //                 height: 40,
        //                 width: "100%",
        //             }}>
        //             <Text style={{

        //                 backgroundColor: "yellow",
        //                 width: "20%",
        //                 textAlign: 'center',
        //                 height: "200%",
        //                 borderWidth: 1,
        //                 borderColor: "black",
        //                 borderRadius: 5,

        //             }}>
        //                 All
        //             </Text>
        //             <Text style={{
        //                 marginLeft: 10,
        //                 backgroundColor: "yellow",
        //                 width: "50%",
        //                 textAlign: 'center',
        //                 height: "200%",
        //                 borderWidth: 1,
        //                 borderColor: "black",
        //                 borderRadius: 5,

        //             }}>
        //                 Bank Alfalah Payees
        //             </Text>
        //             <Text style={{
        //                 backgroundColor: "yellow",
        //                 width: "50%",
        //                 textAlign: 'center',
        //                 height: "200%",
        //                 borderWidth: 1,
        //                 borderColor: "black",
        //                 borderRadius: 5,
        //                 marginLeft: 10

        //             }}>
        //                 Other Bank Payees
        //             </Text>
        //         </ScrollView>

        //     </View>

        //     <View style={{
        //         marginVertical: 180,
        //         alignItems: 'center',

        //     }}>
        //         <Text style={styles.midText}>
        //             No Payee Found
        //         </Text>
        //         <Text style={styles.midText}>
        //             Tap on "+" to create a new payee
        //         </Text>
        //     </View>
        //     <View style={{
        //         backgroundColor: "yellow",
        //         marginTop: -50,
        //         alignItems: "flex-end",
        //         padding: 5,


        //     }}>
        //         <TouchableOpacity
        //             style={styles.opacity}
        //             activeOpacity={0.85}
        //         >
        //             <Image
        //                 style={{
        //                     width: 32,
        //                     height: 32,

        //                 }}
        //                 source={require("./components/assets/icons8-add-male-user-64.png")}
        //             />
        //         </TouchableOpacity>
        //     </View>
        // </SafeAreaView>
    // )
  // }

  // const styles = StyleSheet.create({
      // container: {
      //     flex: 1.2,
      // },
      // input: {
      //     width: "90%",
  
      //     // backgroundColor: 'white',
      //     fontSize: 16,
      //     paddingLeft: 10
      //     // marginTop: 20,
      //     // borderRadius: 10,
      //     // textAlign: 'left',
      //     // paddingLeft: 20
      // },
      // inputView: {
      //     flexDirection: 'row',
      //     alignItems: "center",
      //     borderColor: 'black',
      //     borderWidth: 1,
      //     justifyContent: 'space-between',
      //     width: '90%',
      //     backgroundColor: '#fff',
      //     marginLeft: 20,
      //     borderRadius: 10,
      //     marginTop: 40
      // },
      // view: {
      //     backgroundColor: 'blue',
      //     flexDirection: 'row',
      //     justifyContent: 'center'
      // },
      // text: {
      //     fontSize: 18,
      //     paddingRight: 10,
      //     color: '#b22222',
      // },
      // midText: {
      //     color: "#a9a9a9",
      //     fontSize: 18,
      // },
      // opacity: {
      //     borderRadius: 50,
      //     backgroundColor: 'red',
      //     width: 40
      // },
  // })