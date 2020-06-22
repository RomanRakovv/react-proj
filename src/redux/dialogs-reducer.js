const SEND_MESSAGE = 'SEND-MESSAGE';

let initialStore = {
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
}

let dialogsReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 4, message: action.newMessageBody}],
            }
        default:
            return state;
    }
}

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;