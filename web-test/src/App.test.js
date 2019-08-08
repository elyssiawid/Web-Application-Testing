import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
​
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
​
// describe("<App />", () => {
//   it("renders without crashing", () => {
//     render(<App />);
//   });
// ​
//   it("should display strikes and balls", () => {
//     const { getByText } = render(<App />);
// ​
//     getByText(/strikes/i);
// ​
//     getByText(/balls/i);
//   });
// ​
//   it("should add strikes and balls", () => {
//     const { getByText } = render(<App />);
// ​
//     const button = getByText(/strike/i);
//     fireEvent.click(button);
//   });
// });