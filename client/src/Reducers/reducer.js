const iState={
    text:'',
    mywishes:[{_id:1,wish:"loading"}]
}

const reducer = (state=iState,action) =>{
if(action.type==='Update_Input'){
    return{
        ...state,text:action.payload
    }
}
        return state;
}

export default reducer;