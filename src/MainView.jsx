import {
  AppBar,
  Button,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import DirectionControl from "./components/DirectionControl";
import PrinterView from "./components/PrinterView";

const APPBAR_HEIGHT = 110;
const BAUD_WIDTH = 128;

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    paddingTop: APPBAR_HEIGHT,
  },
  mainTitle: {
    margin: theme.spacing(2),
    color: "#000",
  },
  baudInput: {
    margin: theme.spacing(2),
    position: "fixed",
    top: theme.spacing(2),
    left: theme.spacing(2),
    width: BAUD_WIDTH,
  },
  connectButton: {
    margin: theme.spacing(2),
    position: "fixed",
    top: theme.spacing(2),
    left: theme.spacing(3) + BAUD_WIDTH,
    width: BAUD_WIDTH,
  },
  appBar: {
    background: "#fff",
    borderBottom: "5px solid",
    borderBottomColor: "#000",
    height: APPBAR_HEIGHT,
  },
  content: {
    width: "100%",
    height: `calc(100vh - ${APPBAR_HEIGHT}px)`,
  },
  leftSide: {
    height: "100%",
    borderRight: "5px solid",
    borderRightColor: "#000",
    padding: theme.spacing(2),
  },
}));

const MainView = () => {
  const theme = useTheme();
  const classes = useStyles();

  const [baudRate, setBaudRate] = useState("250000");

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <Typography className={classes.mainTitle} align="center" variant="h2">
          Material Printer
        </Typography>
        <TextField
          className={classes.baudInput}
          variant="standard"
          label="Baud Rate"
          display="inline"
          value={baudRate}
          onChange={(e) => setBaudRate(e.target.value)}
        />
        <Button
          className={classes.connectButton}
          variant="text"
          color="default"
        >
          Connect
        </Button>
      </AppBar>
      <Grid
        className={classes.content}
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid className={classes.leftSide} item xs={9}>
          <DirectionControl />
          <PrinterView />
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
};

export default MainView;
