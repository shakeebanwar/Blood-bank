const set_data=(data)=>{

    return (dispatch)=>{
        dispatch({type:"SETAUTHDATA",data:data})

    }
    
}

export {

    set_data
}