import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  ActivityIndicator 
} from 'react-native';
import { ButtonProps } from '../../types';
import { useThemeColor } from '../../hooks/useThemeColor';

const Button: React.FC<ButtonProps> = ({ 
  title, 
  onPress, 
  style, 
  textStyle, 
  loading = false,
  disabled = false,
}) => {
  const primaryColor = useThemeColor({}, 'primary');
  const textColor = useThemeColor({}, 'text');
  const textLightColor = useThemeColor({}, 'textLight');

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`
        py-3 px-4 rounded-md items-center justify-center w-full
        ${disabled ? 'bg-gray-400' : 'bg-primary'}
      `}
      style={style}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color="#FFFFFF" size="small" />
      ) : (
        <Text 
          className={`
            text-white font-semibold text-base
          `}
          style={textStyle}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;