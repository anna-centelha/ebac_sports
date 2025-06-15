import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import carrinhoReducer from './slices/carrinhoSlice'
import favoritosReducer from './slices/favoritosSlice'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
