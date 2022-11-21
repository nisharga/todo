import "./App.css";
import Body from "./Components/Shared/Body/Body";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  //   Add Task
  // • List of Tasks

  // • List of Pending Tasks

  // • List of Completed Tasks

  // • Delete Task
  // • Mark as Completed

  return (
    <div>
      <Header />
      <Body />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
