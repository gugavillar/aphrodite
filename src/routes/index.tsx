import { Text } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Text>Home</Text>}
      />
      <Route
        path="/teste"
        element={<Text>teste</Text>}
      />
    </Routes>
  )
}
