import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = (porps:{setName: (name : String) => void}) =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const submit = async(e: SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/users/login/",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
      })
    });
    const content = await response.json();
    porps.setName(content.name);
    return navigate("/");
  }
  return(
    <form onSubmit={submit}>
      <div className="form-floating mb-2">
        <input type="email" className="form-control" id="floatingInput" onChange={e => setEmail(e.target.value)} />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-2">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    </form>
  )
  
}

export default UserLogin;