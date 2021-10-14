import React from "react";
import { View,Text, Image, TouchableOpacity } from "react-native";
import {AntDesign} from '@expo/vector-icons'

export default function Login(){
    return <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
        <Image style={{width:150,height:150, borderRadius:10, marginBottom: 25}}
        source={{uri:"https://www.montaguebikes.com/wp-content/uploads/2020/08/M-E1-Folded-800.jpg"}}
        />
        <Text style={{color: "#8c918d", fontSize:24}}>Welcome to</Text>
        <Text style={{color:"#000", fontSize:30, fontWeight:'700', marginBottom:10}}>Power Bike Shop</Text>
        <TouchableOpacity style={{fontSize:20,flexDirection:"row", backgroundColor:"#d3dbd5", padding:15, paddingHorizontal:60, margin:10, borderRadius:10}}>
            <Image style={{height:20, width:20, marginRight:30}} source={{uri:"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"}}/>
            <Text style={{fontSize:20}}>Login with Gmail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"#000",flexDirection:"row", padding:15, paddingHorizontal:60,fontSize:20, borderRadius:10}}>
            <AntDesign name="apple1" size={24} color="white" />
            <Text style={{color:'white', marginLeft:30, fontSize:20}}>Login with Apple</Text>
        </TouchableOpacity>
        <Text style={{marginTop:10, fontWeight:'600',color: "#8c918d"}}>
            Not a member? <Text style={{color:"#e05a07"}}>SignUp</Text>
        </Text>
    </View>
}
