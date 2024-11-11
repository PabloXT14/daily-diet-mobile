import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'

import { defaultTheme } from '@/styles/default-theme'
import { Loading } from '@/components/loading'
import { Input } from '@/components/input'

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar style="dark" translucent />
      {fontsLoaded ? (
        <View style={styles.container}>
          <Text style={styles.title}>
            Open up App.tsx to start working on your app!
          </Text>

          <Input label="Label" />
        </View>
      ) : (
        <Loading />
      )}
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 16,
    marginBottom: 20,
  },
})
