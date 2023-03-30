import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState();
  const navigate = useNavigate();

  const register = () => {
    // resimli bir dosyayı api olarak göndereceksem bunu form dataya çevirmem gerekiyor
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar, avatar.name);

    //api isteği
    axios.post("http://localhost:5000/api/register", formData)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/");
    })
    navigate("/");
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <h1 className="text-center font-semibold">REGISTER</h1>
          </div>
          <div className="card-body">
            <form onSubmit={register}>
              <div className="form-group">
                Name:
                <input value={name} onChange={(e) => setName(e.target.value)} className="form-control" required minLength="3" />
              </div>
              <div className="form-group mt-2">
                Email:
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" required email="true" />
              </div>
              <div className="form-group mt-2">
                Password:
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" required />
              </div>
              <div className="form-group mt-2">
                Avatar:
                <input onChange={(e) => setAvatar(e.target.files[0])} type="file" className="form-control" required />
              </div>
              <div className="form-group mt-2">
                <button type="submit" className="btn btn-outline-secondary w-100 font-semibold">
                <h5 className="font-semibold">Register</h5>
                </button>
              </div>
            </form>
            <Link className="mt-2 link-offset-3 link-body-emphasis link-underline-opacity-25 link-underline-opacity-75-hover fs-5" style={{ float: "right" }} to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;