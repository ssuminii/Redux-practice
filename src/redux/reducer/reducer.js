let initialState = {
    count: 0
};

// reduce는 항상 return
function reducer(state=initialState, action) {
    // console.log('action---->', action);
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        default:
            return {...state};
    }
}

export default reducer