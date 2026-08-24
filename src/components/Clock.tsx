'use client'

import { useEffect, useState } from 'react'

export function Clock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      // Force the time to Asia/Kolkata regardless of user timezone
      const now = new Date(
        new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
      )
      const hours = now.getHours() % 12 || 12
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const meridiem = now.getHours() >= 12 ? 'PM' : 'AM'
      setTime(`${hours}:${minutes} ${meridiem}`)
    }

    updateTime()
    const timeInterval = setInterval(updateTime, 30 * 1000)

    return () => clearInterval(timeInterval)
  }, [])

  return <span>{time}</span>
}
