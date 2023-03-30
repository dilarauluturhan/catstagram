import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    //api isteği
    axios.post("http://localhost:5000/api/login", { email: email, password: password })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <h1 className="text-center font-semibold">LOGIN</h1>
          </div>
          <div className="card-body">
            <form autoComplete="off" onSubmit={login}>
              <div className="form-group">
                Email:
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required email="true" className="form-control" />
              </div>
              <div className="form-group mt-2">
                Password:
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="form-control" />
              </div>
              <div className="form-group mt-2">
                <button type="submit" className="btn btn-outline-secondary w-100">
                  <h5 className="font-semibold">Login</h5>
                </button>
              </div>
            </form>
            <Link className="mt-2 link-offset-3 link-body-emphasis link-underline-opacity-25 link-underline-opacity-75-hover fs-5" to="/register" style={{ float: "right" }}>Register</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;