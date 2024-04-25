import React, { useState } from "react";
import googleLogo from "../../assets/img/google-logo.png";
import appleLogo from "../../assets/img/apple-logo.png";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../loader/index";

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

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
      <div className="crancy-wc__heading">
        <h3 className="crancy-wc__form-title crancy-wc__form-title__one">
          Login to your account
        </h3>
      </div>
      <div className="crancy-wc__form-main">
        {/* <!-- Form Group --> */}
        <div className="form-group">
          <div className="form-group__input">
            <input
              className="crancy-wc__form-input"
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
              className="crancy-wc__form-input"
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
        <div className="form-group form-mg-top25">
          <div className="crancy-wc__button">
            <button
              className="ntfmax-wc__btn"
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
