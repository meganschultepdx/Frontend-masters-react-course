import React from 'react';
import {
  render
} from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "mix"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "bird",
      breed: "mix"
    }),
    React.createElement(Pet, {
      name: "Fuzz",
      animal: "cat",
      breed: "mix"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));