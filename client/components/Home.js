import React from 'react'
import { useSelector } from 'react-redux'

import Navbar from './navbar'
import OneSquare from './oneSquare'

const Home = () => {
  const { field, currentRound } = useSelector(s => s.reducer)

  return (
    <>
      <Navbar />
      <div className="container">
        {currentRound === null
          ? <h2>Start the game now !!!</h2>
          : <div className="square-container">
            {field.map((square, id) => <OneSquare key={id} square={square} id={id} />)}
          </div>
        }
      </div>
    </>
  )
}

export default Home
