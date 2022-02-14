import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  TextField,
  ListItemIcon,
} from "@material-ui/core";
import {
  Person as PersonIcon,
  Public as PublicIcon,
  Home as HomeIcon,
} from "@material-ui/icons";

import { Auth, API, graphqlOperation } from "aws-amplify";

import { createPost } from "../graphql/mutations";
import { useHistory } from "react-router";
import { useParams } from "react-router";

import Amplify from "aws-amplify";
import config from "../aws-exports";

Amplify.configure(config);

const drawerWidth = 340;
const MAX_POST_CONTENT_LENGTH = 140;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    position: "relative",
  },
  drawerPaper: {
    width: drawerWidth,
    position: "relative",
  },
  toolbar: theme.mixins.toolbar,
  textField: {
    width: drawerWidth,
  },
  list: {
    width: 300,
  },
}));

const Sideber: any = ({ activeListItem }: any) => {
  const classes = useStyles();
  const history = useHistory();

  const [value, setValue] = React.useState<any>("");
  const [isError, setIsError] = React.useState<any>(false);
  const [helperText, setHelperText] = React.useState<any>("");

  const handleChange = (event: any) => {
    setValue(event.target.value);
    if (event.target.value.length > MAX_POST_CONTENT_LENGTH) {
      setIsError(true);
      setHelperText(MAX_POST_CONTENT_LENGTH - event.target.value.length);
    } else {
      setIsError(false);
      setHelperText("");
    }
  };

  const { userId }: any = useParams();

  const onPost = async () => {
    const random = Math.random();
    const random2 = Math.random();
    const res: any = await API.graphql(
      graphqlOperation(createPost, {
        input: {
          type: "post",
          content: value,
          id: `${random}`,
          timestamp: Math.floor(Date.now() / 1000),
          owner: userId,
          timelinePostId: `${random2}`,
        },
      })
    );
    // const onPost = async () => {
    //   const random = Math.random();
    //   const res = await API.graphql(
    //     graphqlOperation(createPost, {
    // input: {
    //   type: "post",
    //   content: value,
    //   id: `${random}`,
    //   timestamp: Math.floor(Date.now() / 1000),
    //   owner: userId,
    // },
    //     })
    //   );

    console.log(res);
    setValue("");
  };

  const signOut = () => {
    Auth.signOut()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <List>
        <ListItem
          button
          selected={activeListItem === "Home"}
          onClick={() => {
            history.push("/");
          }}
          key="home"
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          selected={activeListItem === "global-timeline"}
          onClick={() => {
            Auth.currentAuthenticatedUser().then((user) => {
              history.push("/global-timeline");
            });
          }}
          key="global-timeline"
        >
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary="Global Timeline" />
        </ListItem>
        <ListItem
          button
          selected={activeListItem === "profile"}
          onClick={() => {
            Auth.currentAuthenticatedUser().then((user) => {
              history.push("/" + user.username);
            });
          }}
          key="profile"
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem key="post-input-field">
          <ListItemText
            primary={
              <TextField
                error={isError}
                helperText={helperText}
                id="post-input"
                label="Type your post!"
                multiline
                rowsMax="8"
                variant="filled"
                value={value}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            }
          />
        </ListItem>
        <ListItem key="post-button">
          <ListItemText
            primary={
              <Button
                variant="contained"
                color="primary"
                disabled={isError}
                onClick={onPost}
                fullWidth
              >
                Post
              </Button>
            }
          />
        </ListItem>
        <ListItem key="logout">
          <ListItemText
            primary={
              <Button variant="outlined" onClick={signOut} fullWidth>
                Logout
              </Button>
            }
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sideber;
