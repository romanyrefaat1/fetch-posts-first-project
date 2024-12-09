import React from "react";

export const metadata = {
    title: `Articles Page`
}

export default function layout({ children }) {
  return <div>LAYOUT FROM NESTED LAYOUT IN ARTICLES {children}</div>;
}
