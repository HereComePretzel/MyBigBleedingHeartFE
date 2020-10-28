export const fetchPostsSuccess = (posts) => {
    return {
        type: 'FETCH_POSTS_SUCCESS',
        posts
    }
}

export const showPost = (id) => {
    return {
        type: 'SHOW_POST',
        id
    }
}


export const newPost = (post) => {
    return {
        type: 'NEW_POST',
        post
    }
}

export const editPost = (post) => {
    return {
        type: 'EDIT_POST',
        post
    }
}

