import { useEffect, useState } from "react"

function Timer() {

  const [count, setCount] = useState(1);

   useEffect(() => {
    console.log("Screen refreshed");
   }, [count]);

  

   function updateCount() {
      setCount((preState) => {return preState + 1});
   }

    return (
        <>
          <h1>I have rendered {count} times!!!</h1>
    <button onClick={updateCount} >Increase count</button>
        </>
    )
}

// useEffect(callback, []);

export default Timer;