import { AppBar, Toolbar, styled } from "@mui/material";
import { gmailLogo } from "../constants/constants";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

// styled is used to add CSS on top of components as Function Component
const StyledAppBar = styled(AppBar)({
  background: "#F5F5F5",
  boxShadow: "none",
});

const SearchWrapper = styled(Box)({
  background: "#EDEDED",
  marginLeft: "20px",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  minWidth: "50%",
  justifyContent: "space-between",
  padding: "0 10px",
  // This '& > div' means select all direct children, & means select the current element and > div means select the div element
  "& > div": {
    width: "100%",
    padding: "0 10px",
  },
});

const OptionsWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  "& > svg": {
    marginRight: "20px",
  },
});

const Header = ({ toggleDrawer }) => {
  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <MenuIcon color="action" onClick={toggleDrawer} />
          <img
            src={gmailLogo}
            alt="gmail logo"
            style={{ width: "100", marginLeft: "15px" }}
          />
          {/* Box is a wrapper like div that can be styled */}
          <SearchWrapper>
            <SearchIcon color="action" />
            <InputBase placeholder="Search mail" />
            <TuneIcon color="action" />
          </SearchWrapper>
          <OptionsWrapper>
            <HelpOutlineOutlinedIcon color="action" />
            <SettingsOutlinedIcon color="action" />
            <AppsRoundedIcon color="action" />
            <AccountCircleRoundedIcon color="action" />
          </OptionsWrapper>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
};

export default Header;
