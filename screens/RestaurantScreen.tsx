import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Button } from "react-native";
import { RootNavigationList } from "../types";

type HomeScreenProps = NativeStackScreenProps<RootNavigationList, "Restaurant">;

const RestaurantScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default RestaurantScreen;
