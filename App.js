import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';

export default class App extends React.Component{
  render(){
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
  
}

const TabNavigator = createBottomTabNavigator({
  ReadStory: {screen: ReadStoryScreen},
  WriteStory: {screen: WriteStoryScreen}
},
  {
   defaultNavigationOptions: ({navigation})=>{
     tabBarIcon: ()=>{
       const routeName = navigation.state.routeName;
       console.log(routeName);
       if(routeName === "ReadStory"){
         return(
         <Image
         source = {require("./assets/read.png")}
         style = {{width: 40, height: 40}}
         />
         )
       }
       else if(routeName === "WriteStory"){
         return(
           <Image
           source = {require("./assets/write.png")}
           style = {{width: 40, height: 40}}
           />
         )
       }
     }
   }
  }
)

const AppContainer = createAppContainer(TabNavigator);
