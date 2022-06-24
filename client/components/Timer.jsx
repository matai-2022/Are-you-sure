import { useEffect, useState } from 'react'

export default function Timer({ setTimeOut, turnsCount }) {
  const [timer, setTimer] = useState(10)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1)
    }, 1000)
    if (timer === 0) {
      setTimeOut(true)
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timer, setTimeOut])

  useEffect(() => {
    setTimer(10)
  }, [turnsCount])
  return timer
}
