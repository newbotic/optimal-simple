'use client'

import { useHabitStore } from './store/habitStore'
import { useState } from 'react'

export default function Home() {
  const { 
    momentum, focusScore, completedTasks, totalTasks, energyLevel,
    sleepHours, sleepGoal, workoutsCompleted, workoutsGoal, waterGlasses, waterGoal,
    incrementMomentum, setFocusScore, completeTask, setEnergyLevel,
    setSleepHours, incrementWorkout, incrementWater, resetDaily
  } = useHabitStore()
  
  const [showSleepInput, setShowSleepInput] = useState(false)
  const [sleepInput, setSleepInput] = useState(sleepHours.toString())
  
  const taskPercentage = Math.round((completedTasks / totalTasks) * 100)
  const workoutPercentage = Math.round((workoutsCompleted / workoutsGoal) * 100)
  const waterPercentage = Math.round((waterGlasses / waterGoal) * 100)
  const sleepPercentage = Math.round((sleepHours / sleepGoal) * 100)

  const handleSleepSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const hours = parseFloat(sleepInput)
    if (!isNaN(hours) && hours >= 0 && hours <= 24) {
      setSleepHours(hours)
      setShowSleepInput(false)
    }
  }

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>Optimal</h1>
      <p style={styles.subtitle}>Your AI-powered life improvement coach</p>
      
      <h2 style={styles.sectionTitle}>Daily Progress</h2>
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <p style={styles.statLabel}>Momentum</p>
          <p style={styles.statValue}>{momentum}</p>
          <p style={styles.statUnit}>days</p>
        </div>
        
        <div style={styles.statCard}>
          <p style={styles.statLabel}>Focus</p>
          <p style={styles.statValue}>{focusScore}%</p>
          <p style={styles.statUnit}>score</p>
        </div>
        
        <div style={styles.statCard}>
          <p style={styles.statLabel}>Energy</p>
          <p style={styles.statValue}>{energyLevel}</p>
          <p style={styles.statUnit}>/10</p>
        </div>
        
        <div style={styles.statCard}>
          <p style={styles.statLabel}>Tasks</p>
          <p style={styles.statValue}>{taskPercentage}%</p>
          <p style={styles.statUnit}>{completedTasks}/{totalTasks}</p>
        </div>
      </div>

      <h2 style={styles.sectionTitle}>Health & Wellness</h2>
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <p style={styles.statLabel}>Sleep</p>
          <p style={styles.statValue}>{sleepPercentage}%</p>
          <p style={styles.statUnit}>{sleepHours}/{sleepGoal}h</p>
          {!showSleepInput ? (
            <button 
              onClick={() => setShowSleepInput(true)}
              style={styles.smallButton}
            >
              Log Sleep
            </button>
          ) : (
            <form onSubmit={handleSleepSubmit} style={styles.inputForm}>
              <input
                type="number"
                step="0.5"
                min="0"
                max="24"
                value={sleepInput}
                onChange={(e) => setSleepInput(e.target.value)}
                style={styles.input}
                autoFocus
              />
              <button type="submit" style={styles.smallButton}>Save</button>
            </form>
          )}
        </div>
        
        <div style={styles.statCard}>
          <p style={styles.statLabel}>Workouts</p>
          <p style={styles.statValue}>{workoutPercentage}%</p>
          <p style={styles.statUnit}>{workoutsCompleted}/{workoutsGoal}</p>
          <button 
            onClick={incrementWorkout}
            style={styles.smallButton}
          >
            + Workout
          </button>
        </div>
        
        <div style={styles.statCard}>
          <p style={styles.statLabel}>Water</p>
          <p style={styles.statValue}>{waterPercentage}%</p>
          <p style={styles.statUnit}>{waterGlasses}/{waterGoal} glasses</p>
          <button 
            onClick={incrementWater}
            style={styles.smallButton}
          >
            + Water
          </button>
        </div>
        
        <div style={styles.statCard}>
          <p style={styles.statLabel}>Quick Actions</p>
          <div style={styles.buttonGroup}>
            <button 
              onClick={completeTask}
              style={styles.smallButton}
            >
              + Task
            </button>
            <button 
              onClick={() => setEnergyLevel(Math.min(energyLevel + 1, 10))}
              style={styles.smallButton}
            >
              + Energy
            </button>
          </div>
        </div>
      </div>

      <div style={styles.actionButtons}>
        <button 
          onClick={incrementMomentum}
          style={styles.primaryButton}
        >
          Build Momentum
        </button>
        
        <button 
          onClick={resetDaily}
          style={styles.secondaryButton}
        >
          New Day
        </button>
      </div>
      
      <div style={styles.quoteContainer}>
        <p style={styles.quote}>"The secret of getting ahead is getting started."</p>
        <p style={styles.quoteAuthor}>- Mark Twain</p>
      </div>
    </main>
  )
}

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: '8px',
    textAlign: 'center' as const,
  },
  subtitle: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '40px',
    textAlign: 'center' as const,
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '20px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    marginBottom: '30px',
  },
  statCard: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center' as const,
  },
  statLabel: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '4px',
  },
  statValue: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333',
    margin: '4px 0',
  },
  statUnit: {
    fontSize: '12px',
    color: '#999',
    marginBottom: '12px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '8px',
    justifyContent: 'center' as const,
  },
  smallButton: {
    backgroundColor: '#007AFF',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '12px',
    cursor: 'pointer',
    marginTop: '8px',
  },
  inputForm: {
    display: 'flex',
    gap: '8px',
    justifyContent: 'center' as const,
    marginTop: '8px',
  },
  input: {
    width: '60px',
    padding: '4px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    textAlign: 'center' as const,
  },
  actionButtons: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center' as const,
    marginBottom: '30px',
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  secondaryButton: {
    backgroundColor: '#f5f5f5',
    color: '#333',
    border: '1px solid #ddd',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  quoteContainer: {
    backgroundColor: '#e6f2ff',
    padding: '24px',
    borderRadius: '12px',
    marginTop: '20px',
  },
  quote: {
    fontSize: '18px',
    fontStyle: 'italic',
    marginBottom: '8px',
    textAlign: 'center' as const,
  },
  quoteAuthor: {
    fontSize: '14px',
    color: '#666',
    textAlign: 'center' as const,
  },
} as const
