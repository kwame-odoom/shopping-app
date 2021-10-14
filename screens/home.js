import React from "react";
import { View, Text, Image} from "react-native";
import {Entypo, FontAwesome5, Ionicons,AntDesign, MaterialIcons, FontAwesome} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home(){
    return <View style={{backgroundColor: "white", flex: 1, paddingLeft:20}}>
        <View style={{marginTop:50, flexDirection:"row"}}>
            <TouchableOpacity>
        <Entypo name="menu" size={30} color="black" />
        </TouchableOpacity>
        <FontAwesome5 name="motorcycle" size={30} color="black" style={{marginLeft:140}}/>
        <Ionicons name="md-search-outline" size={30} color="black" style={{marginLeft:100}} />
        <Ionicons name="notifications-outline" size={30} color="#000" style={{marginLeft:10}} />
        </View>
        <Text style={{marginTop:20, color:'#bab1ab', fontSize:26, marginBottom:20}}>
            The World's <Text style={{color:"#f7660c", fontWeight:"700",fontSize:30}}>Best Bikes</Text>
        </Text>
        <Text style={{fontSize:30, fontWeight:'700'}}>
            Categories
        </Text>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{
                backgroundColor:'#d3dbd5', padding: 15, margin: 10, marginLeft:0, borderRadius:10
            }}><Text style={{color:'#f7660c', fontWeight:'700'}}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor:'#d3dbd5', padding: 15, margin: 10, marginHorizontal:13, borderRadius:10
            }}><Text style={{color:'#bab1ab', fontWeight:'700'}}>Roadbike</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor:'#d3dbd5', padding: 15, margin: 10,  marginHorizontal:13, borderRadius:10
            }}><Text style={{color:'#bab1ab', fontWeight:'700'}}>Mountain</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor:'#d3dbd5', padding: 15, margin: 10,  marginHorizontal:13, borderRadius:10
            }}><Text style={{color:'#bab1ab', fontWeight:'700'}}>Urban</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', margin:10, marginLeft:0}}>
            <TouchableOpacity style={{marginRight:30, backgroundColor:"#d3dbd5", borderRadius:10}}>
            <AntDesign name="hearto" size={24} color="#f7660c" align style={{borderRadius:20}} />
            <Image style={{height:130, width:150}} source={{uri:"https://pngimg.com/uploads/bicycle/bicycle_PNG5376.png"}}/>
            <Text style={{textAlign:'center', color:'#bab1ab',fontWeight:'500', fontSize:24}}>
                Sandema Bike
            </Text>
            <Text style={{textAlign: 'center', color:"#f7660c", fontWeight:'500', fontSize:24}}>$<Text style={{ color:"#000"}}>1000.00</Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:40, backgroundColor:"#d3dbd5", borderRadius:10}}>
            <AntDesign name="hearto" size={24} color="black"/>
            <Image style={{height:130, width:150}} source={{uri:"https://pngimg.com/uploads/bicycle/bicycle_PNG5374.png"}}/>
            <Text style={{textAlign:'center', color:'#bab1ab',fontWeight:'500', fontSize:24}}>
                Mountain Bike
            </Text>
            <Text style={{textAlign: 'center', color:"#f7660c", fontWeight:'500', fontSize:24}}>$<Text style={{ color:"#000"}}>1500.00</Text></Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', margin:10, marginLeft:0}}>
            <TouchableOpacity style={{marginRight:30, backgroundColor:"#d3dbd5", borderRadius:10}}>
            <AntDesign name="hearto" size={24} color="#f7660c" align style={{borderRadius:20}} />
            <Image style={{height:130, width:150}} source={{uri:"https://www.freeiconspng.com/thumbs/bicycle-png/road-mountain-bicycle-png-29.png"}}/>
            <Text style={{textAlign:'center', color:'#bab1ab',fontWeight:'500', fontSize:24}}>
                Something Else
            </Text>
            <Text style={{textAlign: 'center', color:"#f7660c", fontWeight:'500', fontSize:24}}>$<Text style={{ color:"#000"}}>1000.00</Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:40, backgroundColor:"#d3dbd5", borderRadius:10}}>
            <AntDesign name="hearto" size={24} color="black"/>
            <Image style={{height:130, width:150}} source={{uri:"https://www.freepnglogos.com/uploads/bike-png/honda-cbr-sport-bike-png-image-pngpix-22.png"}}/>
            <Text style={{textAlign:'center', color:'#bab1ab',fontWeight:'500', fontSize:24}}>
                Motor Bike
            </Text>
            <Text style={{textAlign: 'center', color:"#f7660c", fontWeight:'500', fontSize:24}}>$<Text style={{ color:"#000"}}>1500.00</Text></Text>
            </TouchableOpacity>
        </View>
        <View style={{alignItems:'center', margin:10, marginBottom:0}}>
            <FontAwesome name="microphone" size={24} color="black" />
        </View>
        <View  style={{flexDirection:'row', backgroundColor:'#d3dbd5'}}>
            <TouchableOpacity style={{alignItems:"flex-start"}}>
            <MaterialIcons name="home" size={24} color="#f7660c" />
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:"flex-end"}}>
            <FontAwesome5 name="shopping-bag" size={24} color="black" />
            </TouchableOpacity>

        </View>
        
    </View>
}
