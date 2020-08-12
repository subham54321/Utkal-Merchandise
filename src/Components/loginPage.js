import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import { Item, Input,H1, Button, Thumbnail, Label } from 'native-base'
import Style from "../Style/style"
import img from "../Components/Images/logo.png"

import img3 from "../Components/Images/Background.png";
import { Link } from 'react-router-native'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground'
import HomePage from './HomePage'
export default class LoginPage extends Component {
    state={
        isLogedIn:true,
    }
    log()
    {
        return(
            
            
            <ImageBackground source={img3} style={{width:'100%',height:'100%'}}>
                
                   
                      <>
                      
                    <Image  source={img} block style={Style.Image}>
                       
                    </Image>
                    
                <View style={Style.Login}>
                
                <Item rounded style={Style.name} floatingLabel>
               
                    <Input placeholder="Username" style={Style.Cambria}/>
                   
                    
                </Item>
                
                <Item rounded style={Style.name} floatingLabel>
                
                    <Input placeholder="Password" style={Style.Cambria} secureTextEntry={true}/>
                </Item>
                
                <Button full rounded    rounded style={{width:'40%',marginLeft:'30%',backgroundColor: "white",opacity: 0.6,marginTop:'10%'}} >
            <Text style={Style.Cambria2}><H1>Login</H1></Text>
          </Button>
          <Text style={{margin: '5%',marginLeft: '32%',fontFamily:'Ms',color:'#171717',fontSize:18}}>or continue with</Text>
         
          
              <Thumbnail rounded source={require("../Components/Images/facebook.png")} style={{marginLeft:'25%'}}/>
             
          
          
          <Thumbnail rounded source={require("../Components/Images/twitter.png")} style={{marginLeft:'45%',marginTop:-55}}/>
          <Thumbnail rounded source={require("../Components/Images/google.png")} style={{marginLeft:'65%',marginTop:-57}}/>
      
         
       

            
                
                </View>
                
                <View style={{marginTop:'-18%'}}>
              
                <Link to="/Register" style={{marginLeft:'0%',marginTop:'53%',justifyContent: 'center',marginRight:'0%',backgroundColor: 'white',opacity: 0.1,width: '100%',height:60}} 
                >
               <Text>
             
               </Text>
                
               </Link>
               <View>
                   <Link to="/Register">
                       <View>
               <Text style={{color: 'white',opacity:1,marginTop: '-15%',fontSize: 14,marginLeft: '32%',fontFamily:"Bahn",color:'#FFFFFF'}}>Don't have an Account?</Text>
               <Text style={{color: 'white',opacity:1,marginTop: '1%',fontSize: 14,marginLeft: '45%',fontFamily:"Bahn",color:'#FFFFFF'}}>Sign up</Text>  
               </View>
               </Link> 
               </View>

               </View>
                
                </> 
              
                
                </ImageBackground> 
        
        )
    }

   

    render() {
        return (
           <>
              {this.state.isLogedIn?<HomePage/>:<this.log></this.log>}
              </>
           
        )
    }
}
