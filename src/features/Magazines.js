import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../bases/basesUrl";

export const getAllMagazines = createAsyncThunk("magazines/getData", async (arg, {
    rejectWithValue
}) => {
    try {
        const { data } = await axios.get(`${baseUrl}/magazines`);
        return data;
    } catch (error) {
        rejectWithValue(error.response);
    }
});


export const magazineSlice = createSlice({
    name: "magazines",
    initialState: {
        value: [],
        isSuccess: false,
        loading: false
    },
    extraReducers: {
        //GET ALL magazines
        [getAllMagazines.pending]: (state, { payload }) => {
            state.loading = true;
            state.isSuccess = false;
        },
        [getAllMagazines.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.value = payload;
            state.isSuccess = true;
        },
        [getAllMagazines.rejected]: (state, { payload }) => {
            state.loading = false;
            state.isSuccess = false;
        },
    }
});

export default magazineSlice;