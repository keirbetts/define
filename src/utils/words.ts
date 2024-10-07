import wordData from "../../src/data/wordList.json";


export const randomWordGenerator = () => {
  let wordArray = wordData.data.slice(0);
  if (wordArray.length < 1) {
    wordArray = wordData.data.slice(0);
  }
  let index = Math.floor(Math.random() * wordArray.length);
  let item = wordArray[index];
  wordArray.splice(index, 1);
  return item;
};