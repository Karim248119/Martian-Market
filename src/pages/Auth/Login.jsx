import React, { useState } from "react";
import Button from "../../components/buttons/Button";
import { Link } from "react-router-dom";
import Joi from "joi";

const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")),

  confirmPass: Joi.ref("password"),
});
export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (password && password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex min-h-screen">
      <div
        className="hidden md:flex md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/5585858/pexels-photo-5585858.jpeg)",
        }}
      >
        <img src="../assets/LOGO.png" className="w-24 h-12 mt-5 ml-5" />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8  rounded-lg ">
          <h2 className="text-4xl font-semibold mb-6 font-serif">SIGN IN</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm  text-gray-700 uppercase"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.name ? "border-red-500" : "border-black"
                }  shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm`}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm  text-gray-700 uppercase"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-black"
                }  shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm`}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm  text-gray-700 uppercase"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`mt-1 block w-full px-3 py-2 border ${
                  errors.password ? "border-red-500" : "border-black"
                }  shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm`}
              />
              {errors.password && (
                <p className="mt-2 text-sm text-red-600">{errors.password}</p>
              )}
            </div>
            <Button
              title="LOG IN"
              className="w-full py-2 px-4 bg-primary text-white font-semibold  shadow-sm  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            />
          </form>
          <div className="mt-4 text-center capitalize text-black/60 font-serif text-sm flex justify-center items-center gap-1">
            <p href="/forgot-password" className=" ">
              Don't have account?
            </p>
            <Link
              to="/auth/signup"
              className=" hover:text-primary hover:underline"
            >
              Sign out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
