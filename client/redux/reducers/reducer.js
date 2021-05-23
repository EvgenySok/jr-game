import {
  CREATE_NEW_FIELD, UPDATE_CLICKED_SQUARE,
} from './types'

const inicialState = {
  colorPalette: ['aqua', 'black', 'darkred', 'darkMagenta', 'darkslatelue', 'deeppink', 'forestgreen', 'navy', 'teal', 'yellowgreen'],
  numberColorsOnField: 2,
  numberCards: 4,
  selectedColor: [],
  numberRounds: 12,
  field: []
}


// eslint-disable-next-line import/prefer-default-export
export const reducer = (state = inicialState, action) => {

  switch (action.type) {
    case CREATE_NEW_FIELD:
      return { ...state, field: action.payload }

    case UPDATE_CLICKED_SQUARE:
      return { ...state, field: action.payload }

    default:
      return state
  }
}
