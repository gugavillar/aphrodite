import { AllRooms, Room, RoomDatabase } from '../@types/rooms'
import { faunaAPI, faunaQ } from '../api/fauna'

export const createRoom = (room: Room) =>
  faunaAPI.query<RoomDatabase>(
    faunaQ.Create(faunaQ.Collection('rooms'), {
      data: room
    })
  )

export const getAllRooms = () =>
  faunaAPI.query<AllRooms>(
    faunaQ.Map(
      faunaQ.Paginate(faunaQ.Documents(faunaQ.Collection('rooms'))),
      faunaQ.Lambda('roomRef', faunaQ.Get(faunaQ.Var('roomRef')))
    )
  )
