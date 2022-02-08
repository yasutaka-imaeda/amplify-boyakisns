import React from "react";
import Amplify from "aws-amplify";
// import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "./aws-exports";

import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import AllPosts from "../src/containers/AllPosts";
import PostsBySpecifiedUser from "./containers/PostsBySpecifiedUser";

Amplify.configure(awsconfig);

const drawerWidth = 240;

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#1EA1F2",
      contrastText: "#fff",
    },
    background: {
      default: "#15202B",
      paper: "#15202B",
    },
    divider: "#37444C",
  },
  overrides: {
    MuiButton: {
      color: "white",
    },
  },
  typography: {
    fontFamily: ["Arial"].join(","),
  },
  status: {
    danger: "orange",
  },
} as any);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    width: 800,
    marginLeft: "auto",
    marginRight: "auto",
  },
  appBar: {
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function App() {
  const [authState, setAuthState] = React.useState<any>();
  const [user, setUser] = React.useState<any>();

  const classes = useStyles();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  // return (
  //   <AmplifyAuthenticator>
  //     <div className={classes.root}>
  //       <ThemeProvider theme={theme}>
  //         <CssBaseline />
  //         <HashRouter>
  //           <Switch>
  //             <Route exact path="/" component={AllPosts} />
  //             <Route exact path="/global-timeline" component={AllPosts} />
  //             <Route exact path="/:userId" component={PostsBySpecifiedUser} />
  //             <Redirect path="*" to="/" />
  //           </Switch>
  //         </HashRouter>
  //       </ThemeProvider>
  //     </div>
  //   </AmplifyAuthenticator>
  // );
  return authState === AuthState.SignedIn && user ? (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
          <Switch>
            <Route exact path="/" component={AllPosts} />
            <Route exact path="/global-timeline" component={AllPosts} />
            <Route exact path="/:userId" component={PostsBySpecifiedUser} />
            <Redirect path="*" to="/" />
          </Switch>
        </HashRouter>
      </ThemeProvider>
    </div>
  ) : (
    <AmplifyAuthenticator>
      <AmplifySignUp
        slot="sign-up"
        formFields={[
          { type: "username" },
          { type: "password" },
          { type: "email" },
        ]}
      />
    </AmplifyAuthenticator>
  );
}

export default App;
