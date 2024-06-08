import "./ScenePlayer.css";
import type { Part } from "../ObjectScene";
import ObjectScene from "../ObjectScene";

interface ScenePlayerProps {
  tries: number;
}
export default function ScenePlayer(props: Readonly<ScenePlayerProps>) {
  const parts: Part[] = [
    "stickVertical",
    "stickHorizontal",
    "rope",
    "head",
    "body",
    "leftArm",
    "rightArm",
    "leftLeg",
    "rightLeg",
  ];

  return (
    <>
      <h2
      data-testid = "h2-ScenePlayer"
      >
        {props.tries > 0
          ? `You are still surviving ${props.tries}`
          : "You are dead"}
      </h2>
      <div className="scenePlayer">
        {parts.map((part, index) => {
          return (
            <ObjectScene
              key={part}
              tries={props.tries}
              part={part}
              numberConditionToShow={8 - index}
            />
          );
        })}
      </div>
    </>
  );
}
