import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateClickedSquare } from '../redux/reducers/actions'
import { TRANSITION_DELAY } from '../redux/reducers/types'

const OneSquare = ({ square, id }) => {
  const [isClickActivated, setIsClickActivated] = useState(true)
  const dispatch = useDispatch()

  const clickSquare = (e) => {
    e.preventDefault()
    setIsClickActivated(false)
    dispatch(updateClickedSquare(id))
  }

  useEffect(() => {
    const delay =
      isClickActivated === false ?
        setTimeout(() => setIsClickActivated(true), TRANSITION_DELAY * 2)
        : undefined
    return () => clearTimeout(delay)
  }, [isClickActivated])

  return (
    <div
      className="square"
      onClick={isClickActivated ? clickSquare : undefined}
      style={square.cardStyle}
      aria-hidden="true"
    >
      <div className="content front">
        <span>front</span>
      </div>
      <div className="content back" style={square.backStyle}>
        <span>back</span>
      </div>
    </div>
  )
}

export default OneSquare
