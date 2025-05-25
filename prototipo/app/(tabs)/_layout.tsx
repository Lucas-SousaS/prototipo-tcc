import { Tabs } from "expo-router";
import "@/lib/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import CustomTabBar from "@/components/CustomTabBar";

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon size={28} icon="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Mapa",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon size={28} icon="map" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon size={28} icon="comment" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="receita"
        options={{
          title: "Receita",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon size={28} icon="capsules" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
