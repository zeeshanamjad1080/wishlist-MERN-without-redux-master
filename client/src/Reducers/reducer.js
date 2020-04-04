const iState={
    text:'',
    mywishes:[{_id:1,wish:"loading"}]
}

const reducer = (state=iState,action) =>{

    switch(action.type){
        case 'Update_Input':    return{
            ...state,text:action.payload
        };
        case 'Get_Wish':return{
            ...state,
            mywishes:action.payload
        };
        default: return state;
    }
}

export default reducer;