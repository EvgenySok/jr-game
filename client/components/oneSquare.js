import React from 'react'
import { useDispatch } from 'react-redux'
import { updateClickedSquare } from '../redux/reducers/actions'

const OneSquare = ({ style, id }) => {
  const dispatch = useDispatch()

  return (
    <div
      className="square"
      onClick={() => dispatch(updateClickedSquare(id))}
      style={{ transform: style.transform }}
      aria-hidden="true"
    >
      <div className="content front">
        <span>front</span>
      </div>
      <div className="content back" style={{ backgroundColor: style.backgroundColor }}>
        <span>back</span>
      </div>
    </div>
  )
}

export default OneSquare
