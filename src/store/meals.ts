import { create } from 'zustand'

import type { MealDTO, MealsByDateDTO } from '@/@types/meal'
import dayjs from 'dayjs'

type MealsStore = {
  mealsByDate: MealsByDateDTO
  addMeal: (meal: MealDTO) => void
  getMealById: (mealId: string) => MealDTO | undefined
  // updateMeal: (meal: MealDTO) => void
  removeMeal: (date: string, mealId: string) => void
}

const MEALS_BY_DATE: Record<string, MealDTO[]> = {
  '2023-02-08': [
    {
      id: '1',
      name: 'Refeição 1',
      description: 'Descrição da refeição 1',
      datetime: '2023-02-08T10:00:00',
      isInDiet: true,
    },
    {
      id: '2',
      name: 'Refeição 2',
      description: 'Descrição da refeição 2',
      datetime: '2023-02-08T11:00:00',
      isInDiet: false,
    },
    {
      id: '3',
      name: 'Refeição 3',
      description: 'Descrição da refeição 3',
      datetime: '2023-02-08T12:00:00',
      isInDiet: true,
    },
  ],
  '2023-02-09': [
    {
      id: '4',
      name: 'Refeição 4',
      description: 'Descrição da refeição 4',
      datetime: '2023-02-09T10:00:00',
      isInDiet: true,
    },
    {
      id: '5',
      name: 'Refeição 5',
      description: 'Descrição da refeição 5',
      datetime: '2023-02-09T11:00:00',
      isInDiet: false,
    },
    {
      id: '6',
      name: 'Refeição 6',
      description: 'Descrição da refeição 6',
      datetime: '2023-02-09T12:00:00',
      isInDiet: true,
    },
    {
      id: '7',
      name: 'Refeição 7',
      description: 'Descrição da refeição 7',
      datetime: '2023-02-09T13:00:00',
      isInDiet: false,
    },
    {
      id: '8',
      name: 'Refeição 8',
      description: 'Descrição da refeição 8',
      datetime: '2023-02-09T14:00:00',
      isInDiet: true,
    },
  ],
}

export const useMealsStore = create<MealsStore>((set, get) => ({
  mealsByDate: MEALS_BY_DATE,
  addMeal: meal =>
    set(state => {
      const date = dayjs(meal.datetime).format('YYYY-MM-DD')

      return {
        mealsByDate: {
          ...state.mealsByDate,
          [date]: [...state.mealsByDate[date], meal],
        },
      }
    }),
  getMealById: mealId => {
    const meal = Object.values(get().mealsByDate)
      .flat()
      .find(meal => meal.id === mealId)

    return meal
  },
  removeMeal: (date, mealId) =>
    set(state => {
      const mealsByDateFiltered = state.mealsByDate[date].filter(
        meal => meal.id !== mealId
      )

      return {
        mealsByDate: {
          ...state.mealsByDate,
          [date]: mealsByDateFiltered,
        },
      }
    }),
}))