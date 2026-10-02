import { useState } from "react";

function VendorList() {
  const [vendorList, setVendorList] = useState([]);
  const [count, setCount] = useState(1);

  function addVendor() {
    const vendorName = "Vendor"+ count;
    setVendorList((preState) => {
        //   vendor 1, vendor 2
      return [...preState, vendorName];
    });

    setCount((preState) => {
        //    2 3
      return preState + 1;
    });
  }

  console.log('current state:',vendorList, count);
  

  return (
    <>
      <h1>Vendor List</h1>
      <button onClick={addVendor}>Add vendor</button>
      <ul>
        {vendorList.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </>
  );
}

export default VendorList;
