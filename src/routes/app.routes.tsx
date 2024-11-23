import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@/screens/home'
import { Statistics } from '@/screens/statistics'
import { NewMeal } from '@/screens/new-meal'
import { Feedback } from '@/screens/feedback'
import { MealDetails } from '@/screens/meal-details'
import { EditMeal } from '@/screens/edit-meal'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="new-meal" component={NewMeal} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="meal-details" component={MealDetails} />
      <Screen name="edit-meal" component={EditMeal} />
    </Navigator>
  )
}
