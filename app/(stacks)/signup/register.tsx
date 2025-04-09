import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Link, router } from 'expo-router';
import Header from '../../../components/ui/header';
import Input from '../../../components/ui/input';
import Button from '../../../components/ui/button';
import useAuth from '../../../hooks/use-auth';
import { useThemeColor } from '../../../hooks/useThemeColor';

export default function Register() {
  const { register: registerUser, loading } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const textLightColor = useThemeColor({}, 'textLight');

  const validateInputs = () => {
    let isValid = true;
    
    if (!name.trim()) {
      setNameError('Nome é obrigatório');
      isValid = false;
    } else {
      setNameError('');
    }
    
    if (!email.trim()) {
      setEmailError('E-mail é obrigatório');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('E-mail inválido');
      isValid = false;
    } else {
      setEmailError('');
    }
    
    if (!password.trim()) {
      setPasswordError('Senha é obrigatória');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Senha deve ter pelo menos 6 caracteres');
      isValid = false;
    } else {
      setPasswordError('');
    }
    
    return isValid;
  };

  const handleRegister = async () => {
    if (!validateInputs()) return;
    
    const success = await registerUser({ name, email, password });
    if (success) {
      router.replace('/(stacks)/(tabs)/group-list');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
      <StatusBar />
      <Header title="Criar Conta" showBackButton />
      
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 justify-center items-center p-5">
            <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              HeyGrupos
            </Text>
            <Text className="text-base text-gray-500 dark:text-gray-400 mb-8">
              Ajude, colabore, faça networking!
            </Text>
            
            <View className="w-full">
              <Input
                placeholder="Lucas Oliveira"
                value={name}
                onChangeText={(text) => {
                  setName(text);
                  if (nameError) setNameError('');
                }}
                autoCapitalize="words"
                error={nameError}
              />
              
              <Input
                placeholder="teste@teste.com"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  if (emailError) setEmailError('');
                }}
                keyboardType="email-address"
                error={emailError}
              />
              
              <Input
                placeholder="**************"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  if (passwordError) setPasswordError('');
                }}
                secureTextEntry
                error={passwordError}
              />
              
              <Button
                title="Cadastrar"
                onPress={handleRegister}
                loading={loading}
                disabled={loading}
              />
              
              <Link href="/(stacks)/signin/login" asChild>
                <TouchableOpacity 
                  className="mt-4 items-center"
                  disabled={loading}
                >
                  <Text className="text-primary dark:text-primary-dark text-base">
                    Já possuo uma conta
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}