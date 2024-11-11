import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { PencilSimpleLine } from 'phosphor-react-native'

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'

import { defaultTheme } from '@/styles/default-theme'
import { Loading } from '@/components/loading'
import { Button } from '@/components/button'

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

          <Button>
            <PencilSimpleLine size={18} color={defaultTheme.colors.white} />
            <Button.Title>Button</Button.Title>
          </Button>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    marginBottom: 20,
  },
})
