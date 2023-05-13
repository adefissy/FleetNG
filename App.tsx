import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import CustomerScreen from "./screens/CustomerScreen";
import { NavigationContainer } from "@react-navigation/native";
import RouteNavigator from "./navigation/RouteNavigator";

export default function App() {
  return (
    //@ts-ignore - TailWindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RouteNavigator />
      </NavigationContainer>
    </TailwindProvider>
  );
}
