// HTTP (Hypertext Transfer Protocol)
// Request - What we want to do
// Response - What was actually done

export function getPuzzle(wordCount) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        resolve(data.puzzle);
      } else if (e.target.readyState === 4) {
        reject(e.target.status);
      }
    });

    request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
  });
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
  return new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest();

    countryRequest.addEventListener('readystatechange', (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        const countryName = data.find((country) => country.cca2 === countryCode);
        resolve(countryName.name.common);
      } else if (e.target.readyState === 4) {
        reject(e.target.status);
      }
    });

    countryRequest.open('GET', 'https://restcountries.com/v3.1/all');
    countryRequest.send();
  });
}
