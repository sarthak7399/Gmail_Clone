import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/system";

const dialogStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "10px 10px 0 0",
};
const ComposeMail = () => {
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
      <Box>Header</Box>
      <Box>Mail Body</Box>
      <Box>Textarea</Box>
      <Box>Footer</Box>
    </Dialog>
  );
};

export default ComposeMail;
