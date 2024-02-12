import { createSlice, createSelector } from "@reduxjs/toolkit";

import { usersList } from "store/dataForStore";

import type { RootState } from "store/rootReducer";
import type { UsersState } from "./interface";

const initialState: UsersState = {
  users: usersList,
  searchText: null,
};

export const { reducer, actions } = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSearch(state, action) {
      if (!action.payload || action.payload.length < 1) {
        state.searchText = initialState.searchText;
      } else {
        state.searchText = action.payload;
      }
    },
  },
});

export { reducer as usersReducer, actions as usersActions };
export const usersSelector = (state: RootState) => state.users;
export const userSelector = createSelector(
  usersSelector,
  (_: RootState, userId: number | string | undefined) => userId,
  (state, userId) => {
    if (!userId) return;
    return state.users.find((item) => item.uid === userId);
  },
);
