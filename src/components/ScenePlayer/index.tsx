import "./ScenePlayer.css";
import type { Part } from "../ObjectScene";
import ObjectScene from "../ObjectScene";

interface ScenePlayerProps {
  tries: number;
}

type PartObject = {
  part: Part;
  numberConditionToShow: number;
};

export default function ScenePlayer(props: Readonly<ScenePlayerProps>) {
  const parts: PartObject[] = [
    { part: "head", numberConditionToShow: 5 },
    { part: "body", numberConditionToShow: 5 },
    { part: "leftArm", numberConditionToShow: 5 },
    { part: "rightArm", numberConditionToShow: 5 },
    { part: "leftLeg", numberConditionToShow: 5 },
    { part: "rightLeg", numberConditionToShow: 5 },
    { part: "rope", numberConditionToShow: 5 },
    { part: "stickVertical", numberConditionToShow: 5 },
    { part: "stickHorizontal", numberConditionToShow: 5 },
  ];

  return (
    <>
      <h2>
        {props.tries > 0
          ? `You are still surviving ${props.tries}`
          : "You are die"}
      </h2>
      <div className="scenePlayer">
        {parts.map((partObject) => {
          return (
            <ObjectScene
              key={partObject.part}
              {...partObject}
              tries={props.tries}
            />
          );
        })}
      </div>
    </>
  );
}
