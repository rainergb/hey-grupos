import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FloatingButtonProps } from '../../types';
import { useThemeColor } from '../../hooks/useThemeColor';

const FloatingButton: React.FC<FloatingButtonProps> = ({ 
  onPress, 
  icon 
}) => {
  const primaryColor = useThemeColor({}, 'primary');

  return (
    <TouchableOpacity
      onPress={onPress}
      className="absolute bottom-5 right-5 w-14 h-14 rounded-full bg-primary justify-center items-center shadow-lg"
      activeOpacity={0.8}
    >
      {icon || <Ionicons name="add" size={24} color="#FFFFFF" />}
    </TouchableOpacity>
  );
};

export default FloatingButton;