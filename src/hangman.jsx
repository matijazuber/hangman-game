import languagesEl from "./languages.jsx";
import Languages from "./languageStyle.jsx";
import React from "react";

function Hangman() {
  const [currentWord, setCurrentWord] = React.useState("refactor");
  const [guessedLetters, setGuessedLetters] = React.useState([]);
  const [wrongGuessCount, setWrongGuessCount] = React.useState(0);
  console.log("Wrong guesses:", wrongGuessCount);

  const currentWordArray = [...currentWord];
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = [...alphabet];

  function resetGame() {
    setGuessedLetters([]);
    setWrongGuessCount(0);
    setCurrentWord("refactor");
  }

  function addLetters(value) {
    setGuessedLetters((prev) =>
      prev.includes(value) ? prev : [...prev, value],
    );

    if (!currentWordArray.includes(value)) {
      setWrongGuessCount((prev) => prev + 1);
    }
  }

  const isGameWon = currentWordArray.every((letter) =>
    guessedLetters.includes(letter),
  );

  const isGameOver = wrongGuessCount >= 8;

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
        disabled={isGameOver || isGameWon}
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
          {isGameOver ? (
            <>
              <div className="lose">
                <h2 className="loseP">Game over!</h2>
                <p className="gameOver">You lose! Better luck next time!</p>
              </div>
            </>
          ) : null}
          {isGameWon ? (
            <div className="win">
              <h2 className="winP">You win!</h2>
              <p className="wellDone">Well done! 🎉</p>
            </div>
          ) : null}
        </section>
        <section>
          <div className="languageElementsDiv">{languageElements}</div>
        </section>
        <section>
          <div className="divDisplayLetters">{displayLetters()}</div>
        </section>
        <div className="displayKeyboard">{displayKeyboard()}</div>
        <section>
          {isGameOver ? (
            <button onClick={resetGame} className="newGameButton">
              New Game
            </button>
          ) : null}
        </section>
      </main>
    </>
  );
}

export default Hangman;
