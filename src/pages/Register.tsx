import { SyntheticEvent, useState } from "react";

const Register = () =>{
  const [fullName, setfullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [c_password, setCPassword] = useState('');
  const [gender, setGender] = useState('');

  const submit = async(e:SyntheticEvent) =>{
      e.preventDefault();
      const response = await fetch("http://127.0.0.1:8000/register/");

  }
    return(
    <main className="form-signin w-100 m-auto">
      <form onSubmit={submit}>  
        <div className="form-floating mb-2">
          <input className="form-control" id="name" name="fullName" required onChange={e => e.target.value}/>
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-floating mb-2">
          <input type="email" className="form-control" id="floatingInput" name="email" onChange={e => e.target.value}/>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-2">
          <input type="password" className="form-control" id="floatingPassword" name="password" onChange={e => e.target.value}/>
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-2">
          <input type="password" className="form-control" name="c_password" id="floatingPasswd"/>
          <label htmlFor="floatingPasswd">Confirm Password</label>
        </div>
        <div className="form-floating mb-2">
              <select className="form-select" name="gender" id="gender" onChange={e => e.target.value}>
                <option defaultValue="">---Select Your Gender---</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <label htmlFor="gender" className="form-label">Gender</label>      
            </div>
        <button className="btn btn-primary w-100 py-2" type="submit">Register</button>
      </form>
    </main>
    )
  }
  
  export default Register;