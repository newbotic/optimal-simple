import { create } from 'zustand'

interface HabitStore {
  streak: number
  focusScore: number
  completedTasks: number
  totalTasks: number
  energyLevel: number
  incrementStreak: () => void
  setFocusScore: (score: number) => void
  completeTask: () => void
  setEnergyLevel: (level: number) => void
}

export const useHabitStore = create<HabitStore>((set) => ({
  streak: 5,
  focusScore: 78,
  completedTasks: 3,
  totalTasks: 5,
  energyLevel: 8,
  
  incrementStreak: () => set((state) => ({ streak: state.streak + 1 })),
  setFocusScore: (score) => set({ focusScore: score }),
  completeTask: () => set((state) => ({ 
    completedTasks: Math.min(state.completedTasks + 1, state.totalTasks) 
  })),
  setEnergyLevel: (level) => set({ energyLevel: level })
}))
