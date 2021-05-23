import {
  CREATE_NEW_FIELD, UPDATE_CLICKED_SQUARE
} from './types'

export function createNewField() {
  return (dispatch, getState) => {
    const { colorPalette, numberColorsOnField, numberCards } = getState().reducer
    const rundomColors = colorPalette.sort(() => Math.random() - 0.5).slice(0, numberColorsOnField)

    let newField = []
    while (newField.length < numberCards) {
      newField = [...newField, ...rundomColors]
    }
    newField.length = numberCards
    newField = newField.sort(() => Math.random() - 0.5)
    newField = newField.map(it => ({
      style: { backgroundColor: it, transform: 'rotateX(0deg)' },
      isClicked: false,
    }))
    dispatch({
      type: CREATE_NEW_FIELD,
      payload: newField
    })
  }
}

export function updateClickedSquare(id) {
  return (dispatch, getState) => {
    const { field } = getState().reducer
    const newField = field.map((it, index) => {
      if (index === id) {
        const newStyles = { ...it.style, transform: 'rotateX(180deg)' }
        return { ...it, style: newStyles, isClicked: true }
      }
      return it
    })
    dispatch({
      type: UPDATE_CLICKED_SQUARE,
      payload: newField
    })
  }
}


