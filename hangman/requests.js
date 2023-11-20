// HTTP (Hypertext Transfer Protocol)
// Request - What we want to do
// Response - What was actually done

export function getPuzzle(wordCount) {
  return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error(`Unable to fetch puzzle, ${response.status} response`);
    })
    .then((data) => data.puzzle);
}

export function getPuzzleSync(wordCount) {
  const request = new XMLHttpRequest();
  let response;
  request.open('GET', `https://puzzle.mead.io/slow-puzzle?wordCount=${wordCount}`, false); // passing false as 3rd argument makes it run synchronously
  request.send();

  if (request.readyState === 4 && request.status === 200) {
    const data = JSON.parse(request.responseText);
    response = data.puzzle;
  } else if (request.readyState === 4) {
    response = request.status;
    throw new Error(`Nah rudeboy, ${response}`);
  }
  return response;
}

export function getCountry(countryCode) {
  return fetch('https://restcountries.com/v3.1/all')
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error(`Unable to fetch data, ${response.status} response`);
    })
    .then((data) => {
      const countryName = data.find((country) => country.cca2 === countryCode);
      return countryName.name.common;
    });
}

export function getLocation() {
  return fetch('http://ip-api.com/json/')
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error(`Unable to fetch location, ${response.status} response`);
    })
    .then((data) => [data.city, data.regionName, data.country, data.countryCode]);
}
