"use strict";

let apiSearchWord;
// const link = `https://api.dictionaryapi.dev/api/v2/entries/en/${apiSearchWord}
// `;

const searchInput = document.querySelector(".word-input");
const searchBtn = document.querySelector(".search");
const resultHeading = document.querySelector(".results-heading");
const searchedWordDisplay = document.querySelector(".searched-word");
const searchResult = document.querySelector(".search-result");
const wordResult = document.querySelector(".searched-text");

// console.log(
//   searchInput,
//   searchBtn,
//   resultHeading,
//   searchedWordDisplay,
//   searchResult
// );

//CODE

searchBtn.addEventListener("click", function () {
  apiSearchWord = searchInput.value;
  console.log(apiSearchWord);

  const request = new XMLHttpRequest();
  request.open(
    "get",
    `https://api.dictionaryapi.dev/api/v2/entries/en/${apiSearchWord}
   `
  );
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    //console.log(`data`, data);

    //console.log(data.meanings);
    const partsOfSpeech = data.meanings[0].partOfSpeech;
    const textDefinition = data.meanings[0].definitions[0].definition;
    const phonetics =
      data.phonetic === undefined ? data.phonetics[1].text : data.phonetic;
    //console.log("phonetic", phonetics);

    //changing info on the screen
    resultHeading.innerHTML = `Results for ${apiSearchWord.toUpperCase()}`;
    //
    searchedWordDisplay.innerHTML = `${apiSearchWord.toUpperCase()} | ${partsOfSpeech.toUpperCase()} | ${phonetics}`;
    //
    wordResult.innerHTML = `${textDefinition}`;
  });
});
