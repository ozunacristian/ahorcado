import { ChangeEvent, useState, useRef, useEffect } from "react";

export default function Board() {
  const [playerInput, setPlayerInput] = useState("");
  const wordToGuess = "hello";
  const textRef = useRef<HTMLSpanElement>(null);

  const handleOnInputPlayerInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPlayerInput(event.target.value);
  };

  useEffect(() => {
    const letters = wordToGuess.split("");

    if (letters.includes(playerInput)) {
      const text = textRef.current;
      if (text) {
        text.textContent = text.textContent + playerInput;
      }
    }
    setPlayerInput("");
  }, [playerInput]);

  return (
    <section>
      <span ref={textRef}></span>

      <input
        type="text"
        onInput={handleOnInputPlayerInput}
        value={playerInput}
      />
    </section>
  );
}
