import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'

import { Loading } from '@/components/loading'
import { Home } from '@/screens/home'
import { Statistics } from '@/screens/statistics'

import { defaultTheme } from '@/styles/default-theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar style="dark" translucent />
      {fontsLoaded ? <Statistics /> : <Loading />}
    </ThemeProvider>
  )
}
