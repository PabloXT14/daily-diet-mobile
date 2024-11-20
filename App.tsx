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
import { NewMeal } from '@/screens/new-meal'
import { Feedback } from '@/screens/feedback'

import { defaultTheme } from '@/styles/default-theme'
import { MealDetails } from '@/screens/meal-details'

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar style="dark" translucent />
      {fontsLoaded ? <MealDetails /> : <Loading />}
    </ThemeProvider>
  )
}
