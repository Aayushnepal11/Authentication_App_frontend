const UserLogin = () =>{
  return(
    <form>
      <div className="form-floating mb-2">
        <input type="email" className="form-control" id="floatingInput"/>
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-2">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    </form>
  )
  
}

export default UserLogin;