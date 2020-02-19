import * as userConstants from '../constants/user';

const initialState = {
    users: [],
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.FETCH_USERS:
            return {
                ...state,
                users:action.payload,
            };
        case userConstants.DELETE_USER:
            const id = action.payload;
            const stateUser = state.users;

            return {
                ...state,
                users: stateUser,
            };

        default:
            return state;
    }
};

export default reducer;
