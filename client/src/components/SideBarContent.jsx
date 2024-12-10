import { Box, styled } from "@mui/material";
import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import SIDEBAR_DATA from "../config/sidebar.config";
import ComposeMail from "./ComposeMail";

const ComposeButton = styled(Button)({
  background: "#C2E7FF",
  padding: "16px",
  borderRadius: "15px",
  minWidth: "150px",
  textTransform: "none",
});

const Container = styled(Box)({
  padding: "20px",
  "& > ul": {
    padding: "10px 0 0 5px",
    fontSize: "15px",
    fontWeight: "500",
    cursor: "pointer",
  },
  "& > div > ul > li > svg": {
    marginRight: "20px",
  },
});

const SideBarContent = () => {
  return (
    <Container>
      <ComposeButton>
        <CreateIcon />
        Compose
      </ComposeButton>
      <List>
        {SIDEBAR_DATA.map((item) => (
          <ListItem button key={item.name}>
            <item.icon fontSize="small" />
            {item.title}
          </ListItem>
        ))}
      </List>
      <ComposeMail />
    </Container>
  );
};

export default SideBarContent;
