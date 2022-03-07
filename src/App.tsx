/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

interface Pokemons {
  name: string
  url: string
}

interface Pokemon {
  id: number
  name: string
  sprites: {
    front_default: string
  }
}

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemons[]>([])

  const getPokemons = async () => {
    await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1').then(res => {
      if (res.status === 200) {
        const { results } = res.data
        results.forEach(async (pokemon: Pokemons[]) => {
          const data = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`
          )
          console.log(data)
        })
      }
    })
  }

  useEffect(() => {
    getPokemons()
  }, [])
  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header">Pokemon</header>
        <section className="collection-container">
          {pokemons.map((pokemon, index) => {
            return (
              <div key={index}>
                <p>Name:{pokemon.name}</p>
                <img src={pokemon.url} alt="" />
              </div>
            )
          })}
        </section>
      </div>
    </div>
  )
}
export default App
// type Student = { name: string; age: number }

// const student: Student = {
//   name: 'Daniel',
//   age: 21,
// }
// const student: {
//   name: string
//   age: number
// } = {
//   name: 'Daniel',
//   age: 21,
// }
// Function
// const printSomething: () => string = () => {
//   const name = 'Tuaans Kietj'
//   return name
// }
// function App() {
//   return <div className="App">hello 12</div>
// }
