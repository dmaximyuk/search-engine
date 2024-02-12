import type { HTMLAttributes } from "react";

export interface SearchInputProps
  extends Omit<HTMLAttributes<HTMLInputElement>, ""> {
  placeholder?: string;
}
