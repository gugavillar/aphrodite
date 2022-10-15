import { Route, Routes } from 'react-router-dom'

import { MENU } from '../constants/menu'

export const AppRoutes = () => {
  return (
    <Routes>
      {MENU.map((menuItem) => (
        <Route
          key={menuItem?.label}
          path={menuItem?.link}
          element={menuItem?.element}
        />
      ))}
    </Routes>
  )
}
