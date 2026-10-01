import { useState } from "react";

function Patients() {
  //   const [name, setName] = useState("John");
  //   const [age, setAge] = useState("30");
  //   const [gender, setGender] = useState("male");
  //   const [bloodGroup, setBloodGroup] = useState("o+");

  const [patient, setPatient] = useState({
    name: "John",
    age: 30,
    gender: "male",
    bloodGroup: "o+",
  });
  // task - changing the all values of patient object at once using setPatient function

  function changeBloodGroup() {
    setPatient((previousState) => {
        return {...previousState, bloodGroup: "A+"};
    })
  }

  console.log(patient);

  return (
    <>
      <h1>My Patients</h1>
      <h1>Name: {patient.name}</h1>
      <h1>Age: {patient.age}</h1>
      <h1>Gender: {patient.gender}</h1>
      <h1>Blood Group: {patient.bloodGroup}</h1>
      <button onClick={changeBloodGroup}>Change bloodgroup</button>
    </>
  );
}

export default Patients;
