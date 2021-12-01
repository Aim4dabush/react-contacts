import React, { useState } from "react";

const RegisterForm = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div
        className="card d-flex align-items-center bg-white"
        style={{ height: 300 }}
      >
        <div className="row">
          <div className="col-12 d-flex justify-content-center mt-5">
            <input
              className="form-control w-50"
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              value={state.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12 d-flex justify-content-center mt-3">
            <input
              className="form-control w-50"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={state.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12 d-flex justify-content-center my-3">
            <button type="submit" className="btn btn-secondary text-black">
              Login
            </button>
          </div>
          <div className="d-flex justify-content-center">
            <p>
              Already have an account? <a href="/login">Login</a>.
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
