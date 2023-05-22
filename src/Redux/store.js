
import { createStore, applyMiddleware, compose } from "redux";
import storage from "redux-persist/lib/storage";



import rootReducer from "./RootReducer";

import createSagaMiddleware from "redux-saga";
import Saga from "./Saga";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
const rootPersistConfig = {
  key: "rootdata",
  storage: storage,
  whitelist: ["registerReducer,publishRideReducer,CurrentUserReducer,profilePicReducer,vehicleDataReducer"],
};



const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;
    const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const Store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(Saga);
export default Store;

// export const persistorlogin = persistStore(loginStore);import { createStore, applyMiddleware, compose } from "redux";
export const persistor = persistStore(Store);












