let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Ведро с болтами', likeCount: 23},
                {id: 2, message: 'Машина мечты', likeCount: 100},
            ],
            newPostText: 'abrakadabra',

        },
        dialogsPage: {
            dialogsData: [
                {
                    id: 1,
                    name: 'Гена',
                    imgUrl: 'https://i.pinimg.com/originals/c0/b7/7f/c0b77faeb2cb3e67fd1b423c4535f6c3.jpg'
                },
                {
                    id: 2,
                    name: 'Женя',
                    imgUrl: 'https://libertycity.ru/uploads/download/gtasa_otherf/fulls/obkmdjipe5g27em88e63f3go91/1376044717554_rs-rrrjo-rrr.jpg'
                },
                {
                    id: 3,
                    name: 'Рома',
                    imgUrl: 'https://pm1.narvii.com/6960/b96261428e66115921eb208de561af56232f451br1-400-400v2_uhq.jpg'
                },
            ],
            messagesData: [
                {id: 1, message: 'Privet'},
                {id: 2, message: 'займи сотку'},
                {id: 3, message: 'как дела?'},
            ],
            newMessageText: 'Введите сообщение...',
        },
        sidebar: [
            {id: 1, friendName: 'Andrew'},
            {id: 2, friendName: 'Sasha'},
            {id: 3, friendName: 'Sveta'}
        ]
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addMessage() {
        let newMessage = {
            id: 3, message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messagesData.push(newMessage)
        this._state.dialogsPage.newMessageText = 'Введите сообщение...';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newMessageText) {
        this._state.dialogsPage.newMessageText = newMessageText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}

export default store;