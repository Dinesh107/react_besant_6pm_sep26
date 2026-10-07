import { useEffect, useState } from "react"

function Timer() {

  const [count, setCount] = useState(0);

//    useEffect(() => {
//     console.log("Screen refreshed");
//     checkCount();
//    }, [count]);

   
//     useEffect(() => {
//     console.log("Screen refreshed");
//      setCount(1);
//    }, []);

//   useEffect(() => {
//     console.log("Screen refreshed");
//       setTimeout(() => {
//          setCount((pre) => { return pre + 1 });
//       }, 2000)
//    });

     function checkCount() {
      if(count > 10) {
        setCount(1);
      }
   }

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