import { Drawer } from "@mui/material";
import SideBarContent from "./SideBarContent";

const Sidebar = ({ openDrawer }) => {
  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      hideBackdrop={true}
      // ModalProps is a prop that is used to configure the Modal component, means a dialog box
      ModalProps={{ keepMounted: true }}
      variant="persistent"
      // sx is a CSS property, that is used to style the component
      sx={{
        "& .MuiDrawer-paper": {
          overflow: "hidden",
          marginTop: "64px",
          width: "250px",
          background: "#F5F5F5",
          borderRight: "none",
          height: "calc(100vh-64px)",
        },
      }}
    >
      <SideBarContent />
    </Drawer>
  );
};

export default Sidebar;
