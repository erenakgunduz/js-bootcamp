// HTTP (Hypertext Transfer Protocol)
// Request - What we want to do
// Response - What was actually done

export function getPuzzle(callback) {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data.puzzle);
    } else if (e.target.readyState === 4) {
      callback(e.target.status, undefined);
    }
  });

  request.open('GET', 'https://puzzle.mead.io/puzzle?wordCount=2');
  request.send();
}

export function getPuzzleSync() {
  const request = new XMLHttpRequest();
  let response;
  request.open('GET', 'https://puzzle.mead.io/slow-puzzle?wordCount=2', false); // passing false as 3rd argument makes it run synchronously
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
  const countryRequest = new XMLHttpRequest();

  countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      const countryName = data.find((country) => country.cca2 === countryCode);
      console.log(countryName.name.common);
    } else if (e.target.readyState === 4) {
      console.log('Unable to fetch data');
    }
  });

  countryRequest.open('GET', 'https://restcountries.com/v3.1/all');
  countryRequest.send();
}
