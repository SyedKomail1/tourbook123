import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Keyboard,
  Alert,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  Dimensions,
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
import { DataTable } from "react-native-paper";
const { width, height } = Dimensions.get("window");

const Userprofile2 = ({ navigation }) => {
  const [user, setUser] = useState([]);
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);

  const t = "";

  async function getValueFor(token) {
    return await SecureStore.getItemAsync(token);
  }
  useEffect(async () => {
    const token = await getValueFor("token");

    const axiosPosts = async () => {
      const response = await axios.get(
        "http://tourbook-backend.herokuapp.com/order/mine",
        { headers: { "x-auth-token": token } }
      );
      setPosts(response.data);
      // console.log(response.data);
      console.log(response.data[0]);
    };
    axiosPosts();
  }, []);

  const PayNow = async () => {
    const token = await getValueFor("token");

    console.log(posts[0].amount, posts[0].amount);
  };

  const usePosts = posts.map((post) => {
    return (
      <View>
        <View
          style={{
            borderBottomColor: "lightgrey",
            borderBottomWidth: 2,
            width: width - 20,
          }}
        ></View>

        <View
          style={{
            flex: 1,
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "COLORS.black",
          }}
        >
          <View
            style={{
              flex: 2,
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "center",
              // backgroundColor: "#fff",
              width: "100%",
              padding: 20,
              paddingBottom: 22,
              // borderRadius: 10,
              // shadowopacity: 80,
              // elevation: 15,
              marginTop: 20,
            }}
          >
            <Text> {post.tourID.name} </Text>
          </View>

          <View
            style={{
              flex: 1,
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
            <Text>
              {"\n"} {post?.seats}
            </Text>
          </View>

          <View
            style={{
              flex: 2.3,
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "center",
              //  backgroundColor: "#fff",
              width: "90%",
              padding: 20,
              paddingBottom: 28,
              // borderRadius: 10,
              // shadowopacity: 80,
              // elevation: 15,
              //marginTop: 10,
            }}
          >
            <Text>
              {"\n"} {post?.date}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
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
            <Text>
              {"\n"} {post?.amount}
            </Text>
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
          <Text
            style={{
              color: COLORS.white,
              fontWeight: "bold",
              backgroundColor: COLORS.primary,
              textAlign: "center",
              fontSize: 24,
              marginTop: 20,
              marginBottom: 20,
              height: 60,
              justifyContent: "center",
              paddingTop: 10,
            }}
          >
            Your Booked Tours
          </Text>

          {/* <View>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title
                  style={{
                    marginRight: 55,
                  }}
                >
                  Name
                </DataTable.Title>
                <DataTable.Title
                  numeric
                  style={{
                    marginRight: 55,
                  }}
                >
                  Seats
                </DataTable.Title>
                <DataTable.Title
                  numeric
                  style={{
                    marginRight: 55,
                  }}
                >
                  Amount
                </DataTable.Title>
                <DataTable.Title>Description</DataTable.Title>
              </DataTable.Header>
              <ScrollView>
                {posts && posts.length > 0
                  ? posts.map((item, index) => {
                      return (
                        <DataTable.Row key={index}>
                          <DataTable.Cell
                            style={{
                              flex: 4,
                              marginLeft: -17,
                              marginRight: -350,
                            }}
                          >
                            {item.tourID.name}
                          </DataTable.Cell>
                          <DataTable.Cell
                            numeric
                            style={{ flex: 4, marginLeft: -50 }}
                          >
                            {item.seats}
                          </DataTable.Cell>
                          <DataTable.Cell
                            numeric
                            style={{
                              flex: 3,
                              marginLeft: -60,
                            }}
                          >
                            {item.amount}
                          </DataTable.Cell>
                          <DataTable.Cell
                          // style={{ flex: 3, marginRight: 5 }}
                          >
                            {item.tourID.description}
                          </DataTable.Cell>
                        </DataTable.Row>
                      );
                    })
                  : false}
              </ScrollView>
            </DataTable>
          </View> */}

          <View
            style={{
              flexDirection: "row",
              flex: 1,
              marginLeft: 15,
              paddingBottom: 10,
              paddingTop: 10,
            }}
          >
            <Text
              style={{
                color: COLORS.black,
                paddingRight: 15,

                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              Name
            </Text>

            <Text
              style={{
                color: COLORS.black,
                paddingRight: 15,
                paddingLeft: 13,
                fontWeight: "bold",
                fontSize: 15,
                marginLeft: 33,
                marginRight: 15,
              }}
            >
              Seats
            </Text>

            <Text
              style={{
                color: COLORS.black,
                paddingRight: 15,
                paddingLeft: 18,
                fontWeight: "bold",
                fontSize: 15,
                marginLeft: 10,
                marginRight: 15,
              }}
            >
              Date
            </Text>

            <Text
              style={{
                color: COLORS.black,
                paddingRight: 15,
                paddingLeft: 10,
                fontWeight: "bold",
                fontSize: 15,
                marginLeft: 15,
              }}
            >
              Amount
            </Text>
          </View>
          <View style={{ backgroundColor: COLORS.white }}>{usePosts}</View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
});
export default Userprofile2;
