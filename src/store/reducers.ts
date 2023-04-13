import calendarReducer from "./calendar/reducer";
const {combineReducers} = require("@reduxjs/toolkit")

const rootReducer = combineReducers({
  calendar: calendarReducer
  
})

export default rootReducer;