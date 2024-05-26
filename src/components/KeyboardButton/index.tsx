interface KeyboardButtonProps {
  letter: string;
  setPlayerInput: (input: string) => void;
  tries: number;
}

export default function KeyboardButton(props: Readonly<KeyboardButtonProps>) {
  const handleOnClick = (char: string) => {
    props.setPlayerInput(char);
  };

  return (
    <button
      disabled={props.tries <= 0}
      className="keyboardButton"
      onClick={() => {
        handleOnClick(props.letter);
      }}
    >
      {props.letter}
    </button>
  );
}
