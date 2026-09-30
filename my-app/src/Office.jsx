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
    { companyName: "CTS", role: "Tech Lead" },
    { companyName: "TCS", role: "Manager" },
    { companyName: "Infosys", role: "Developer" },
    { companyName: "Wipro", role: "Tester" },
    { companyName: "HCL", role: "Designer" },
  ];

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
          companyList.map((companyList) => { return <li> <Employee empDetails={companyList} /> </li>})
        }
       </ul>


    </>
  );
}



export default Office;
