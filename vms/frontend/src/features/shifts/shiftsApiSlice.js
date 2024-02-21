import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const shiftsAdapter = createEntityAdapter({})

const initialState = shiftsAdapter.getInitialState()

export const shiftsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getshifts: builder.query({
            query: () => '/shifts',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 60,
            transformResponse: responseData => {
                const loadedshifts = responseData.map(shift => {
                    shift.id = shift._id
                    return shift
                });
                return shiftsAdapter.setAll(initialState, loadedshifts)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'shift', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'shift', id }))
                    ]
                } else return [{ type: 'shift', id: 'LIST' }]
            }
        }),
    }),
})

export const {
    useGetshiftsQuery,
} = shiftsApiSlice

// returns the query result object
export const selectshiftsResult = shiftsApiSlice.endpoints.getshifts.select()

// creates memoized selector
const selectshiftsData = createSelector(
    selectshiftsResult,
    shiftsResult => shiftsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllshifts,
    selectById: selectshiftById,
    selectIds: selectshiftIds
    // Pass in a selector that returns the shifts slice of state
} = shiftsAdapter.getSelectors(state => selectshiftsData(state) ?? initialState)