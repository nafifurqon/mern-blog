const { createStore } = require('redux');

const initialState = {
    dataBlog: [],
    name: 'Nafi'
};

const reducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_DATA_BLOG'){
        return {
            ...state,
            dataBlog: action.payload
        }
    }
    if(action.type === 'UPDATE_NAME'){
        return {
            ...state,
            name: 'Furqon'
        }
    }
    return state;
};

const store = createStore(reducer);

export default store;