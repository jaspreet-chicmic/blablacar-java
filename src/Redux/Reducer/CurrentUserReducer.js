import { ACTION_STATES } from "../ActionStates";

export const CurrentUserReducer = (state = {currentUser:[]}, action) => {
    switch (action?.type) {
        case ACTION_STATES.SETUSERDETAILS:
            console.log(action?.payload,"in reducer")
                    return {...state,currentUser:action?.payload||[]}
     
        default:
            return state
    }
}

