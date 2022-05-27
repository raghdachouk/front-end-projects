import React, { cloneElement } from "react";

const Icon = ({ children, className, color, size = "s", ...rest }) =>
  React.isValidElement(children) ? (
    cloneElement(children, {
      ...rest,
      className,
      // className: clsx(className, styles.icon, styles[`icon--size-${size}`]),
      focusable: "false",
      role: "img",
      size,
      style: { "--svg-color": color || "currentColor" },
    })
  ) : (
    <> </>
  );

export default Icon;
