import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { ConfirmDialogProps } from '../../types';
import { useThemeColor } from '../../hooks/useThemeColor';

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  visible,
  title,
  message,
  onCancel,
  onConfirm,
  cancelText = 'CANCELAR',
  confirmText = 'SIM',
}) => {
  const backgroundColor = useThemeColor({}, 'card');
  const textDarkColor = useThemeColor({}, 'textDark');
  const primaryColor = useThemeColor({}, 'primary');

  if (!visible) return null;

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
    >
      <View className="flex-1 bg-black/50 justify-center items-center">
        <View className="w-4/5 bg-white dark:bg-gray-800 rounded-lg p-5">
          {title && (
            <Text className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              {title}
            </Text>
          )}
          
          <Text className="text-base text-gray-800 dark:text-gray-200 mb-5">
            {message}
          </Text>
          
          <View className="flex-row justify-end">
            <TouchableOpacity
              onPress={onCancel}
              className="px-3 py-2 mr-3"
            >
              <Text className="text-gray-800 dark:text-gray-200 font-semibold text-sm">
                {cancelText}
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={onConfirm}
              className="px-3 py-2"
            >
              <Text className="text-primary font-semibold text-sm">
                {confirmText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmDialog;