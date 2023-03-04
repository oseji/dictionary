"use strict";

const link = `https://api.dictionaryapi.dev/api/v2/entries/en/dog
`;

const request = new XMLHttpRequest();

request.open("get", link);
request.send();

request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);
  const result1 = data.meanings[1].definitions[0].definition;

  console.log(result1);
  console.log(data.meanings);

  data.meanings.forEach(function (i) {
    const partsOfSpeech = i.partOfSpeech;
    const definitions = i.definitions;
    console.log(partsOfSpeech);
    console.log(definitions);

    definitions.forEach(function (i) {
      console.log(i.definition);
    });
  });
});
