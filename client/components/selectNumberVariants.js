import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNumberVariantsOnField } from '../redux/reducers/actions'


const SelectNumberVariants = () => {
  const [variants, setVariants] = useState([])
  const dispatch = useDispatch()
  const { numberVariantsOnField, widthField, heightField } = useSelector(s => s.reducer)

  const getNumberVariantsOnField = (width, height) => {
    const result = [2]
    let number = Math.floor(width * height / 2)
    while (number % 2 === 0 && number !== 2) {
      result.push(number)
      number /= 2
    }
    return result.sort((a, b) => a - b)
  }

  useEffect(() => {
    setVariants(getNumberVariantsOnField(widthField, heightField))
  }, [widthField, heightField])


  return (
    <>
      <div>Select number variants on the field:</div>

      <select value={numberVariantsOnField} onChange={(e) => dispatch(setNumberVariantsOnField(+e.target.value))}>
        {variants.map((variant, id) => <option key={id} value={variant}>{variant}</option>)}
      </select>

    </>
  )
}

export default SelectNumberVariants