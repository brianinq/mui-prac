import { Box } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import Post from "./Post";

function Feed() {
  return (
    <Box sx={{ flex: 4 }}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}

export default Feed;
