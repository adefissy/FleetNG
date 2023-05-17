import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useTailwind } from "tailwind-rn/dist";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { TabsParamList } from "../navigation/TabNavigator";
import { RootStackParamsList } from "../navigation/RouteNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Input } from "@rneui/themed";

export type CustomerNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabsParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamsList>
>;

const CustomerScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<CustomerNavigationProp>();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [input, setInput] = useState<string>("");
  return (
    <ScrollView style={{ backgroundColor: "#59c1cc" }}>
      <Image
        source={{ uri: "https://links.papareact.com/3jc" }}
        style={tw("w-full h-64")}
        placeholderContent={<ActivityIndicator />}
      />
      <Input
        placeholder="Search by customer"
        value={input}
        onChangeText={(text) => setInput(text)}
        containerStyle={tw("bg-white pt-5 pb-0 px-10")} //or as a short hand {setInput}
      />
    </ScrollView>
  );
};

export default CustomerScreen;
