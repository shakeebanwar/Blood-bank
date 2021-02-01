const INITIAL_STATE = {
    userlogin : {}
   
}

export default (state = INITIAL_STATE,action)=>{
    //console.log("my app request======> ",action)
    switch (action.type){

        case "SETAUTHDATA":
            return({

                ...state,
                userlogin : action.data
            })
    }
    return state;

}