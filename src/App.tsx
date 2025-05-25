import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Game } from './game/game'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Game />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}