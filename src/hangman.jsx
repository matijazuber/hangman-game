function Hangman() {
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
        <div className="win">
          <h2 className="winP">You win!</h2>
          <p className="wellDone">
            Well done!🎉<img></img>
          </p>
        </div>
      </main>
    </>
  );
}
export default Hangman;
