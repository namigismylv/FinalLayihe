import React, { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import axios from "axios"
const Signup = () => {
  const [nickName, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((res) => {console.log(res.data)
        if(res.data ==="Successful"){
          navigate("/")

        }
  })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login" style={{ paddingTop: "80px" }}>
      <form onSubmit={handleSubmit}>
      <div class="form-group">
          <label for="Nickname">Nickname</label>
          <input
            type="text"
            class="form-control"
            id="Nickname"
            placeholder="Enter NickName"
           value={nickName} onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label
            for="exampleInputPassword1"
            
          >
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p>
          Don't you have an account? <Link to="/register">Sign in</Link>
        </p>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;

