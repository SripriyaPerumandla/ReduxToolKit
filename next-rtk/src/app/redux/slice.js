//Action + Reducer
//Slice is a collection of Redux reducer logic and actions for a single feature in your app.

// Import necessary functions from Redux Toolkit
const {
  createSlice,
  nanoid,
  current,
  createAsyncThunk,
} = require("@reduxjs/toolkit");

// Define initial state for the slice
const initialState = {
  // users:[], // An empty array to hold user data
  users: JSON.parse(localStorage.getItem("users")),
  userAPIData: [],
};
export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {
  console.log("action");
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();
});
// Create a slice using createSlice function
const Slice = createSlice({
  name: "addUserSlice", // Name of the slice
  initialState, // Initial state defined above
  reducers: {
    addUser: (state, action) => {
      // Reducer function for adding a new user
      // console.log(state);
      console.log(action); // debugging purposes

      // Generate a unique id for the new user using nanoid function
      const data = {
        id: nanoid(), // Generates a unique id
        name: action.payload, // Extract the name from the action payload
      };
      // Push the new user data into the users array in the state
      state.users.push(data);
      let userData = JSON.stringify(current(state.users));
      localStorage.setItem("users", userData);
      console.log(current(state.users));
    },
    removeUser: (state, action) => {
      console.log(action);
      const data = state.users.filter((item) => {
        return item.id !== action.payload;
      });
      state.users = data;
      let userData = JSON.stringify(data);
      localStorage.setItem("users", userData);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
      console.log("reducer", action);
      state.isLoading = false;
      state.userAPIData = action.payload;
    });

    //   deleteUser: (state, action) => {
    //     const data = {
    //         name: action.payload
    //     }
    //     state.users.pop(data)
    // }
  },
});

// Export the addUser action creator
export const { addUser, removeUser } = Slice.actions;

// Export the reducer function to be used in the Redux store
export default Slice.reducer;
