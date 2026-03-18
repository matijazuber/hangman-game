import languagesEl from "./languages.jsx";
import Languages from "./languageStyle.jsx";
import React from "react";

function Hangman() {
  const [currentWord] = React.useState("refactor");
  const [guessedLetters, setGuessedLetters] = React.useState([]);
  const [wrongGuessCount, setWrongGuessCount] = React.useState(0);
  console.log("Wrong guesses:", wrongGuessCount);

  const currentWordArray = [...currentWord];
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = [...alphabet];

  function addLetters(value) {
    setGuessedLetters((prev) =>
      prev.includes(value) ? prev : [...prev, value],
    );

    if (!currentWordArray.includes(value)) {
      setWrongGuessCount((prev) => prev + 1);
    }
  }

  const languageElements = languagesEl.map((lang, index) => {
    const displaySymbol = index < wrongGuessCount ? "💀" : lang.name;

    return (
      <Languages
        key={lang.id}
        name={displaySymbol}
        backgroudnCl={lang.backgroundColor}
        color={lang.color}
      />
    );
  });

  function displayKeyboard() {
    return alphabetArray.map((key, index) => (
      <button
        onClick={() => addLetters(key)}
        style={
          guessedLetters.includes(key)
            ? currentWordArray.includes(key)
              ? { backgroundColor: "#10A95B" }
              : { backgroundColor: "#EC5D49" }
            : { backgroundColor: "#fcba29" }
        }
        className="keyboardButton"
        key={index}
      >
        {key.toUpperCase()}
      </button>
    ));
  }

  function displayLetters() {
    return currentWordArray.map((letter, index) => (
      <span className="spanElement" key={index}>
        {guessedLetters.includes(letter) ? letter.toUpperCase() : null}
      </span>
    ));
  }

  return (
    <>
      <header>
        <div>
          <h2>Hangman: Endgame</h2>
          <p className="hangmanDesc">
            Guess the hidden word in under 8 attempts, each wrong guess brings
            the hangman closer to completion
          </p>
        </div>
      </header>
      <main>
        <section>
          <div className="win">
            <h2 className="winP">You win!</h2>
            <p className="wellDone">
              Well done! 🎉
              <img alt="" />
            </p>
          </div>
        </section>
        <section>
          <div className="languageElementsDiv">{languageElements}</div>
        </section>
        <section>
          <div className="divDisplayLetters">{displayLetters()}</div>
        </section>
        <div className="displayKeyboard">{displayKeyboard()}</div>
        <section>
          <button className="newGameButton">New Game</button>
        </section>
      </main>
    </>
  );
}

export default Hangman;
