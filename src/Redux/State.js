import rerenderEntireTree from "../render";


let state = {
    profilePage: {
        PostData: [
            {id: 1, post: 'Privet, pervii post', likes: '7'},
            {id: 2, post: 'Privet, vtoroi  post', likes: '10'},
            {id: 3, post: 'Privet, tretii post', likes: '33'},
        ],
        newPostText: 'it-inkubator'

    },
    dialogsPage: {
        MessagesData: [
            {id: 1, message: 'privet'},
            {id: 2, message: 'hello'},
            {id: 3, message: 'kak dela'}
        ],
        DialogsData: [
            {id: 1, name: 'Mikhail'},
            {id: 2, name: 'Denis'},
            {id: 3, name: 'Emile'},
        ],
    },
}

export let addPost = (messagePost) => {
    debugger
    let newPost = {
        id: 5,
        post:messagePost,
        likes:0,
    };
    state.profilePage.PostData.push(newPost);
    rerenderEntireTree(state, addPost)
}
export default state;