import { faunaAPI, faunaQ } from '../api/fauna'
import { RoomForm } from '../pages/Rooms/FormRoom'

export interface CreateRoom {
  ref: {
    value: {
      id: string
    }
  }
  data: {
    number: number
    type: 'Normal' | 'Luxo' | 'Master'
    status: 'Ativo' | 'Inativo'
    week: {
      value: number
      excessHour: number
      stayOvernight: number
    }
    weekend: {
      value: number
      excessHour: number
      stayOvernight: number
    }
  }
}

export const createRoom = (room: RoomForm) =>
  faunaAPI.query<CreateRoom>(
    faunaQ.Create(faunaQ.Collection('rooms'), {
      data: room
    })
  )

export interface GetAllRooms {
  data: Array<{
    ref: {
      value: {
        id: string
      }
    }
    data: {
      number: number
      type: 'Normal' | 'Luxo' | 'Master'
      status: 'Ativo' | 'Inativo'
      week: {
        value: number
        excessHour: number
        stayOvernight: number
      }
      weekend: {
        value: number
        excessHour: number
        stayOvernight: number
      }
    }
  }>
}

export const getAllRooms = () =>
  faunaAPI.query<GetAllRooms>(
    faunaQ.Map(
      faunaQ.Paginate(faunaQ.Documents(faunaQ.Collection('rooms'))),
      faunaQ.Lambda('roomRef', faunaQ.Get(faunaQ.Var('roomRef')))
    )
  )
