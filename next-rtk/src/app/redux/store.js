import userReducer from './slice';
import todoReducer from './todoSlice'
const { configureStore } = require("@reduxjs/toolkit");

export const store=configureStore({
    reducer:{
       usersData:userReducer,
       todosData:todoReducer
    }
})
