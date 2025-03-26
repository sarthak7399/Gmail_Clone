import { InputBase, Typography, styled, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';

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

const ComposeMail = () => {
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
      <Header>
        <Typography>New Message</Typography>
        <CloseIcon fontSize="small" />
      </Header>
      <RecipientsWrapper>
        <InputBase placeholder="Recipients" />
        <InputBase placeholder="Subject" />
      </RecipientsWrapper>
      <TextField multiline={true} rows={15} placeholder="Type a message" sx={{ '& .MuiInputBase-root-MuiOutlinedInput-root': { border: 'none' } }} />
      <Box>Footer</Box>
    </Dialog>
  );
};

export default ComposeMail;
