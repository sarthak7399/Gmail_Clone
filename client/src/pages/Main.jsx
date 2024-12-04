import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div>
      <Header toggleDrawer={toggleDrawer} />
      <Sidebar openDrawer={openDrawer} />
      Hello from Main
    </div>
  );
};

export default Main;
