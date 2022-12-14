import { useCallback, useEffect, useState } from 'react'

import { AllRooms } from '../../@types/rooms'
import { Card } from '../../components/Card'
import { LoadingContainer } from '../../components/Container/LoadingContainer'
import { PageContainer } from '../../components/Container/PageContainer'
import { ExpenseContextProvider } from '../../context/Expense'
import { useToastCustom } from '../../hooks/useToastCustom'
import { getAllRooms } from '../../services/rooms'
import { Header } from './Header'
import { Middle } from './Middle'

export const Manager = () => {
  const [rooms, setRooms] = useState<AllRooms>()
  const [isLoadingRooms, setIsLoadingRooms] = useState(true)

  const toast = useToastCustom()

  const loadRooms = useCallback(async () => {
    setIsLoadingRooms(true)
    try {
      const response = await getAllRooms()
      setRooms(response)
    } catch (error) {
      toast({
        title: 'Falha ao recuperar dados',
        description: 'Erro ao pegar os apartamentos',
        status: 'error'
      })
    } finally {
      setIsLoadingRooms(false)
    }
  }, [toast])

  useEffect(() => {
    loadRooms()
  }, [loadRooms])

  return (
    <ExpenseContextProvider>
      <LoadingContainer
        isLoadingData={isLoadingRooms}
        height="calc(100vh - 48px)"
      >
        <PageContainer
          direction="row"
          justify="space-between"
        >
          {rooms?.data?.map((room) => (
            <Card
              key={room?.ref?.value?.id}
              height="17rem"
            >
              <Header
                number={room?.data?.number}
                type={room?.data?.type}
              />
              <Middle room={room} />
            </Card>
          ))}
        </PageContainer>
      </LoadingContainer>
    </ExpenseContextProvider>
  )
}
