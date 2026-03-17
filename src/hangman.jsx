import languagesEl from "./languages.jsx";
import Languages from "./languageStyle.jsx";
import React from "react";

function Hangman() {
  const languageElements = languagesEl.map((lang) => {
    return (
      <Languages
        key={lang.id}
        name={lang.name}
        backgroudnCl={lang.backgroundColor}
        color={lang.color}
      ></Languages>
    );
  });

  const [currentWord] = React.useState("refactor");

  const currentWordArray = [...currentWord];

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const alphabetArray = [...alphabet];

  function displayKeyboard() {
    return alphabetArray.map((key, index) => (
      <button className="keyboardButton" key={index}>
        {key.toUpperCase()}
      </button>
    ));
  }

  function displayLetters() {
    return currentWordArray.map((word, index) => (
      <span className="spanElement" key={index}>
        {word.toUpperCase()}
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
              Well done!🎉<img></img>
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
      </main>
    </>
  );
}
export default Hangman;
