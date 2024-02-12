import type { HTMLAttributes } from "react";

export interface UserCardProps extends Omit<HTMLAttributes<HTMLElement>, ""> {
  uid: number;
}
