import React from "react";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "kimchi.gif",
  },
  {
    id: 2,
    name: "Gogi",
    image: "gogi.gif",
  },
  {
    id: 3,
    name: "Bibimbap",
    image: "bibimbap.gif",
  },
  {
    id: 4,
    name: "Doncasu",
    image: "doncasu.gif",
  },
  {
    id: 5,
    name: "Kimbap",
    image: "gimbap.gif",
  },
];

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
