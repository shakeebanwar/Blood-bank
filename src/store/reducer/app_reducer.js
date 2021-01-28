const INITIAL_STATE = {
    name : "Facebook"
   
}

export default (state = INITIAL_STATE,action)=>{
    console.log("my app request======> ",action)
    switch (action.type){

        case "SETDATA":
            return({

                ...state,
                name : action.data
            })
    }
    return state;

}