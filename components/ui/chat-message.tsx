import React from 'react';
import { View, Text } from 'react-native';
import { ChatMessageProps } from '../../types';
import { useThemeColor } from '../../hooks/useThemeColor';

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isCurrentUser }) => {
  const primaryColor = useThemeColor({}, 'primary');
  const lightGreenColor = useThemeColor({}, 'lightGreen');
  const cardColor = useThemeColor({}, 'card');
  const textDarkColor = useThemeColor({}, 'textDark');
  const textLightColor = useThemeColor({}, 'textLight');
  const grayColor = useThemeColor({}, 'gray');

  // System messages have a different style
  if (message.user === 'system') {
    return (
      <View className="self-center bg-gray-200 dark:bg-gray-700 rounded-lg py-1.5 px-3 my-2 max-w-[85%]">
        <Text className="text-gray-500 dark:text-gray-400 text-sm text-center">
          {message.text}
        </Text>
      </View>
    );
  }

  return (
    <View 
      className={`
        max-w-[80%] rounded-lg py-2 px-3 my-1 mx-4
        ${isCurrentUser 
          ? 'self-end bg-green-100 dark:bg-green-900' 
          : 'self-start bg-white dark:bg-gray-800'}
      `}
    >
      {!isCurrentUser && (
        <Text className="text-primary dark:text-blue-400 font-semibold text-xs mb-0.5">
          {message.user}
        </Text>
      )}
      
      <Text className="text-gray-800 dark:text-gray-200 text-sm">
        {message.text}
      </Text>
    </View>
  );
};

export default ChatMessage;