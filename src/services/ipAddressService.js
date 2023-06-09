import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ipAddressApi = createApi({

    reducerPath: 'ipAddressApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://geo.ipify.org/api/v2/` }),
    endpoints: (builder) => ({
      trackIP: builder.query({
        query: (inputTerm) => ({
            url: `/country,city?apiKey=${process.env.REACT_APP_API_KEY}`,
            params:{ipAddress:inputTerm},
            method: "GET",
        }),
    }),
  })
})

export const {useTrackIPQuery} = ipAddressApi