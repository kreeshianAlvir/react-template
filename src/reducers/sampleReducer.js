const accountGroupReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_ACCOUNT_GROUP':
            return action.payload;
        default:
            return state;
    }
}

export default accountGroupReducer;