import { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { UserIcon } from "@heroicons/react/solid";

const initialState = {
  fullname: "",
  username: "",
  phoneNumber: "",
  avatarURL: "",
  password: "",
  confrimPassword: "",
};

const cookies = new Cookies();

function Auth() {
  const [form, setForm] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(true);
  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const switchMode = (e) => {
    e.preventDefault();
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullname, username, phoneNumber, avatarURL, password, email } =
      form;
    const URL = "http://0.0.0.0:5000/auth";
    const {
      data: { token, userId, hashedPassword },
    } = await axios.post(`${URL}/${isSignUp ? "signup" : "login"}`, {
      username,
      password,
      fullname,
      phoneNumber,
      avatarURL,
      email,
    });
    cookies.set("token", token);
    cookies.set("userId", userId);
    cookies.set("username", username);
    cookies.set("fullname", fullname);
    if (isSignUp) {
      cookies.set("hashedPassword", hashedPassword);
      cookies.set("username", username);
      cookies.set("phoneNumber", phoneNumber);
      cookies.set("avatarURL", avatarURL);
      cookies.set("email", email);

    }
    window.location.reload();
  };

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields_content">
          <p>{isSignUp ? "Sign Up" : "Sign in"}</p>
          <form onSubmit={handleSubmit} action="">
            {isSignUp && (
              <div className="auth__form-container_fields_content_input">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="full name"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields_content_input">
              <label htmlFor="username">User name</label>
              <input
                type="text"
                name="username"
                id="userlname"
                placeholder="user name"
                onChange={handleChange}
                required
              />
            </div>
            {isSignUp && (
              <div className="auth__form-container_fields_content_input">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="phone number"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {isSignUp && (
              <div className="auth__form-container_fields_content_input">
                <label htmlFor="EmailAddress">Email Address</label>
                <input
                  type="text"
                  name="EmailAddress"
                  id="EmailAddress"
                  placeholder="Email Address"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {isSignUp && (
              <div className="auth__form-container_fields_content_input">
                <label htmlFor="avatarURL">Avatar url</label>
                <input
                  type="text"
                  name="avatarURL"
                  id="avatarURL"
                  placeholder="Avatar URL"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields_content_input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                onChange={handleChange}
                required
              />
            </div>
            {isSignUp && (
              <div className="auth__form-container_fields_content_input">
                <label htmlFor="confrimPassword">confrim Password</label>
                <input
                  type="password"
                  name="confrimPassword"
                  id="confrimPassword"
                  placeholder="confirm password"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields_content_button">
              <button type="submit">{isSignUp ? "Sign up" : "Sign in"}</button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <span onClick={switchMode}>
                {isSignUp ? "Sign in" : "Sign up"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="ath__form-container_image">
        {/* todo: I have to replace this with a sign up banner with Image tag */}
        <UserIcon className="h-8" />
      </div>
    </div>
  );
}

export default Auth;
