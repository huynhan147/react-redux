import * as userConstants from '../constants/user';

export const fetchUsers = (data) => ({
    type: userConstants.FETCH_USERS,
    payload: data,
});

export const deleteUser = (id) => ({
    type: userConstants.DELETE_USER,
    payload: { id }
});
