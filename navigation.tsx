import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  RestaurantScreen,
  GoogleOAuthScreen,
  AppleOAuthScreen,
} from "./screens";
import { RootNavigationList } from "./types";

const Stack = createNativeStackNavigator<RootNavigationList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="GoogleOAuth" component={GoogleOAuthScreen} />
        <Stack.Screen name="AppleOAuth" component={AppleOAuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
