import { useCallback, useEffect, useState } from 'react'

import { Card } from '../../components/Card'
import { Header } from '../../components/Card/Header'
import { Middle } from '../../components/Card/Middle'
import { LoadingContainer } from '../../components/Container/LoadingContainer'
import { PageContainer } from '../../components/Container/PageContainer'
import { useToastCustom } from '../../hooks/useToastCustom'
import { GetAllRooms, getAllRooms } from '../../services/rooms'

export const Manager = () => {
  const [rooms, setRooms] = useState<GetAllRooms>()
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
            <Middle
              status={room?.data?.status}
              roomId={room?.ref?.value?.id}
            />
          </Card>
        ))}
      </PageContainer>
    </LoadingContainer>
  )
}
