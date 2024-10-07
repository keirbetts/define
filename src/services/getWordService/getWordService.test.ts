import { waitFor } from "@testing-library/react";
import axios from "axios";
import * as getWordService from "./getWordService";
import { mockGetWordResponse, mockGetWordsErrorResposne, mockWord } from "../../testData/mockWords";
import { DICTIONARY_API_KEY } from "../../constants/apiKeys";
import { mockNetworkHeaders } from "../../testData/networkHeaders";

jest.mock("axios");

describe("getWordService", () => {
  it("returns a 200 response with the word data", async () => {
    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve(mockGetWordResponse)
    );

    const result = await getWordService.getWord(mockWord);

    await waitFor(async () => {
      expect(axios.get).toHaveBeenCalledWith(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${mockWord}?key=${DICTIONARY_API_KEY}`, mockNetworkHeaders);
    });

    await waitFor(async () => {
      expect(result).toEqual(mockGetWordResponse.data[0].hwi.hw);
    });
  });

  it("throws error when it receives a non-200 OK response", async () => {

    (axios.get as jest.Mock).mockImplementation(() =>
      Promise.reject(mockGetWordsErrorResposne)
    );

    try {
      await getWordService.getWord(mockWord);
    } catch (error: any) {
      expect(error.data).toEqual(("Failed to get word."));
    };
  });
});