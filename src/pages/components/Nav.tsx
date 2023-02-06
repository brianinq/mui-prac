import { AppBar, Badge, Box, InputBase, Toolbar } from "@mui/material";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { Mail, Notifications } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";

function Nav() {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    background: "white",
    color: "black",
    width: "40%",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
  }));
  const NotificationIcons = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }));
  const NotificationAvatar = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography sx={{ display: { xs: "none", sm: "block" } }} variant="h6">
          MuiApp
        </Typography>
        <AddReactionIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search" />
        </Search>
        <NotificationIcons>
          <Badge badgeContent={8} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/8989478/pexels-photo-8989478.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
        </NotificationIcons>
        <NotificationAvatar>
          <Typography variant="caption">John</Typography>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/8989478/pexels-photo-8989478.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
        </NotificationAvatar>
      </StyledToolbar>
    </AppBar>
  );
}

export default Nav;
