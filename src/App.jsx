import {Me} from "@/pages/globals/Me.jsx";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
     <Me/>

      <Outlet />
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;