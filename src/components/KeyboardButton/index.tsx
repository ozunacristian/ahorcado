interface KeyboardButtonProps {
  letter: string;
  setPlayerInput: (input: string) => void;
}

export default function KeyboardButton(props: Readonly<KeyboardButtonProps>) {
  const handleOnClick = (char: string) => {
    props.setPlayerInput(char);
  };

  return (
    <button
      className="keyboardButton"
      onClick={() => {
        handleOnClick(props.letter);
      }}
    >
      {props.letter}
    </button>
  );
}
