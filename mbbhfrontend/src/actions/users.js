export const newUser = (user) => {
    return {
        type: 'NEW_USER',
        user
    }
}

export const logoutUserSuccess = () => {
    return {
        type: 'LOGOUT_USER_SUCCESS'
    }
} 
