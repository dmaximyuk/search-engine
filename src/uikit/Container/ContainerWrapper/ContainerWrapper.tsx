import { type FC } from "react";
import cn from "classnames";

import type { ContainerWrapperProps } from "./ContainerWrapper.interface";

export const ContainerWrapper: FC<ContainerWrapperProps> = (props) => {
  return (
    <div
      {...props}
      className={cn({
        Container__wrapper: true,
        [`${props.className}`]: !!props.className,
      })}
    >
      {props.children}
    </div>
  );
};
