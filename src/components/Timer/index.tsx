import { useEffect, useState } from 'react'

import { Text } from '@chakra-ui/react'
import { intervalToDuration } from 'date-fns'

interface TimerProps {
  entryTime: number
}

export const Timer = ({ entryTime }: TimerProps) => {
  const [timer, setTimer] = useState('')

  useEffect(() => {
    if (!entryTime) return

    const timer = setInterval(() => {
      const interval = intervalToDuration({
        start: new Date(entryTime),
        end: new Date()
      })

      const hours = interval?.hours?.toString()?.padStart(2, '0')
      const minutes = interval?.minutes?.toString()?.padStart(2, '0')
      const seconds = interval?.seconds?.toString()?.padStart(2, '0')

      setTimer(`${hours}:${minutes}:${seconds}`)
    }, 1000)

    return () => clearInterval(timer)
  }, [entryTime])

  return <Text fontSize="2xl">{timer}</Text>
}
