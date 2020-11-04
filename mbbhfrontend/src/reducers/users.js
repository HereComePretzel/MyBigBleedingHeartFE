const initialState = []



const users = (state=initialState, action) => {
    switch(action.type) {
        case 'NEW_USER':
            return [...state, action.user]
        case 'LOGOUT_USER_SUCCESS':
            return {}
        default:
            return state
    }
}

export default users