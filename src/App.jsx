import { ToastContainer } from "react-toastify";
import Router from "./Router";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function App() {
  return (
    <>
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
