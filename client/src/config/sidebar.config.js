import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import SendIcon from "@mui/icons-material/Send";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

const SIDEBAR_DATA = [
  {
    name: "inbox",
    title: "Inbox",
    icon: InboxOutlinedIcon,
  },
  {
    name: "starred",
    title: "Starred",
    icon: StarOutlineIcon,
  },
  {
    name: "sent",
    title: "Sent",
    icon: SendIcon,
  },
  {
    name: "drafts",
    title: "Drafts",
    icon: InsertDriveFileOutlinedIcon,
  },
  {
    name: "bin",
    title: "Bin",
    icon: DeleteOutlinedIcon,
  },
  {
    name: "allmail",
    title: "All Mail",
    icon: MailOutlinedIcon,
  },
];

export default SIDEBAR_DATA;
