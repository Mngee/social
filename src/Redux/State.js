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
        newMessageText: 'message',

        DialogsData: [
            {id: 1, name: 'Mikhail'},
            {id: 2, name: 'Denis'},
            {id: 3, name: 'Emile'},
        ],
    },
}
window.state = state

export let addPost = () => {
    let newPost = {
        id: 5,
        post:state.profilePage.newPostText,
        likes:0,
    };
    state.profilePage.PostData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state, addPost)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state, addPost)
}
export let addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.MessagesData.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state, addMessage)
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText
    rerenderEntireTree(state, addPost)
}
export default state;