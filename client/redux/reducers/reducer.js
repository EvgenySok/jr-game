import {
  UPDATE_CURRENT_ROUND,
  UPDATE_FIELD, UPDATE_FIRST_CLICKED_ITEM_ID,
} from './types'

const inicialState = {
  colorPalette: ['#1F2937', '#991B1B', '#92400E', '#065F46', '#1E40AF', '#3730A3', '#5B21B6', '#9D174D'],
  numberColorsOnField: 2,
  numberCards: 4,
  firstClickedItemID: null,
  numberRounds: 3,
  currentRound: null,
  field: [],
}

// eslint-disable-next-line import/prefer-default-export
export const reducer = (state = inicialState, action) => {

  switch (action.type) {
    case UPDATE_FIELD:
      return { ...state, field: action.payload }

      case UPDATE_FIRST_CLICKED_ITEM_ID:
      return { ...state, firstClickedItemID: action.payload }
    
      case UPDATE_CURRENT_ROUND:
        return { ...state, currentRound: action.payload }

    default:
      return state
  }
}
