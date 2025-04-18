'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TrainingMetrics {
  epoch: number
  accuracy: number
  loss: number
}

export default function AITrainer() {
  const [isOpen, setIsOpen] = useState(false)
  const [epochs, setEpochs] = useState(10)
  const [learningRate, setLearningRate] = useState(0.01)
  const [batchSize, setBatchSize] = useState(32)
  const [isTraining, setIsTraining] = useState(false)
  const [metrics, setMetrics] = useState<TrainingMetrics[]>([])
  const [showOverfitting, setShowOverfitting] = useState(false)

  const startTraining = () => {
    setIsTraining(true)
    setMetrics([])
    setShowOverfitting(epochs > 50) // Show overfitting if epochs > 50
  }

  useEffect(() => {
    if (isTraining && metrics.length < epochs) {
      const timer = setTimeout(() => {
        const epoch = metrics.length + 1
        const baseAccuracy = Math.min(0.95, 0.1 + (epoch / epochs) * 0.85)
        const overfittingFactor = showOverfitting ? Math.sin(epoch / 5) * 0.1 : 0
        const accuracy = Math.min(1, baseAccuracy + overfittingFactor)
        const loss = 1 - accuracy

        setMetrics([...metrics, { epoch, accuracy, loss }])
      }, 500)

      return () => clearTimeout(timer)
    } else if (metrics.length === epochs) {
      setIsTraining(false)
    }
  }, [isTraining, metrics, epochs, showOverfitting])

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-20 z-50 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
      >
        🧪 Train My AI
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="fixed inset-0 bg-black/30"
            onClick={() => setIsOpen(false)}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-card-bg rounded-xl shadow-xl p-6 w-full max-w-2xl mx-4"
          >
            <h2 className="text-2xl font-bold mb-4">🧪 Train My AI</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Epochs: {epochs}</label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={epochs}
                  onChange={(e) => setEpochs(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Learning Rate: {learningRate}</label>
                <input
                  type="range"
                  min="0.001"
                  max="0.1"
                  step="0.001"
                  value={learningRate}
                  onChange={(e) => setLearningRate(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Batch Size: {batchSize}</label>
                <input
                  type="range"
                  min="8"
                  max="128"
                  step="8"
                  value={batchSize}
                  onChange={(e) => setBatchSize(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <button
                onClick={startTraining}
                disabled={isTraining}
                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 disabled:opacity-50"
              >
                {isTraining ? 'Training...' : 'Train Model'}
              </button>

              <div className="h-40 relative bg-card-bg border border-border rounded-lg p-4">
                <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
                <div className="absolute left-0 top-0 w-px h-full bg-border" />
                <AnimatePresence>
                  {metrics.map((metric) => (
                    <motion.div
                      key={metric.epoch}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute bottom-0 w-2 bg-primary"
                      style={{
                        height: `${metric.accuracy * 100}%`,
                        left: `${(metric.epoch / epochs) * 100}%`,
                      }}
                    />
                  ))}
                </AnimatePresence>
              </div>

              {showOverfitting && (
                <div className="text-sm text-red-500 mt-2">
                  ⚠️ Overfitting detected! Try reducing epochs.
                </div>
              )}

              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-text hover:text-primary"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
} 