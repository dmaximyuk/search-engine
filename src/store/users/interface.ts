import type { UserModel } from "store/models";

export interface UsersState {
  users: Array<UserModel>;
  searchText: string | null;
}
