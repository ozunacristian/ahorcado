import KeyboardButton from "../KeyboardButton";
import "./ButtonBox.css";

interface ButtonBoxProps {
  setPlayerInput: (input: string) => void;
  tries: number;
}

export default function ButtonBox(props: Readonly<ButtonBoxProps>) {
  const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(65 + i));

  return (
    <section className="buttonBox">
      {alphabet.map((letter) => {
        return (
          <KeyboardButton
            key={letter}
            tries={props.tries}
            letter={letter}
            setPlayerInput={props.setPlayerInput}
          />
        );
      })}
    </section>
  );
}
