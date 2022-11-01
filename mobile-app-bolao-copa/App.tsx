import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NativeBaseProvider, Center } from "native-base";
import { THEME } from './src/styles/theme'

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Center flex={1} bgColor={"gray.900"}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
