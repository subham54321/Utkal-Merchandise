import React, { Component } from 'react';
import { View, Text,ScrollView } from 'react-native';
import Hd from './Header';
import { Item, Icon ,Drawer, Left, Content, Container, Button} from 'native-base';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import Sidebar from './sidebar';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
       featured:[],//featured data
       
    };
  }
  closeDrawer () {
    this.drawer._root.close()
  };
  openDrawer()
  {
    this.drawer._root.open()
  }
  render() {
    return (
     
       <ImageBackground source={require("../Components/Images/Homepage.png")} style={{width:'100%',height:'100%'}}>
          <Drawer ref={(ref) => { this.drawer = ref; }} content={<Sidebar />} onClose={() => this.closeDrawer()} > 
          
          <Content>
          <Left>
            <Button onPress={()=>this.openDrawer()}>
            <Icon name="menu" color="green"/>
            </Button>
           
          </Left>
          </Content>
          
           </Drawer> 


      </ImageBackground>



     
    );
  }
}
