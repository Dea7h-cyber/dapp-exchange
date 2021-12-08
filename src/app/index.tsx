import { Routes, Route, Navigate } from 'react-router-dom'
import { Exchange } from './exchange'

export const App = () => {
  return (
    <Routes>
      <Route path='/exchange' element={<Exchange />} />
      <Route path='/' element={<Navigate to='/exchange' replace />} />
    </Routes>
  )
}
