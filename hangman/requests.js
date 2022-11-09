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
