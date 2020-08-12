import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text ,View, Left, Icon, Body} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import NetInfo from "@react-native-community/netinfo";
import Axios from 'axios';
import Header from "./src/Components/Header";
import { NativeRouter, Route, Link } from "react-router-native";
import LoginPage from './src/Components/loginPage';
import Register from './src/Components/Register';


function Co()
{
  console.log()
   if(NetInfo.useNetInfo().isConnected.toString()==="true")
  {
       return(
            <Container>
                <LoginPage/>
            </Container>
              
         

           
              
            
       )
  }
  return(<>
  <Header/>
    <Body style={{marginTop: '90%',}}>
           <Icon name="md-football" color="green"/>
           <Text>Network eror try again</Text>
           </Body>
  </>)
}




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Bahn:require("./Fonts/bhen.ttf"),
      cambria:require("./Fonts/Cambria.ttf"),
      Seg_UI:require("./Fonts/sgui.ttf"),
      sikta_small:require("./Fonts/Sikta.ttf"),
      Ms:require("./Fonts/Ms.ttf"),
      Arial:require("./Fonts/arial.ttf"),
      ...Ionicons.font,
    });
  
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
     
      return <AppLoading />;
    }
    
    return (
      <NativeRouter>
        <Route path="/" exact component={Co}/>
        <Route path="/Register" exact component={Register}/>
        <Route path="/Login" exact component={LoginPage}/>
      </NativeRouter>
    );
  }
}
//splash screen
//login page 4
//register page 