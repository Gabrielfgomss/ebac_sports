import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosStates = {
  items: Produto[]
}

const initialState: FavoritosStates = {
  items: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const item = action.payload

      if (state.items.find((i) => i.id === item.id)) {
        console.log(item)
        const favoritosSemProdutos = state.items.filter((i) => i.id !== item.id)
        state.items = favoritosSemProdutos
      } else {
        console.log('b')
        state.items.push(item)
      }
    }
  }
})
export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
