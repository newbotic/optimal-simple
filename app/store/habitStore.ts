import { create } from 'zustand'

interface HabitStore {
  // Existing metrics
  momentum: number
  focusScore: number
  completedTasks: number
  totalTasks: number
  energyLevel: number
  
  // New metrics
  sleepHours: number
  sleepGoal: number
  workoutsCompleted: number
  workoutsGoal: number
  waterGlasses: number
  waterGoal: number
  
  // Existing actions
  incrementMomentum: () => void
  setFocusScore: (score: number) => void
  completeTask: () => void
  setEnergyLevel: (level: number) => void
  
  // New actions
  setSleepHours: (hours: number) => void
  incrementWorkout: () => void
  incrementWater: () => void
  resetDaily: () => void
}

export const useHabitStore = create<HabitStore>((set) => ({
  // Existing state
  momentum: 5,
  focusScore: 78,
  completedTasks: 3,
  totalTasks: 5,
  energyLevel: 8,
  
  // New state
  sleepHours: 7.5,
  sleepGoal: 8,
  workoutsCompleted: 2,
  workoutsGoal: 4,
  waterGlasses: 4,
  waterGoal: 8,
  
  // Existing actions
  incrementMomentum: () => set((state) => ({ momentum: state.momentum + 1 })),
  setFocusScore: (score) => set({ focusScore: score }),
  completeTask: () => set((state) => ({ 
    completedTasks: Math.min(state.completedTasks + 1, state.totalTasks) 
  })),
  setEnergyLevel: (level) => set({ energyLevel: level }),
  
  // New actions
  setSleepHours: (hours) => set({ sleepHours: hours }),
  incrementWorkout: () => set((state) => ({ 
    workoutsCompleted: Math.min(state.workoutsCompleted + 1, state.workoutsGoal) 
  })),
  incrementWater: () => set((state) => ({ 
    waterGlasses: Math.min(state.waterGlasses + 1, state.waterGoal) 
  })),
  resetDaily: () => set({
    completedTasks: 0,
    workoutsCompleted: 0,
    waterGlasses: 0,
    energyLevel: 5,
  })
}))
