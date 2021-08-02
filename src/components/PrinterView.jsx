import { makeStyles } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

const ViewWidth = 500;
const ViewHeight = 500;
const LineThickness = 3;

const useStyles = makeStyles((theme) => ({
  container: {
    width: ViewWidth,
    height: ViewHeight,

    position: "relative",

    border: "5px solid black",
    display: "inline-block",
    margin: theme.spacing(2),
  },
  xAxis: {
    background: "black",

    position: "absolute",
    top: 0,
    left: (ViewWidth - LineThickness) / 2,

    width: LineThickness,
    height: ViewHeight,
  },
  yAxis: {
    background: "black",

    position: "absolute",
    top: (ViewWidth - LineThickness) / 2,
    left: 0,

    width: ViewWidth,
    height: LineThickness,
  },
}));

const PrinterView = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.xAxis} />
      <div className={classes.yAxis} />
    </div>
  );
};

export default PrinterView;
