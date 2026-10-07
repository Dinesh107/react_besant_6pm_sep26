import { useState } from "react";
function MyForm() {

    // const [name, setName] = useState("");
    // const [age, setAge] = useState("");
    // const [email, setEmail] = useState("");

    const [inputs, setInputs] = useState({});

    // console.log("Current State: ", name);

    function handleSubmit(event) {
         event.preventDefault();  // stop the page refreshing when the form is submitted
        console.log('Form submitted: ');
        console.log("Current State: ", inputs);
        
    }
    


     function handleChange(event) {
        //   age 
        //   email
        //   name
        const name = event.target.name;

        //   age = 12
        // name = "siav"
        //  email = ee@gmail.com
        const value = event.target.value;     
         console.log("Name: ", name);
         console.log("Value: ", value);                                                           
       setInputs((pre) => { return {...pre, [name]: value} });
     }
    // onChange
    
    return(
        <form onSubmit={handleSubmit}>
            <label > Enter your name:  <input type="text" name="name" onChange={handleChange} /> </label><br /> <br />
            <label > Enter your age:  <input type="text" name="age" onChange={handleChange} /> </label><br /> <br />
            <label > Enter your Email:  <input type="text" name="email" onChange={handleChange}/> </label><br /> <br />
            <input type="submit" value="Submit form" />
        </form>
    )
}

export default MyForm;


//name: event.target.value
//age: event.target.value
//email: event.target.value