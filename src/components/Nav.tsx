import { Link} from "react-router-dom";

const Navbar = (props: {name: String, setName : (name : String) => void}) =>{
  const logout = async() => {
    await fetch("http://127.0.0.1:8000/users/logout/",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
    });
    props.setName('');
  }
  let menu;
  if(props.name === ''){
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link  to="/login" className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">Register</Link>
          </li>
        </ul>
    )
  }else{
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  to="/login" className="nav-link" onClick={logout}>Logout</Link>
        </li>
    </ul>
    )
  }
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link  className="navbar-brand" to="/">Authentication App</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link  to="/login" className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;