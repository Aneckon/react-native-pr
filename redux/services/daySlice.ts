import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const url = 'http://127.0.0.1:5000';

export const dayApi = createApi({
  reducerPath: 'dayApi',
  baseQuery: fetchBaseQuery({baseUrl: url}),
  endpoints: build => ({
    setDayApi: build.mutation({
      query: body => ({
        url: '/travel_days',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {useSetDayApiMutation} = dayApi;
