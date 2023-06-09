import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import {ipAddressApi} from '../services/ipAddressService'

export const  store = configureStore({
    reducer:{
 [ipAddressApi.reducerPath] :ipAddressApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ipAddressApi.middleware)
})

setupListeners(store.dispatch)