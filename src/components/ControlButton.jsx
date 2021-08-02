import { makeStyles } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  line: {
    background: "black",
    position: "absolute",
    "&:hover": {
      background: colors.pink[500],
      cursor: "pointer",
    },
  },
}));

const ControlButton = (props) => {
  const ScallingFactor = 1.8;
  const LineThickness = 5;

  const SmallX = 40;
  const MediumX = ScallingFactor * SmallX;
  const LargeX = ScallingFactor * MediumX;
  const XLargeX = ScallingFactor * LargeX;

  const { x, y, variant, isVertical, label } = props;

  let width;
  switch (variant) {
    case "sm":
      width = SmallX;
      break;
    case "md":
      width = MediumX;
      break;
    case "lg":
      width = LargeX;
      break;
    case "xlg":
      width = XLargeX;
      break;
    default:
      break;
  }

  const widthButton = isVertical ? LineThickness : width;
  const heightButton = isVertical ? width : LineThickness;

  const xButton = isVertical ? x : x - width / 2;
  const yButton = isVertical ? y - width / 2 : y;

  const classes = useStyles();

  return (
    <div
      className={classes.line}
      style={{
        left: xButton,
        bottom: yButton,

        width: widthButton,
        height: heightButton,
      }}
    />
  );
};

export default ControlButton;
