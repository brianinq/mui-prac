import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Home from "..";

type Props = {
  text: string;
  icon: JSX.Element;
};

export default function NavListItem({ text, icon }: Props) {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={`#${text}`}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}
