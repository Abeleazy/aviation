import React, { useState } from "react";
import googleLogo from "../../assets/img/google-logo.png";
import appleLogo from "../../assets/img/apple-logo.png";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../loader/index";
import { useStore } from "../../utils/store/useStore";

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const { addUserRole } = useStore();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      console.log(values);
      const { data } = await axios.post(
        "https://testaviationmedicals.azurewebsites.net/api/auth/login",
        values
      );
      if (data.success) {
        localStorage.setItem("x-access-token", data.data.token.token);
        addUserRole(data.data.roles);
        setIsLoading(false);
        navigate("/dashboard");
      } else {
        toast(data.message);
        setIsLoading(false);
        console.log(data);
      }
    },
  });

  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <div className="grid gap-4">
        <h3 className="crancy-wc__form-title crancy-wc__form-title__one text-center">
          Login to your account
        </h3>
      </div>
      <div className="grid gap-3">
        {/* <!-- Form Group --> */}
        <div className="form-group">
          <div className="form-group__input">
            <input
              className="px-4"
              type="email"
              name="email"
              placeholder="admin@mail.com"
              required="required"
              onChange={formik.handleChange("email")}
            />
          </div>
        </div>
        {/* <!-- Form Group --> */}
        <div className="form-group">
          <div className="form-group__input">
            <input
              className="px-4"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              id="password-field"
              type="password"
              name="password"
              // maxLength="8"
              required="required"
              onChange={formik.handleChange("password")}
            />
            <span className="crancy-wc__toggle">
              <i className="fas fa-eye" id="toggle-icon"></i>
            </span>
          </div>
        </div>
        {/* <!-- Form Group --> */}
        <div className="form-group">
          <div className="crancy-wc__check-inline">
            <div className="crancy-wc__checkbox">
              <input
                className="crancy-wc__form-check"
                id="checkbox"
                name="checkbox"
                type="checkbox"
              />
              <label htmlFor="checkbox">Remember Me</label>
            </div>
            <div className="crancy-wc__forgot">
              <a href="forget-password.html" className="forgot-pass">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Form Group --> */}
        <div className="">
          <div className="">
            <button
              className={`text-[#ffffff] rounded-[5px] hover:bg-[#2F3042] ${
                isLoading ? `bg-[#2F3042]` : `bg-[#0a82fd]`
              }`}
              type="submit"
              disabled={isLoading}
              onClick={formik.handleSubmit}
            >
              {isLoading ? "Loading..." : "Sign in"}
            </button>
          </div>
        </div>
        {/* <!-- Form Group --> */}
      </div>
    </>
  );
}

export default LoginForm;
