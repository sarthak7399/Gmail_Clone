import { InputBase, Typography, styled, TextField, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const dialogStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0",
};

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  background: "#F2F6FC",
  '& > p': {
    fontSize: "14px",
    fontWeight: "500",
  }
});

const RecipientsWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  "& > div": {
    fontSize: "14px",
    borderBottom: "1px solid #F5F5F5",
    marginTop: "10px",
  },
});

const Footer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  alignItems: "center",
  background: "#F2F6FC",
});

const SendButton = styled(Button)({
  background: "#0B57D0",
  color: "#fff",
  fontWeight: "500",
  padding: "16px",
  borderRadius: "18px",
  width: "150px",
  textTransform: "none",
});

const ComposeMail = ({ openDialog, setOpenDialog }) => { //Object Destructuring

  const config = {
    Host: "smtp.elasticemail.com",
    Port: "2525",
    Username: "sarthak@yopmail.com",
    Password: "B0DDFE5C4A3E0E3E7609A2F35C67E951D68D",
  }

  const closeComposeMail = (e) => {
    e.preventDefault(true);
    setOpenDialog(false);
  };

  const sendMail = (e) => {

    e.preventDefault(true);

    if (window.Email) {
      // Scripts inside index.html are loaded globally, not inside component scope.
      window.Email.send({
        ...config, // Spread Operator
        To: 'sarthak753@gmail.com',
        From: "sarthak753@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
      }).then(
        message => alert(message)
      );
    }

    else {
      alert("Email is not supported in your browser");
    }

    setOpenDialog(false);
  };

  return (
    <Dialog open={openDialog} PaperProps={{ sx: dialogStyle }}>
      <Header>
        <Typography>New Message</Typography>
        <CloseIcon fontSize="small" onClick={(e) => closeComposeMail(e)} />
      </Header>
      <RecipientsWrapper>
        <InputBase placeholder="Recipients" />
        <InputBase placeholder="Subject" />
      </RecipientsWrapper>
      <TextField multiline={true} rows={15} placeholder="Type a message" sx={{ '& .MuiInputBase-colorPrimary': { border: "none" } }} />
      <Footer>
        <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
        <DeleteOutlineIcon onClick={() => setOpenDialog(false)} /></Footer>
    </Dialog>
  );
};

export default ComposeMail;
