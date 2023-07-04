import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootNavigationList } from "../types";

type HomeScreenProps = NativeStackScreenProps<RootNavigationList, "Home">;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <>
      <StatusBar style="dark" networkActivityIndicatorVisible={false} />

      {/* search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2 ">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput
            placeholder="SafeAreaHeader"
            className="ml-2 flex-1"
            keyboardType="default"
          />
        </View>
        <View className="p-3 rounded-full bg-red-300">
          <Icon.Sliders
            height={20}
            width={20}
            strokeWidth="2.5"
            stroke="white"
          />
        </View>
      </View>
      <View>
        <Button
          title="GoToSomePage"
          onPress={() => navigation.navigate("Restaurant")}
        />
        <Button
          title="GoToGoogleOAuthDemo"
          onPress={() => navigation.navigate("GoogleOAuth")}
        />
        <Button
          title="GoToAppleOAuthDemo"
          onPress={() => navigation.navigate("AppleOAuth")}
        />
      </View>
    </>
  );
};

export default HomeScreen;
