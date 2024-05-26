import "./ButtonBox.css";

interface ButtonBoxProps {
  setPlayerInput: (input: string) => void;
}

export default function ButtonBox(props: Readonly<ButtonBoxProps>) {
  const handleOnClick = (char: string) => {
    props.setPlayerInput(char);
  };

  const generateButtons = () => {
    // generateButtons is a function that returns an array of buttons with the letters of the alphabet
    const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(65 + i));

    return alphabet.map((letter) => (
      <button
        key={letter}
        onClick={() => handleOnClick(letter)}
        className="button"
      >
        {letter}
      </button>
    ));
  };
  return <section className="buttonBox">{generateButtons()}</section>;
}
