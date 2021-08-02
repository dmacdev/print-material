import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ControlButton from "./ControlButton";

const ControlX = 500;
const ControlY = 500;

const LineThickness = 5;
const LineSpacing = 50;

const ScallingFactor = 1.8;
const SmallX = 40;
const MediumX = ScallingFactor * SmallX;
const LargeX = ScallingFactor * MediumX;
const XLargeX = ScallingFactor * LargeX;

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: ControlX,
    height: ControlY,
    position: "relative",

    display: "inline-block",
    margin: theme.spacing(2),
  },
  verticalLine: {
    background: "black",

    position: "absolute",
    top: 0,
    left: (ControlX - LineThickness) / 2,

    width: LineThickness,
    height: ControlY,
  },
  horizontalLine: {
    background: "black",

    position: "absolute",
    top: (ControlX - LineThickness) / 2,
    left: 0,

    width: ControlY,
    height: LineThickness,
  },

  smallChange: {
    background: "black",

    position: "absolute",
    top: ControlY / 2 - LineThickness - LineSpacing,
    left: (ControlX - SmallX) / 2,

    width: SmallX,
    height: LineThickness,
  },
  mediumChange: {
    background: "black",

    position: "absolute",
    top: ControlY / 2 - (LineThickness + LineSpacing) * 2,
    left: (ControlX - MediumX) / 2,

    width: MediumX,
    height: LineThickness,
  },
  largeChange: {
    background: "black",

    position: "absolute",
    top: ControlY / 2 - (LineThickness + LineSpacing) * 3,
    left: (ControlX - LargeX) / 2,

    width: LargeX,
    height: LineThickness,
  },
  xLargeChange: {
    background: "black",

    position: "absolute",
    top: ControlY / 2 - (LineThickness + LineSpacing) * 4,
    left: (ControlX - XLargeX) / 2,

    width: XLargeX,
    height: LineThickness,
  },
}));

const DirectionControl = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.verticalLine} />
      <div className={classes.horizontalLine} />

      {/* +y controls */}
      <>
        <ControlButton
          x={ControlX / 2}
          y={ControlY / 2 + LineSpacing}
          variant="sm"
          isVertical={false}
          label="0.1mm"
        />
        <ControlButton
          x={ControlX / 2}
          y={ControlY / 2 + (LineThickness + LineSpacing) * 2}
          variant="md"
          isVertical={false}
          label="1mm"
        />
        <ControlButton
          x={ControlX / 2}
          y={ControlY / 2 + (LineThickness + LineSpacing) * 3}
          variant="lg"
          isVertical={false}
          label="10mm"
        />
        <ControlButton
          x={ControlX / 2}
          y={ControlY / 2 + (LineThickness + LineSpacing) * 4}
          variant="xlg"
          isVertical={false}
          label="100mm"
        />
      </>

      {/* -y controls */}
      <>
        <ControlButton
          x={ControlX / 2}
          y={ControlY / 2 - LineSpacing}
          variant="sm"
          isVertical={false}
          label="0.1mm"
        />
        <ControlButton
          x={ControlX / 2}
          y={ControlY / 2 - (LineThickness + LineSpacing) * 2}
          variant="md"
          isVertical={false}
          label="1mm"
        />
        <ControlButton
          x={ControlX / 2}
          y={ControlY / 2 - (LineThickness + LineSpacing) * 3}
          variant="lg"
          isVertical={false}
          label="10mm"
        />
        <ControlButton
          x={ControlX / 2}
          y={ControlY / 2 - (LineThickness + LineSpacing) * 4}
          variant="xlg"
          isVertical={false}
          label="100mm"
        />
      </>

      {/* -X controls */}
      <>
        <ControlButton
          x={ControlX / 2 + LineSpacing}
          y={ControlY / 2}
          variant="sm"
          isVertical={true}
          label="0.1mm"
        />
        <ControlButton
          x={ControlX / 2 + (LineThickness + LineSpacing) * 2}
          y={ControlY / 2}
          variant="md"
          isVertical={true}
          label="1mm"
        />
        <ControlButton
          x={ControlX / 2 + (LineThickness + LineSpacing) * 3}
          y={ControlY / 2}
          variant="lg"
          isVertical={true}
          label="10mm"
        />
        <ControlButton
          x={ControlX / 2 + (LineThickness + LineSpacing) * 4}
          y={ControlY / 2}
          variant="xlg"
          isVertical={true}
          label="100mm"
        />
      </>

      {/* -X controls */}
      <>
        <ControlButton
          x={ControlX / 2 - LineSpacing}
          y={ControlY / 2}
          variant="sm"
          isVertical={true}
          label="0.1mm"
        />
        <ControlButton
          x={ControlX / 2 - (LineThickness + LineSpacing) * 2}
          y={ControlY / 2}
          variant="md"
          isVertical={true}
          label="1mm"
        />
        <ControlButton
          x={ControlX / 2 - (LineThickness + LineSpacing) * 3}
          y={ControlY / 2}
          variant="lg"
          isVertical={true}
          label="10mm"
        />
        <ControlButton
          x={ControlX / 2 - (LineThickness + LineSpacing) * 4}
          y={ControlY / 2}
          variant="xlg"
          isVertical={true}
          label="100mm"
        />
      </>
    </div>
  );
};

export default DirectionControl;
