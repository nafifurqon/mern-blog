const initialState = {
    name: 'Nafi'
};

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME'){
        return {
            ...state,
            name: 'Furqon'
        }
    }
    return state;
}

export default globalReducer;