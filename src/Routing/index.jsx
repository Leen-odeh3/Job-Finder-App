import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home";
import Modal from "../component/Modal/Modal";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/job/:id" element={<Modal/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
