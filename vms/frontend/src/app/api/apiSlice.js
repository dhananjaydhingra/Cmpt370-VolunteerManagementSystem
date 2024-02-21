import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// createApi() is a function that takes an object with three properties:
// baseQuery - 
// tagTypes - an array of strings that define the types of tags that can be used in your API
// endpoints - an object with properties that define the endpoints for your API


export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
    tagTypes: ['Shift','Users'],
    endpoints:builder => ({}),
});