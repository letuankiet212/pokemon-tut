/* eslint-disable no-use-before-define */
import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from 'react-query'
// pages
import Home from './pages/Home'
import PokemonDetail from './pages/PokemonDetail'

//
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/pokemon-detail/:pokemon"
            element={<PokemonDetail />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
