const url = "https://api.chucknorris.io/jokes/random";

export async function loadMessage() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
