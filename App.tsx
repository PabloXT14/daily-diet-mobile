import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import Toast from 'react-native-toast-message'

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'

import { Loading } from '@/components/loading'
import { Routes } from '@/routes'

import { defaultTheme } from '@/styles/default-theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar style="dark" translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
      <Toast />
    </ThemeProvider>
  )
}
