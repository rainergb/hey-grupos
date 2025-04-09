import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { GroupItemProps } from '../../types';
import { useThemeColor } from '../../hooks/useThemeColor';

const GroupItem: React.FC<GroupItemProps> = ({ group, onPress, onLongPress }) => {
  const backgroundColor = useThemeColor({}, 'card');
  const textDarkColor = useThemeColor({}, 'textDark');
  const textLightColor = useThemeColor({}, 'textLight');
  const borderColor = useThemeColor({}, 'border');

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      className="py-4 px-4 border-b bg-white dark:bg-gray-800"
      style={{ borderBottomColor: borderColor }}
      activeOpacity={0.7}
    >
      <Text
        className="text-base font-medium text-gray-900 dark:text-white mb-1"
      >
        {group.name}
      </Text>
      
      <Text
        className="text-sm text-gray-500 dark:text-gray-400"
        numberOfLines={1}
      >
        {group.description}
      </Text>
    </TouchableOpacity>
  );
};

export default GroupItem;