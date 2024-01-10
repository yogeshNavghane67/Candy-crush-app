import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";


const initialState: {
    board: string[];
    boardSize: number;
} = {
    board: [],
    boardSize: 7,
};

const candyCrushSlice = createSlice({
    name:"candyCrush",
    initialState,
    reducers: {
        updateBoard : (state,action:PayloadAction<string[]>)=> {
            state.board = action.payload;
        }
    }
})

export const store = configureStore({
    reducer:{
        candyCrush: candyCrushSlice.reducer,      
    },
});

export const { updateBoard } = candyCrushSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;