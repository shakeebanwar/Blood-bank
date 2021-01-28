const INITIAL_STATE = {
    username : "shakeeb",
    password : "12234"
   
}

export default (state = INITIAL_STATE,action)=>{
    console.log("my auth request======> ",action)
    return state;

}