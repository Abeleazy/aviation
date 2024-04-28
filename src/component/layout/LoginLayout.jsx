import React from "react";
import { Link, Outlet } from "react-router-dom";
import bg from "../../assets/img/credential-bg.svg";
import logoW from "../../assets/img/aviation-logo.png";
import welcomeImg from "../../assets/img/welcome-vector.png";

function LoginLayout({ children }) {
  return (
    <div className="w-screen h-screen">
      <section
        className="w-screen h-screen"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-full h-full">
          <div className="w-full h-full">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full h-full flex flex-col items-center justify-center">
                {/* <!-- Welcome Banner --> */}
                <div className="flex w-[80%] h-[80%] overflow-hidden">
                  <div className="crancy-wc__banner flex-1 overflow-hidden">
                    <div className="crancy-wc__logo">
                      {/* <Link to="/">
                        <img src={logoW} alt="#" />
                      </Link> */}
                    </div>
                    <img src={welcomeImg} alt="#" className="w-full h-full" />
                  </div>
                  <div className="bg-[#FFF] flex-1 px-8 flex flex-col justify-center">
                    {/* <!-- Sign in Form --> */}
                    {children}
                    <Outlet />
                    {/* <!-- End Sign in Form --> */}
                  </div>
                </div>
                {/* <!-- End Welcome Banner --> */}
                {/* <!-- Footer Top --> */}
                <div className="crancy-wc__footer--top">
                  {/* <div className="crancy-wc__footer">
                    <ul className="crancy-wc__footer--list list-none">
                      <li>
                        <Link to="#">Terms & Condition</Link>
                      </li>
                      <li>
                        <Link to="#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="#">Help</Link>
                      </li>
                    </ul>
                    <div className="crancy-wc__footer--languages">
                      <select
                        className="crancy-wc__footer--language"
                        defaultValue="English"
                      >
                        <option data-display="English">English</option>
                        <option value="2">Bengali</option>
                        <option value="3">Frances</option>
                      </select>
                    </div>
                  </div> */}
                  <p className="crancy-wc__footer--copyright">
                    @ 2024 <a href="#">Aviation Medical Assist.</a> All Right
                    Reserved.{" "}
                  </p>
                </div>
                {/* <!-- End Footer Top --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginLayout;
