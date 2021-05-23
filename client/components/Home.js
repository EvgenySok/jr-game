import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createNewField } from '../redux/reducers/actions'

import Navbar from './navbar'
import OneSquare from './oneSquare'

const Home = () => {
  const dispatch = useDispatch()
  const { field } = useSelector(s => s.reducer)

  useEffect(() => {
    dispatch(createNewField())
  }, [])
  console.log('field home:', field)


  return (
    <>
      <Navbar />
      <div className="container">
        <div className="square-container">
          {field.map((square, id) => <OneSquare key={id} style={square.style} id={id} />)}
        </div>
      </div>
    </>
  )
}

export default Home
