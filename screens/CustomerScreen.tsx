import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useTailwind } from "tailwind-rn/dist";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { TabsParamList } from "../navigation/TabNavigator";
import { RootStackParamsList } from "../navigation/RouteNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

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
  return (
    <ScrollView
      style={{
        padding: 10,
        marginTop: 25,
      }}
    >
      <Text style={tw("text-red-500")}>CustomerScreen.........</Text>
    </ScrollView>
  );
};

export default CustomerScreen;
