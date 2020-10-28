const initialState = []



const posts = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_POSTS_SUCCESS':
            return [...action.posts]
        case 'SHOW_POST':
            const id = parseInt(action.id)
            const post = state.filter(post => {
                return post.id === id})
            return post
        case 'NEW_POST':
            return [...state, action.post]
        case 'EDIT_POST':
            const newPost = {
                ...state[0],
                title: action.post.title,
                body: action.post.body
            }
            return [newPost]
        case 'DELETE_POST':
            const delId = parseInt(action.id)
            const delPost = state.filter(post => {
                return post.id !== delId})
            return delPost

        default:
            return state
    }
}

export default posts