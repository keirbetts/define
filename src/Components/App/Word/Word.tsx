import { useState, useEffect } from "react";
import { getWord } from "../../../services/getWordService/getWordService";
import { randomWordGenerator } from "../../../utils/words";
import { TWENTY_FOUR_HOURS } from "../../../constants/intervals";



export const Word = () => {

  const [activeWord, setActiveWord] = useState<string>("");

  const getWordForGuess = async () => {

    let newWord = randomWordGenerator();
    const response = await getWord(newWord);
    setActiveWord(response);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getWordForGuess();
      console.log("Logs every 24 hours");
    }, 6000);

    return () => clearInterval(interval);
  }, []);


  console.log(activeWord, "word");

  // TODO: user guess and submit - remove weird symbols returned from api

  return (
    <div className="word-wrapper">
      Define
      < br />
      <br />
      {activeWord}
      <br />
      <br />
      <textarea
        placeholder="Enter word definition..."
      ></textarea>
      <br />
      <br />
      <button>
        Submit guess
      </button>
    </div>
  );
};