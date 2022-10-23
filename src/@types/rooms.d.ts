export type TypeRoom = 'Normal' | 'Luxo' | 'Master'

export type StatusRoom = 'Ativo' | 'Inativo'

type RoomValuesForWeekAndWeekends = {
  value: string
  excessHour: string
  stayOvernight: string
}

export interface Room {
  number: number
  type: TypeRoom
  status: StatusRoom
  week: RoomValuesForWeekAndWeekends
  weekend: RoomValuesForWeekAndWeekends
}

export interface RoomDatabase {
  ref: {
    value: {
      id: string
    }
  }
  data: {
    number: number
    type: TypeRoom
    status: StatusRoom
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

export interface AllRooms {
  data: Array<RoomDatabase>
}
