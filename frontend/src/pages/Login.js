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
        localStorage.setItem("user", res.data.user);
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
            <h1 className="text-center">Log in Page</h1>
          </div>
          <div className="card-body">
            <form autoComplete="off" onSubmit={login}>
              <div className="form-group">
                Email
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required email="true" className="form-control" />
              </div>
              <div className="form-group mt-2">
                Password
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="form-control" />
              </div>
              <div className="form-group mt-2">
                <button type="submit" className="btn btn-primary w-100">
                  Log in
                </button>
              </div>
            </form>
            <Link className="mt-2" to="/register" style={{ float: "right" }}>Register</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;