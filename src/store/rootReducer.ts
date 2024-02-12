import { combineReducers } from "@reduxjs/toolkit";

import { reducer as users } from "./users";

export const rootReducer = combineReducers({
  users,
});

export type RootState = ReturnType<typeof rootReducer>;
