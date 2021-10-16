const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogsData: [
    { id: 1, name: "John" },
    { id: 2, name: "Alan" },
    { id: 3, name: "Alex" },
    { id: 4, name: "Sofia" },
  ],
  messagesData: [
    { id: 1, message: "hi" },
    { id: 2, message: "hello" },
    { id: 3, message: "how are you" },
  ],
 
};


const dialogsReducer = (state = initialState, action) => {
  switch (action.type) 
  {
    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      return {
        ...state,
        
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };
    }
    default:
      return state;
  }
};


export default dialogsReducer;
