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
import * as AppleAuthentication from "expo-apple-authentication";
import { RootNavigationList } from "../types";

type AppleOAuthScreenProps = NativeStackScreenProps<
  RootNavigationList,
  "AppleOAuth"
>;

const AppleOAuthScreen = ({ navigation }: AppleOAuthScreenProps) => {
  const [appleAuthAvailable, setAppleAuthAvailable] = useState(false);

  useEffect(() => {
    const checkAvailable = async () => {
      const isAvailable = await AppleAuthentication.isAvailableAsync();
      setAppleAuthAvailable(isAvailable);
    };

    checkAvailable();
  }, []);

  const login = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        ],
      });

      console.log(credential);
    } catch (e) {
      console.log("apple sign in error:");
      console.log(e);
    }
  };

  return (
    <ScrollView>
      <Text>Sign In with Apple</Text>
      {appleAuthAvailable ? (
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={5}
          style={{ height: 40, width: 120 }}
          onPress={login}
        />
      ) : (
        <Text>Apple OAuth is Available: {appleAuthAvailable}</Text>
      )}
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

export default AppleOAuthScreen;
