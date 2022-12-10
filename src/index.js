import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img alt="random" src={img + "?grayscale"} />

    <img
      className="food-img"
      alt="coffee"
      src="https://m.media-amazon.com/images/I/51g48bqWfJL._AC_.jpg"
    />
    <img
      className="food-img"
      alt="Egwusi soup and Fufu"
      src="https://i.ytimg.com/vi/2C_zofzl0oY/maxresdefault.jpg"
    />
    <img
      className="food-img"
      alt="Nsala Soup and Pounded Yam"
      src="https://aliyahsrecipesandtips.com/wp-content/uploads/2019/11/ofe-nsala-and-poundo.jpg"
    />
  </div>,
  document.getElementById("root")
);
