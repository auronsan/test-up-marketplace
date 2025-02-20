import React from "react";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function mergeClassName<T extends React.HTMLAttributes<HTMLElement>>(
  props: T,
  className: string
) {
  if (props.className !== undefined) {
    return {
      ...props,
      className: `${props.className} ${className}`,
    };
  }

  return {
    ...props,
    className: className,
  };
}
