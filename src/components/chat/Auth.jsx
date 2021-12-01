import { useState } from "react";
import Image from "next/image";
import Cookies from "universal-cookie";
import axios from "axios";
import Header from "../../components/Header";

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
    <div className="">
      <Header />

      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="flex shadow-xl flex-grow-3">
          <Image
            src="/banners/auth.webp"
            objectFit="contain"
            width={800}
            height={700}
            alt="auth"
            loading="eager"
          />
        </div>
        <div className="flex flex-col w-full z-20 -mt-40 justify-center items-center">
          <div className="auth__form-container_fields_content flex flex-col justify-start p-8 shadow-xl bg-white rounded-sm transition ease-in">
            <p className="font-medium text-scu_blue-light text-xl">
              {isSignUp ? "Sign Up" : "Sign in"}
            </p>
            <form onSubmit={handleSubmit} action="">
              {isSignUp && (
                <div className="flex flex-col relative my-0 w-full mx-0">
                  <label
                    className="mb-2 text-purple-600 text-md font-medium tracking-normal leading-3"
                    htmlFor="fullname"
                  >
                    Full Name
                  </label>
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
              <div className="flex flex-col relative my-4 mx-0">
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
                <div className="flex flex-col relative my-4 mx-0">
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
                <div className="flex flex-col relative my-4 mx-0">
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
                <div className="flex flex-col relative my-4 mx-0">
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
              <div className="flex flex-col relative my-4 mx-0">
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
                <div className="flex flex-col relative my-4 mx-0">
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
                <button type="submit">
                  {isSignUp ? "Sign up" : "Sign in"}
                </button>
              </div>
            </form>
            <div className="auth__form-container_fields-account">
              <p className="font-medium text-scu_blue-light text-xl">
                {isSignUp
                  ? "Already have an account?"
                  : "Don't have an account?"}
                <span onClick={switchMode}>
                  {isSignUp ? "Sign in" : "Sign up"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
