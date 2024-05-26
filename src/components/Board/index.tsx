import { ChangeEvent, useState, useRef, useEffect } from "react";
import ScenePlayer from "../ScenePlayer";
import "./Board.css";
import ButtonBox from "../ButtonBox";

export default function Board() {
  const [playerInput, setPlayerInput] = useState("");
  const [tries, setTries] = useState(9);
  const wordToGuess = "HELLO";
  const textRef = useRef<HTMLSpanElement>(null);

  const handleOnInputPlayerInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPlayerInput(event.target.value);
  };

  useEffect(() => {
    const letters = wordToGuess.split("");
    if (playerInput && !letters.includes(playerInput)) {
      setTries((prevTries) => prevTries - 1);
    }
    if (letters.includes(playerInput)) {
      const text = textRef.current;
      text!.textContent = text!.textContent + playerInput;
    }
    setPlayerInput("");
  }, [playerInput]);

  return (
    <section className="mainSection">
      <ScenePlayer tries={tries} />

      <span ref={textRef}></span>

      <input
        disabled={tries === 0}
        type="text"
        onInput={handleOnInputPlayerInput}
        value={playerInput}
      />

      <ButtonBox setPlayerInput={setPlayerInput} tries={tries} />
    </section>
  );
}
