import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { HeaderProps } from '../../types';
import { useThemeColor } from '../../hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';

const Header: React.FC<HeaderProps> = ({ 
  title, 
  showBackButton = false, 
  showSearch = false, 
  onSearchPress 
}) => {
  const router = useRouter();
  const backgroundColor = useThemeColor({}, 'primary');
  const textColor = useThemeColor({}, 'text');

  return (
    <View className="h-14 bg-primary flex-row items-center px-4 shadow-md">
      {showBackButton && (
        <TouchableOpacity
          onPress={() => router.back()}
          className="mr-2 p-2"
        >
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      )}
      
      <Text className="text-white font-semibold text-lg flex-1">
        {title}
      </Text>
      
      {showSearch && (
        <TouchableOpacity
          onPress={onSearchPress}
          className="p-2"
        >
          <Ionicons name="search" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;