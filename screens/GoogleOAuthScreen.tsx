import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Google from "expo-auth-session/providers/google";
import { RootNavigationList } from "../types";

type GoogleOAuthScreenProps = NativeStackScreenProps<
  RootNavigationList,
  "GoogleOAuth"
>;

const prettyJson = (value: any) => {
  return JSON.stringify(value, null, 2);
};

const GoogleOAuthScreen = ({ navigation }: GoogleOAuthScreenProps) => {
  const [userInfo, setUserInfo] = useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:
      "303423154734-tg84tfulas9dhp05ifqicvhbrqc66b10.apps.googleusercontent.com",
    androidClientId:
      "303423154734-abq9iuqn22i8rg1i7epa2gn2vj35l8bb.apps.googleusercontent.com",
    extraParams: { nonce: "justfortetst" },
  });

  useEffect(() => {
    if (response) {
      console.log("response:");
      console.log(response);
    }
  }, [response]);

  return (
    <ScrollView>
      <Text>Sign In with Google</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
        }}
        onPress={() => promptAsync()}
      >
        <Text>Sign in</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
  pageContainer: { flex: 1 },
});

export default GoogleOAuthScreen;
