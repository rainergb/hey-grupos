import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: {
          backgroundColor:
            colorScheme === "dark"
              ? Colors.dark.background
              : Colors.light.background
        }
      }}
    >
      <Tabs.Screen
        name="group-list"
        options={{
          title: "Grupos",
          tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color} />
        }}
      />
      <Tabs.Screen
        name="search-groups"
        options={{
          title: "Buscar",
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />
        }}
      />
      <Tabs.Screen
        name="chat-room"
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="message-circle" color={color} />
          )
        }}
      />
    </Tabs>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>["name"];
  color: string;
}) {
  return <Feather size={24} style={{ marginBottom: -3 }} {...props} />;
}
