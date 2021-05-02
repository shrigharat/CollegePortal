import {createSlice} from "@reduxjs/toolkit";
import {LIGHTMODE} from "../../components/color-mode/lightmode";
import {DARKMODE} from "../../components/color-mode/darkmode";

const colorSlice = createSlice(
  {
    name: "color",
    initialState: {
      mode: "light",
      modeConfig: LIGHTMODE
    },
    reducers: {
      toggleColorMode: (state, action) => {
        if(state.mode === "light") {
          state.mode = "dark";
          state.modeConfig = DARKMODE;
        } else {
          state.mode = "light";
          state.modeConfig = LIGHTMODE;
        }
      }
    }
  }
);

export const {toggleColorMode} = colorSlice.actions;

export const selectColorMode = (state) => state.color.mode;
export const selectColorScheme = (state) => state.color.modeConfig;

export default colorSlice.reducer;