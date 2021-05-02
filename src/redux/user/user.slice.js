import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice(
  {
    name: "user",
    initialState: {
      isLoggedIn: false,
      loggedinUser: {}
    },
    reducers: {
      userLogin: (state, action) => {
        state.isLoggedIn = true;
        state.loggedinUser = {...action.payload};
      },
      updateUser: (state, action) => {
        state.loggedinUser = action.payload;
      },
      userLogout: (state) => {
        state.isLoggedIn = false;
        state.loggedinUser = {}
      },
    } 
  }
);

//Exporting the actions
export const {userLogin, userLogout, updateUser} = userSlice.actions;

//Selectors
export const selectUser = (state) => state.user.loggedinUser;
export const selectIsUserLoggedin = (state) => state.user.isLoggedIn;

//Exporting the actual  reducer
export default userSlice.reducer;