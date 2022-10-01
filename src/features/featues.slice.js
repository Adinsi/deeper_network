import { createSlice } from "@reduxjs/toolkit";

export const pictureSlice = createSlice(
    {
        nom: "picture",
        initialState: {
           picture : null
        },
        reducers: {
            setPicturesData : (state,action) => {
                state.picture = action.payload
            }
        }
    }
)

export default pictureSlice.reducer;
export const { setPicturesData } = pictureSlice.actions;
