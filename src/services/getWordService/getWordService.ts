import axios, { HttpStatusCode } from "axios";
import { DICTIONARY_API_KEY } from "../../constants/apiKeys";

export const getWord = async (chosenWord: string) => {

  let url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${chosenWord}?key=${DICTIONARY_API_KEY}`;

  let response = await axios.get(url, {
    headers: {
      Accept: "application/json",
    },
  });

  console.log(response, "response");

  if (response && response.status !== HttpStatusCode.Ok) {
    throw new Error("Failed to get word");
  };
  return response.data[0].meta.id;
};

// TODO: request to post definition

