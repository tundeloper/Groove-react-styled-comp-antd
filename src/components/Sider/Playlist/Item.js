import React from "react";

export default function item() {
  const data = [
    "Riffs $ Runs",
    "African Heat",
    "Gidi Night",
    "Running Out of Play list na",
    "Saturday was a Good day",
    "African Heat",
    "Riffs $ Runs",
    "Gidi Night",
    "Running Out of Play list na",
    "Saturday was a Good day",
    "African Heat",
    "Riffs $ Runs",
    "Gidi Night",
    "Running Out of Play list na",
    "Saturday was a Good day",
    "Saturday was a Good day",
    "African Heat",
    "Riffs $ Runs",
    "Gidi Night",
    "Running Out of Play list na",
    "Saturday was a Good day",
  ];

  return (
    <ul>
      {data.map((list, index) => {
        return <li key={index}>{list}</li>;
      })}
    </ul>
  );
}
