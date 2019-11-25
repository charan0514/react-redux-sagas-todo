import {createSelector} from 'reselect';
import * as APIUtils from  '../../utils/APIUtils';

export const getIsFetching = (state) => state.dashboard.isUserFetching

export const getIsFetched = (state) => state.dashboard.isUserFetched

export const getIsFetchError = (state) => state.dashboard.isUserFetchError

export const getFetchResponse = (state) => state.dashboard.userFechResponse

export const getFetchSuccess = createSelector(
    getFetchResponse, getIsFetched, getIsFetchError, 
    (response, isFetched, isError) => {
        if (isFetched && !isError && !!response) {
            return response
        }
    } 
)