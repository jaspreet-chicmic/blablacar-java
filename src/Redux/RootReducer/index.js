import { combineReducers } from "redux";

import { registerReducer } from "../Reducer/registerReducer";
import { loaderStateReducer } from "../Reducer/loaderStateReducer";
import { profilePicReducer } from "../Reducer/ProfilePicReducer";
import { VehicleDataReducer } from "../Reducer/setVehicleData";
import { CurrentUserReducer } from "../Reducer/CurrentUserReducer";
import { publishRideReducer } from "../Reducer/PublishRideReducer";

const appReducer = combineReducers({
    registerReducer: registerReducer,
    loaderStateReducer:loaderStateReducer,
    profilePicReducer:profilePicReducer,
    vehicleDataReducer:VehicleDataReducer,
    CurrentUserReducer:CurrentUserReducer,
    publishRideReducer:publishRideReducer,
 
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;