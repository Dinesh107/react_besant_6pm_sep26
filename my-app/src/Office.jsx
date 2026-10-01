import React from "react";
import Employee from "./Employee.jsx";

function Office() {
  // const companyName = "CTS";
  //   const role = "Tech Lead";

  // const empDetails = {
  //   companyName: "CTS",
  //   role: "Tech Lead",
  //   bloodGroup: "b+Ve",
  // };

   const officeDoorOpen = false;

  const empDetails = {
     
  };

  const companyList = [
    { companyName: "CTS", role: "Tech Lead",  },
    { companyName: "TCS", role: "Manager" },
    { companyName: "Infosys", role: "Developer" },
    { companyName: "Wipro", role: "Tester" },
    { companyName: "HCL", role: "Designer" },
  ];

  const numberList = [
  // 0 1 2 3  4 5  6  7
    1, 2, 3, 4, 5, 6, 5, 
  ]


  return (
    <>
      <div>Office</div>
      {/* <Employee companyName={companyName} role = {'tech lead'} bloodGroup="b+Ve"/> */}
      {empDetails.companyName !== undefined && empDetails.role !== undefined ? (
        <Employee empDetails={empDetails} />
      ) : <h1>Employee details are not available</h1>}
    
       {officeDoorOpen ? <h1>Office is open</h1> : <h1>Office is closed</h1>}

       <ul>
        {
          companyList.map((companyList, index) => { return <li key={index}> <Employee empDetails={companyList} /> </li>})
        }
       </ul>

         <ul>
           {
            numberList.map((e, index) => <h1 key={index}>{e}</h1>)
           }
         </ul>


    </>
  );
}



export default Office;
