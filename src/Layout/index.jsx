import { Outlet } from "react-router-dom";
import Header from "../component/Header/Header";

const index = () => {
  return (
    <div>
      <div>
      <Header />
      <Outlet />
   
    </div>
    </div>
  )
}

export default index