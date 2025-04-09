import { Stack } from 'expo-router';
import { useColorScheme } from '../hooks/useColorScheme';
import Colors from '../constants/Colors';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colorScheme === 'dark' ? Colors.dark.background : Colors.light.background,
        },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen
        name="(stacks)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}