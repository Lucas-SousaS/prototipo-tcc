import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const rawLabel = options.tabBarLabel ?? options.title ?? route.name;
        const label = typeof rawLabel === "string" ? rawLabel : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const icon = options.tabBarIcon?.({
          focused: isFocused,
          color: isFocused ? "#00C6FF" : "#A6A6A6",
          size: 24,
        });

        return (
          <TouchableOpacity
            key={route.name}
            onPress={onPress}
            style={[styles.tabButton, isFocused && styles.activeTab]}
          >
            {icon}
            <Text
              style={{ color: isFocused ? "#00C6FF" : "#A6A6A6", fontSize: 12 }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#EEEEEE",
    paddingVertical: 10,
    justifyContent:"space-evenly",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
  },
  tabButton: {
    alignItems: "center",
    
    gap: 2,
  },
  activeTab: {},
});
