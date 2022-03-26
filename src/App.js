import FormInput from "./components/FormInput";
import { useState } from "react";
import "./App.css";
const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      placeholder: "Username",
      type: "text",
      label: "Username",
    errorMessage:  "Username should be 3-16 characters and shouldn't include any special character!",
    required:true,
    pattern:"^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      placeholder: "Email",
      type: "email",
      label: "Email",
    errorMessage:"It should be a valid email address!",
    required:true,
    pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`
    },
    {
      id: 3,
      name: "birthday",
      placeholder: "Birthday",
      type: "date",
      label: "Birthday",
    errorMessage:""
    },
    {
      id: 4,
      name: "password",
      placeholder: "Password",
      type: "password",
      label: "Password",
    errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    required:true,
    },
    {
      id: 5,
      name: "confirmPassword",
       
      type: "password",
      label: "ConfirmPassword",
    errorMessage:"Passwords don't match!",
    required:true,
    pattern:values.password
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange= (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    console.log(values)
  }
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {
          inputs.map((input)=>(

            <FormInput key={input.id} placeholder="Username" {...input} value={values[input.name]} onChange={onChange }/>
             
  ))
        }
      
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
