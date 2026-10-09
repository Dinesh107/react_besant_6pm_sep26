import { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
     const getApi = await fetch(url);
    console.log(await getApi.json());
  };
   
//   return (
//     <div>
//       <h1>Fetch Data</h1>
//         {loading && <p>Loading...</p>}
//         {error && <p>Error: {error}</p>}
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>{item.name}</li>
//           ))}
//         </ul>
//     </div>
//   )


};

export default FetchData;
