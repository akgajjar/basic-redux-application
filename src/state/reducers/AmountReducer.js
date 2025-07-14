

export default reducer=(initialState = 0, action)=>{

    if(action.type === 'deposit'){
        return initialState + action.payload
    }else if(action.type === 'withdraw'){
        return initialState - action.payload;
    } else{
        return initialState;
    }
}