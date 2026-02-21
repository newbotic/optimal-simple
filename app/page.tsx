'use client'

import { useHabitStore } from './store/habitStore'

export default function Home() {
  const { streak, focusScore, completedTasks, totalTasks, energyLevel, incrementStreak } = useHabitStore()
  const taskPercentage = Math.round((completedTasks / totalTasks) * 100)

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>Optimal</h1>
      <p style={styles.subtitle}>Your AI-powered life improvement coach</p>
      
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <p style={styles.statLabel}>Momentum</p>
          <p style={styles.statValue}>{streak}</p>
          <p style={styles.statUnit}>days</p>
        </div>
        
        <div style={styles.statCard}>
          <p style={styles.statLabel}>Focus</p>
          <p style={styles.statValue}>{focusScore}%</p>
          <p style={styles.statUnit}>score</p>
        </div>
        
        <div style={styles.statCard}>
          <p style={styles.statLabel}>Tasks</p>
          <p style={styles.statValue}>{taskPercentage}%</p>
          <p style={styles.statUnit}>{completedTasks}/{totalTasks}</p>
        </div>
        
        <div style={styles.statCard}>
          <p style={styles.statLabel}>Energy</p>
          <p style={styles.statValue}>{energyLevel}</p>
          <p style={styles.statUnit}>/10</p>
        </div>
      </div>
      
      <button 
        onClick={incrementStreak}
        style={styles.testButton}
      >
        �� Build Momentum
      </button>
      
      <div style={styles.quoteContainer}>
        <p style={styles.quote}>"The secret of getting ahead is getting started."</p>
        <p style={styles.quoteAuthor}>- Mark Twain</p>
      </div>
    </main>
  )
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    textAlign: 'center' as const,
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: '8px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '40px',
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
  },
  testButton: {
    backgroundColor: '#007AFF',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    marginBottom: '30px',
  },
  quoteContainer: {
    backgroundColor: '#e6f2ff',
    padding: '24px',
    borderRadius: '12px',
  },
  quote: {
    fontSize: '18px',
    fontStyle: 'italic',
    marginBottom: '8px',
  },
  quoteAuthor: {
    fontSize: '14px',
    color: '#666',
  },
} as const
