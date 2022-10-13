import { Client, query } from 'faunadb'

export const faunaAPI = new Client({
  secret: import.meta.env.VITE_FAUNA_KEY,
  endpoint: import.meta.env.VITE_FAUNA_ENDPOINT
})

export const faunaQ = query
