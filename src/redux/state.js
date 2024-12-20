
let state = {
    ProfilePage:{
        PostData: [
    {PostMessage: 'hello world', LikesCount: '4'},
    {PostMessage: 'it"s my first post', LikesCount: '5'},
    {PostMessage: 'russia', LikesCount: '21'},
] },
    DialogsPage:{
        DialogsData: [
            {id: 1, name: 'mikhail', avatar: 'https://png.klev.club/uploads/posts/2024-04/png-klev-club-vrj4-p-avatarka-png-28.png'},
            {id: 2, name: 'nina', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRofbo7FU51BHGWV5v6CFBbsjX9f4_pIUtxg&s'},
            {id: 3, name: 'katya', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSHCBE1zB1p6h-x9hEJZAkfiUiInHOBufuQ&s'},
            {id: 4, name: 'dima', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY7yEiUpUs1xhWkr2CvHC_1ClkVPkJLlzaLQ&s'},
        ],
        MessagesData: [
            {message: 'hi'},
            {message: 'how are you?'},
            {message: 'tivirp'},
        ],}
}
export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 5,
        PostMessage: postMessage,
        LikesCount: "223",
    };
    state.ProfilePage.PostData.push(newPost);
}
export default state;