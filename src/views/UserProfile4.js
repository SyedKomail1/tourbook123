import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  Alert,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

import UserAvatar from "react-native-user-avatar";

import COLORS from "../consts/colors";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Loader from "../../components/Looder";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Shared from "../../components/Shared";
import { Avatar } from "react-native-paper";
const {width, height} = Dimensions.get('window');


const UserProfile4 = ({navigation }) => {
 
  const [user, setUser] = useState([]);
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);

 const t="";

  async function getValueFor(token) {
    return await SecureStore.getItemAsync(token);
  }
  useEffect(async () => {
    const token = await getValueFor("token");
   
    const axiosPosts = async () => {
      const response = await axios.get(
        "http://tourbook-backend.herokuapp.com/vendor/dashboard",
        { headers: { "x-auth-token": token } }
      );
      setPosts(response.data.data.myTours);
      // console.log(response.data);
      console.log(response.data.data.myTours);
    };
    axiosPosts();
  }, []);

  const PayNow = async () =>{
    const token = await getValueFor("token");


   
  
  }

  const usePosts = posts.map((post) => {
    return (
      <View>
 <View>     
           <View style={{
   borderBottomColor: 'white', 
   borderBottomWidth: 4, 
   width: width - 20,}}>
</View>

<View
          style={{
            flex:1,
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "COLORS.black",
           
          }}
        >
       
<View
          style={{
            flex:1,
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
           // backgroundColor: "#fff",
            width: "90%",
            padding: 20,
            paddingBottom: 22,
           // borderRadius: 10,
           // shadowopacity: 80,
           // elevation: 15,
            marginTop: 20,
          }}
        >
        <Text> {post.name} </Text>
       
        </View>

     

        <View
          style={{
            flex:1,
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
           // backgroundColor: "#fff",
            width: "90%",
            padding: 20,
            paddingBottom: 22,
           // borderRadius: 10,
           // shadowopacity: 80,
           // elevation: 15,
            marginTop: 20,
          }}
        >
       
        <Text>{"\n"} {post?.price}</Text>
      
       
        </View>

       
        <View
          style={{
            flex:1,
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
          //  backgroundColor: "#fff",
            width: "90%",
            padding: 20,
            paddingBottom: 22,
           // borderRadius: 10,
           // shadowopacity: 80,
           // elevation: 15,
            marginTop: 20,
          }}
        >
       
        <Text>{"\n"} {post?.seats}</Text>
      
       
        </View>

        <View
          style={{
            flex:1,
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
           // backgroundColor: "#fff",
            width: "90%",
            padding: 20,
            paddingBottom: 22,
           // borderRadius: 10,
           // shadowopacity: 80,
           // elevation: 15,
            marginTop: 20,
          }}
        >
       
        <Text>{"\n"} {post?.startDate}</Text>
      
       
        </View>

        </View>
        
          
        <View style={{
   borderBottomColor: 'black', 
   borderBottomWidth: 0.5, 
   width: width - 20,}}>
</View>
       
      </View>



 
      </View>
    );
  });

  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
      
      <View
          style={{
            backgroundColor: COLORS.white,
            height: "100%",
            paddingHorizontal: 20,
          }}
        >

<Button
         
            title="Your Created Tours  "
          />
  
      
       
  
         < View style={{backgroundColor:COLORS.light,
            }} >
{usePosts} 

</View> 


          </View> 
       
      </ScrollView>
    </View>
  );
};

export default UserProfile4;