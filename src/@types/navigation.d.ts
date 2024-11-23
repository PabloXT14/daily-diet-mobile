export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: undefined
      'new-meal': undefined
      feedback: {
        isInDiet: boolean
      }
      'meal-details': {
        mealId: string
      }
      'edit-meal': {
        mealId: string
      }
    }
  }
}
