import { useState } from "react";

const Form = () => {

  const [loginInfo, setLoginInfo] = useState({username: "", password: ""})

  let handleChange = (event) => {
    setLoginInfo(Object.assign({}, loginInfo, {[event.target.name]: event.target.value}))
  }

  let handleSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem("auth", loginInfo.username)
    window.location.reload()
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input onChange={handleChange} name="username" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input onChange={handleChange} name="password" type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  )
}

export default Form;
