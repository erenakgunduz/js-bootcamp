// HTTP (Hypertext Transfer Protocol)
// Request - What we want to do
// Response - What was actually done

export async function getPuzzle(wordCount) {
  const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  }
  throw new Error(`Unable to fetch puzzle, ${response.status} response`);
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

export async function getCountry(countryCode) {
  const response = await fetch('https://restcountries.com/v3.1/all');
  if (response.status === 200) {
    const data = await response.json();
    const countryName = data.find((country) => country.cca2 === countryCode);
    return countryName.name.common;
  }
  throw new Error(`Unable to fetch data, ${response.status} response`);
}

export async function getCurrentCountry() {
  const location = await getLocation();
  return getCountry(location[3]); // In my case I can also just use return location[2];
}

export async function getLocation() {
  const response = await fetch('http://ip-api.com/json/');
  if (response.status === 200) {
    const data = await response.json();
    return [data.city, data.regionName, data.country, data.countryCode];
  }
  throw new Error(`Unable to fetch location, ${response.status} response`);
}
