import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Avatar } from "react-native-paper";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {
            backgroundColor: "rgba(255, 255, 255, 1)",
            marginHorizontal: 15,
            hieght: 64,
            borderRadius: 32,
          },
        }),
        tabBarInactiveTintColor: "rgba(35, 35, 35, 1)",
        tabBarActiveTintColor: "rgba(255, 159, 247, 1)",
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Avatar.Icon
              style={{ backgroundColor: focused ? color : "white" }}
              size={40}
              color={color}
              icon={({ size, color }) => (
                <Feather
                  name="home"
                  size={24}
                  color={focused ? "white" : "rgba(35, 35, 35, 1)"}
                />
              )}
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused, color }) => (
            <Avatar.Icon
              style={{ backgroundColor: focused ? color : "white" }}
              size={40}
              color={color}
              icon={({ size, color }) => (
                <Entypo
                  name="compass"
                  size={24}
                  color={focused ? "white" : "rgba(35, 35, 35, 1)"}
                />
              )}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused, color }) => (
            <Avatar.Icon
              style={{ backgroundColor: focused ? color : "white" }}
              size={40}
              color={color}
              icon={({ size, color }) => (
                <Ionicons
                  name="chatbubble-outline"
                  size={24}
                  color={focused ? "white" : "rgba(35, 35, 35, 1)"}
                />
              )}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused, color }) => (
            <Avatar.Icon
              style={{ backgroundColor: focused ? color : "white" }}
              size={40}
              color={color}
              icon={({ size, color }) => (
                <SimpleLineIcons
                  name="bell"
                  size={24}
                  color={focused ? "white" : "rgba(35, 35, 35, 1)"}
                />
              )}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused, color }) => (
            <Avatar.Icon
              style={{ backgroundColor: focused ? color : "white" }}
              size={40}
              color={color}
              icon={({ size, color }) => (
                <FontAwesome5
                  name="user"
                  size={24}
                  color={focused ? "white" : "rgba(35, 35, 35, 1)"}
                />
              )}
            />
          ),
        }}
      />
    </Tabs>
    
  );
}
