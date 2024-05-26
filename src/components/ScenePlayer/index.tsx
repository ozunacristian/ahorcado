import "./ScenePlayer.css";

interface ScenePlayerProps {
  tries: number;
}

export default function ScenePlayer(props: Readonly<ScenePlayerProps>) {
  return (
    <>
      <h2>
        {props.tries > 0
          ? `You are still surviving ${props.tries}`
          : "You are die"}
      </h2>
      <div className="scenePlayer">
        <div
          className="stickHorizontal"
          style={{
            backgroundColor: props.tries <= 8 ? "#000000" : "transparent",
          }}
        ></div>
        <div
          className="stickVertical"
          style={{
            backgroundColor: props.tries <= 7 ? "#000000" : "transparent",
          }}
        ></div>
        <div
          className="rope"
          style={{
            backgroundColor: props.tries <= 6 ? "#000000" : "transparent",
          }}
        ></div>
        <div
          className="head"
          style={{
            backgroundColor: props.tries <= 5 ? "#000000" : "transparent",
          }}
        ></div>
        <div
          className="body"
          style={{
            backgroundColor: props.tries <= 4 ? "#000000" : "transparent",
          }}
        ></div>
        <div
          className="leftArm"
          style={{
            backgroundColor: props.tries <= 3 ? "#000000" : "transparent",
          }}
        ></div>
        <div
          className="rightArm"
          style={{
            backgroundColor: props.tries <= 2 ? "#000000" : "transparent",
          }}
        ></div>
        <div
          className="leftLeg"
          style={{
            backgroundColor: props.tries <= 1 ? "#000000" : "transparent",
          }}
        ></div>
        <div
          className="rightLeg"
          style={{
            backgroundColor: props.tries <= 0 ? "#000000" : "transparent",
          }}
        ></div>
      </div>
    </>
  );
}
