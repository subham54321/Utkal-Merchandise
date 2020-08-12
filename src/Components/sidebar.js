import React from 'react'
import { View, Text,Image } from 'react-native'
import { Content, Item, Thumbnail, Left } from 'native-base'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground'
import Style from "../Style/style"//global styles
//side bar
export default function Sidebar() {
    return (
        
            <ImageBackground source={require("../Components/Images/Drawer.png")} style={{width:"100%",height:'100%'}}>


         <Image source={require("../Components/Images/Person.png")} style={{marginLeft:'1%',marginTop:'6%'}}></Image>
              <View style={{marginLeft:'15%',marginTop:'-10%',}}>

         <Text style={{fontSize:23,fontFamily: 'Seg_UI'}}>Namaste, username</Text> 
         </View>
         <Left style={{marginTop:70,marginLeft:'-20%'}}>
         <Image source={require("../Components/Images/Home.png")} style={{marginLeft:'-14%',marginTop:'0%',marginBottom:"-5%"}}></Image>
               <Text style={Style.Sidebar}>HOME</Text>
               
             
               <Text></Text>
               <Text></Text>
               <Text></Text>
              
               <Image source={require("../Components/Images/Shop.png")} style={{marginLeft:'-14%',marginTop:'-5%',marginBottom:"-5%"}}></Image>
               <Text style={Style.Sidebar}>SHOP</Text>

               <Text></Text>
               <Text></Text>
               <Text></Text>
              
               <Image source={require("../Components/Images/Shop.png")} style={{marginLeft:'-14%',marginTop:'-5%',marginBottom:"-5%"}}></Image>
               <Text style={Style.Sidebar}>ART GALLERY</Text>
               <Text></Text>
               <Text></Text>
              <Text></Text>
               <Image source={require("../Components/Images/Hot.png")} style={{marginLeft:'-14%',marginTop:'-5%',marginBottom:"-5%"}}></Image>
               <Text style={Style.Sidebar}>HOT DEALS</Text>
               <Text></Text>
               <Text></Text>
               <Text></Text>
               
               <Image source={require("../Components/Images/Orders.png")} style={{marginLeft:'-14%',marginTop:'-5%',marginBottom:"-5%"}}></Image>
            <Text style={Style.Sidebar}>ORDERS</Text>
               <Text></Text>
               <Text></Text>
               <Text></Text>
               <Image source={require("../Components/Images/Whishlist.png")} style={{marginLeft:'-14%',marginTop:'-5%',marginBottom:"-5%"}}></Image>
               <Text style={Style.Sidebar}>WISHLIST</Text>
               <Text></Text>
               <Text></Text>
               <Text></Text>
               <Image source={require("../Components/Images/Wallet.png")} style={{marginLeft:'-14%',marginTop:'-5%',marginBottom:"-5%"}}></Image>
               <Text style={Style.Sidebar}>WALLET</Text>
               <Text></Text>
               <Text></Text>
               <Text></Text>

               <Image source={require("../Components/Images/english.png")} style={{marginLeft:'-14%',marginTop:'-5%',marginBottom:"-5%"}}></Image>
               <Text style={Style.Sidebar}>LANGUAGE</Text>
               <Text></Text>
               <Text></Text>
               <Text></Text>
               <Image source={require("../Components/Images/Settings.png")} style={{marginLeft:'-14%',marginTop:'-5%',marginBottom:"-5%"}}></Image>
               <Text style={Style.Sidebar}>SETTINGS</Text>
               <Text> About us</Text>
               <Text></Text>
               <Text></Text>
               <Image source={require("../Components/Images/Phone.png")} style={{marginLeft:'-14%',marginTop:'-5%',marginBottom:"-5%"}}></Image>
               <Text style={Style.Sidebar}>Contact us</Text>
           </Left>
         
           
               
          
           
          </ImageBackground>
           
        
    )
}

