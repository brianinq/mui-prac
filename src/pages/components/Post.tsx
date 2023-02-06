import {
  Bookmark,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
  Upload,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

function Post() {
  return (
    <>
      <Card sx={{ mb: 4 }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "black" }}>BR</Avatar>}
          action={
            <IconButton aria-label="Settings">
              <MoreVert />
            </IconButton>
          }
          title="Mui cards are a gem"
          subheader="December 24, 2023"
        />
        <CardMedia
          component={"img"}
          height={"10%"}
          image="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400&h=250&fit=crop&crop=focalpoint"
          alt="fighter jet"
        />
        <CardContent>
          <Typography variant="body2" color="GrayText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            dolorum nihil dolore magnam mollitia odio? Ullam eveniet dolore
            blanditiis recusandae quam, sed ipsum aut aliquid laborum cupiditate
            qui voluptates assumenda.
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <Checkbox
              icon={<FavoriteBorder />}
              sx={{ bgColor: "red" }}
              checkedIcon={<Favorite />}
            />
          </IconButton>
          <IconButton>
            <Upload />
          </IconButton>
          <IconButton>
            <Share />
          </IconButton>
          <IconButton>
            <Bookmark />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}

export default Post;
