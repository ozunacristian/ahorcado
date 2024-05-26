import { useState, useEffect } from "react";
import "./ScenePlayer.css";

export default function ScenePlayer() {
  const [tries, setTries] = useState(8);

  return (
    <div className="scenePlayer">
      <div className="stickHorizontal"></div>
      <div className="stickVertical"></div>
      <div className="rope"></div>
      <div className="head"></div>
      <div className="body"></div>
      <div className="leftArm"></div>
      <div className="rightArm"></div>
      <div className="leftLeg"></div>
      <div className="rightLeg"></div>
    </div>
  );
}
