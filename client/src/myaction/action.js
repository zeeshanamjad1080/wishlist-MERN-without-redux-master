export const handleInputAction=(input)=>{
    return{
        type:"Update_Input",
        payload:input
    }
}  

export const fetchwishaction = ()=>{
    return (dispatch)=>{
        fetch('/data')
        .then(res=>res.json())
        .then(res2=>{
          console.log(res2)
          dispatch({type:'Get_Wish',payload:res2})
        })
    }
}