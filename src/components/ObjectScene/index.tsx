import "./ObjectScene.css";

export type Part =
  | "head"
  | "body"
  | "leftArm"
  | "rightArm"
  | "leftLeg"
  | "rightLeg"
  | "rope"
  | "stickVertical"
  | "stickHorizontal";

interface ObjectSceneProps {
  tries: number;
  part: Part;
  numberConditionToShow: number;
}

export default function ObjectScene(props: Readonly<ObjectSceneProps>) {
  return (
    <div
      className={props.part}
      style={{
        backgroundColor:
          props.tries <= props.numberConditionToShow
            ? "#000000"
            : "transparent",
      }}
    ></div>
  );
}
