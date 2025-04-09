import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { InputProps } from '../../types';
import { useThemeColor } from '../../hooks/useThemeColor';

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  autoCapitalize = 'none',
  keyboardType = 'default',
  style,
  label,
  error,
}) => {
  const inputBackground = useThemeColor({}, 'inputBackground');
  const textDarkColor = useThemeColor({}, 'textDark');
  const textLightColor = useThemeColor({}, 'textLight');
  const redColor = useThemeColor({}, 'red');

  return (
    <View className="mb-4 w-full" style={style}>
      {label && (
        <Text className="text-sm text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </Text>
      )}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        className={`
          bg-gray-100 dark:bg-gray-800
          rounded-md p-3 text-base w-full
          text-gray-900 dark:text-gray-100
          ${error ? 'border border-red-500' : ''}
        `}
        placeholderTextColor={textLightColor}
      />
      {error && (
        <Text className="text-red-500 text-xs mt-1">
          {error}
        </Text>
      )}
    </View>
  );
};

export default Input;