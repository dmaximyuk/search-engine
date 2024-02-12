import { useSelector } from "react-redux";
import { userSelector } from "store/users";

import type { RootState } from "store/rootReducer";
import type { UserModel } from "store/models";

export const useUser = (
  userId: number | string | undefined,
): UserModel | null => {
  const user = useSelector((root: RootState) => userSelector(root, userId));
  return user || null;
};
