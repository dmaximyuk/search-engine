import "./SearchInput.sass";

import { forwardRef } from "react";

import type { SearchInputProps } from "./SearchInput.interface";

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (props, ref) => (
    <input
      {...props}
      className="SearchInput__input"
      placeholder={props.placeholder}
      onChange={props.onChange}
      ref={ref}
    />
  ),
);

SearchInput.displayName = "SearchInput";
