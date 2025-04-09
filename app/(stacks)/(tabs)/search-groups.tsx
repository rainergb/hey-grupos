import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Header from "../../../components/ui/header";
import GroupItem from "../../../components/ui/group-item";
import { useThemeColor } from "../../../hooks/use-theme-color";
import { GROUPS } from "../../../mocks/mock-data";
import { Group } from "../../../types";

export default function SearchGroups() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Group[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const backgroundColor = useThemeColor({}, "background");
  const inputBackgroundColor = useThemeColor({}, "inputBackground");
  const primaryColor = useThemeColor({}, "primary");
  const textLightColor = useThemeColor({}, "textLight");

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setHasSearched(false);
      return;
    }

    const results = GROUPS.filter((group) =>
      group.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(results);
    setHasSearched(true);
  };

  const handleGroupPress = (group: Group) => {
    router.push({
      pathname: "/(stacks)/(tabs)/chat-room",
      params: { groupId: group.id, groupName: group.name }
    });
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <Header title="Procurando algum grupo?" showBackButton />

      <View className="flex-row p-4 bg-white dark:bg-gray-800">
        <TextInput
          className="flex-1 h-12 bg-gray-100 dark:bg-gray-700 rounded px-4 text-gray-900 dark:text-gray-100"
          placeholder="php"
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoFocus
          placeholderTextColor={textLightColor}
        />

        <TouchableOpacity
          className="w-12 h-12 bg-primary rounded ml-2 justify-center items-center"
          onPress={handleSearch}
        >
          <Ionicons name="search" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {hasSearched && searchResults.length === 0 ? (
        <View className="flex-1 justify-center items-center p-5">
          <Text className="text-gray-500 dark:text-gray-400 text-base text-center">
            Nenhum grupo encontrado para "{searchQuery}"
          </Text>
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GroupItem group={item} onPress={() => handleGroupPress(item)} />
          )}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      )}
    </SafeAreaView>
  );
}