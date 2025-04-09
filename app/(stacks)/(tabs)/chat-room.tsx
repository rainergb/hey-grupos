import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import ChatMessage from '../../../components/ui/chat-message';
import MessageInput from '../../../components/ui/message-input';
import { MESSAGES } from '../../../mocks/mock-data';
import useAuth from '../../../hooks/use-auth';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { useThemeColor } from '../../../hooks/use-theme-color';
import { Message } from '../../../types';

export default function ChatRoom() {
  const { groupId, groupName } = useLocalSearchParams<{ groupId: string, groupName: string }>();
  const [messages, setMessages] = useState<Message[]>(MESSAGES);
  const { user } = useAuth();
  const currentUser = user?.name || 'Lucas';
  const chatBackgroundColor = useThemeColor({}, 'chatBackground');

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: String(Date.now()),
      text,
      user: currentUser,
      timestamp: new Date().toISOString(),
    };
    
    setMessages([...messages, newMessage]);
  return (
    <SafeAreaView>
      <StatusBar />
      <Header title={groupName || 'Chat'} showBackButton />
      
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ChatMessage
              message={item}
              isCurrentUser={item.user === currentUser}
            />
          )}
          contentContainerStyle={{ paddingVertical: 16 }}
        />
      </KeyboardAvoidingView>
    
  </SafeAreaView>
  );
  }
  };