import React, { Component } from 'react'
import { Text, View,Image,ScrollView } from 'react-native'
import { Item, Input,H1, Button, Thumbnail, Label } from 'native-base'
import Style from "../Style/style"
import img from "../Components/Images/logo.png"

import img3 from "../Components/Images/Background.png";
import { Link } from 'react-router-native'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground'
export default class Register extends Component {
    state={
        name:'',
        email:'',
        password:'',
        cpassword:'',

    }
    log()
    {
        return(
            
            
            <ImageBackground source={img3} style={{width:'100%',height:'100%'}}>
                
                   
                      <>
                      
                    
    
                    
                      <Button full rounded  disabled  rounded style={{width:'40%',marginLeft:'30%',backgroundColor: "white",opacity: 0.6,marginTop:'45%',color:'#171717'}} >
            <Text style={{fontSize: 22,fontFamily: 'Bahn'}}>Register</Text>
          </Button> 
                <View style={Style.Login}>
                
                <Item rounded style={Style.name2} floatingLabel>
                
                    <Input placeholder="Username" style={Style.Cambria} />
                    
                </Item>
                
                <Item rounded style={Style.name2} floatingLabel>
               
                    <Input placeholder="  Email  " style={Style.Cambria}  textContentType="emailAddress"/>
                </Item>
                <Item rounded style={Style.name2} floatingLabel>
  
                    <Input placeholder="Password"  secureTextEntry={true} style={Style.Cambria} />
                </Item>
                <Item rounded style={Style.name2} floatingLabel>
               
                    <Input placeholder="Confirm Password"  secureTextEntry={true} style={Style.Cambria} />
                </Item>
                <Button full rounded    rounded style={{width:'40%',marginLeft:'30%',backgroundColor: "white",opacity: 0.6,marginTop:'6%'}} >
            <Text style={Style.Cambria2}>Sign Up</Text>
          </Button>
         
         
          
             
         
       

            
                
                </View>
                
                <View style={{marginTop:'-15%'}}>
              
                <Link to="/Login" style={{marginLeft:'0%',marginTop:'53%',justifyContent: 'center',marginRight:'0%',backgroundColor: 'white',opacity: 0.1,width: '100%',height:60}} 
                >
               <Text>
             
               </Text>
                
               </Link>
               <View>
                   <Link to="/Login">
                       <View>
               <Text style={{color: 'white',opacity:1,marginTop: '-15%',fontSize: 14,marginLeft: '32%',fontFamily:"Bahn",color:'#FFFFFF'}}>Already have an Account?</Text>
               <Text style={{color: 'white',opacity:1,marginTop: '1%',fontSize: 14,marginLeft: '45%',fontFamily:"Bahn",color:'#FFFFFF'}}>Login</Text>  
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
            <View>
                <this.log></this.log>
            </View>
          
           
        )
    }
}
