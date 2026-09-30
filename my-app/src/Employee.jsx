function Employee(props) {
  // const { companyName, role } = props;

  const { empDetails } = props;

  const {companyName, role, bloodGroup} = empDetails;

  // const text = `hai i am siva, working in ${companyName} as a ${role}, my blood group is ${bloodGroup}`;
  const text = `hai i am ${name}, working in ${companyName} as a ${role}`;




  return <h1> {text} </h1>;
}

export default Employee;

