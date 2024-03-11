import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const getCartInLOcalStorage = createAsyncThunk("cart/get",
    async (data, { rejectWithValue }) => {
        try {
            return data;
        } catch (error) {
            rejectWithValue(error.response)
        }
    });

export const addToCart = createAsyncThunk("cart/Add",
    async (data, { rejectWithValue }) => {
        try {
            toast.success(`${data && data.nom} ajouté avec succès`);
            return data;
        } catch (error) {
            rejectWithValue(error.response)
        }
    });

export const modifyCart = createAsyncThunk("cart/modify",
    async (data, { rejectWithValue }) => {
        try {
            return data;
        } catch (error) {
            rejectWithValue(error.response)
        }
    });

export const removeToCart = createAsyncThunk("cart/remove",
    async (data) => {
        try {
            toast.success(`${data && data.nom} a été retiré avec succès`);
            return data && data.id;
        } catch (error) {
            console.log(error.response);
        }
    });

export const cleanCart = createAsyncThunk("cart/clean",
    async (id) => {
        try {
            toast.success('Votre panier a été vidé avec succès');
            //navigate("/categories");
            return [];
        } catch (error) {
            console.log(error.response)
        }
    })

export const CartSlice = createSlice({
    name: "cart",
    initialState: {
        value: [],
        isSuccess: false,
        loading: false
    },
    extraReducers: {
        //GET  CART
        [getCartInLOcalStorage.pending]: (state, action) => {
            state.loading = true;
        },
        [getCartInLOcalStorage.fulfilled]: (state, action) => {
            state.loading = false;
            state.value = action.payload;
            state.isSuccess = true;
        },
        [getCartInLOcalStorage.rejected]: (state, action) => {
            state.loading = false;
            state.isSuccess = false;
        },
        //ADD TO CART
        [addToCart.pending]: (state, action) => {
            state.loading = true;
        },
        [addToCart.fulfilled]: (state, action) => {
            state.loading = false;
            state.value = state.value.filter(val => {
                return val.id !== action.payload.id;
            });
            state.value.push(action.payload);
            localStorage.setItem("cart", JSON.stringify(state.value));
            state.isSuccess = true;
        },
        [addToCart.rejected]: (state, action) => {
            state.loading = false;
            state.isSuccess = false;
        },
         //MODIFY CART
         [modifyCart.pending]: (state, action) => {
            state.loading = true;
        },
        [modifyCart.fulfilled]: (state, action) => {
            state.loading = false;
            const cart = [...state.value];
            cart[action.payload && action.payload.index] = action.payload;
            state.value = cart;
            state.isSuccess = true;
            localStorage.setItem("cart", JSON.stringify(state.value));
        },
        [modifyCart.rejected]: (state, action) => {
            state.loading = false;
            state.isSuccess = false;
        },
        // UPDATE CART
        [removeToCart.pending]: (state, action) => {
            state.loading = true;
        },
        [removeToCart.fulfilled]: (state, action) => {
            state.loading = false;
            state.isSuccess = true;
            state.value = state.value.filter(val => {
                return val.id !== action.payload;
            });
            
            localStorage.setItem("cart", JSON.stringify(state.value));
        },
        [removeToCart.rejected]: (state, action) => {
            state.loading = false;
            state.isSuccess = false;
        },
        // CLEAN CART
        [cleanCart.pending]: (state, action) => {
            state.loading = true;
        },
        [cleanCart.fulfilled]: (state, action) => {
            state.loading = false;
            state.isSuccess = true;
            state.value = state.value.filter(val => {
                return val.id !== action.payload.id;
            })
            state.value.push(action.payload);
            localStorage.setItem("cart", JSON.stringify(state.value));
        },
        [cleanCart.rejected]: (state, action) => {
            state.loading = false;
            state.isSuccess = false;
        }
    }
});

export default CartSlice;