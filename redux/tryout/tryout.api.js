import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const tryoutApi = createApi({
    reducerPath : 'tryout/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8083/'
    }),
    endpoints: build => ({
        getCards: build.query({
            query: ()=> ({
                url: `api/r/card/`
            })
        })
    })
})


export const {useGetCardsQuery} = tryoutApi