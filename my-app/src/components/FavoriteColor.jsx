import {useState} from "react";

function FavoriteColor() {
//   let color = "blue";
 
       const [color, setColor] = useState("blue"); // this line for changing the value of color
 

  return (
    <>
      <h1>My fav color is {color}</h1>;
      <button onClick={() => { setColor("red"); }}>Change color</button>
    </>
  );
}

export default FavoriteColor;
