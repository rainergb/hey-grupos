import React from 'react';
import { useColorScheme } from "./hooks/use-color-scheme";

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </SafeAreaProvider>
  );
}