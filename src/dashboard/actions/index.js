import {FETCH_USERS} from '../constants';

export function ActionFetchUsers (data) {
    return {
        type: FETCH_USERS,
        data
    }
}