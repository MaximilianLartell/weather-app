const submitButton = document.querySelector('#submit-button');
const textField = document.querySelector('#text-field');
const weatherContainer = document.querySelector('#weatherContainer');

submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const weatherData = await fetch(
    `http://localhost:8000/api/weather?city=${textField.value}`
  ).then((res) => res.json());
  console.log(weatherData);
  weatherContainer.innerHTML = renderHTML(weatherData);
  textField.value = '';
});

const renderHTML = (data) => {
  const html = `
  <p class="city">${data.city}</p>
  <h3 class="temp">${data.temp}°C</h3>
  <h4 class="description">${data.description}</h4>
  <p class="humidity">Humidity ${data.humidity}%</p>
  `;
  return html;
};
