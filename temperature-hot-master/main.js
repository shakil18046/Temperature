const apiKey = "ea0cb46dd1974a77db1f2fcec97fb0ac";
function searchValu() {
  const searchBoxValue = document.getElementById("search-box").value;
  return searchBoxValue;
}
document.getElementById("temp-btn").addEventListener("click", () => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${searchValu()}&appid=${apiKey}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => showWeatherDataOnUi(data));
});
const showWeatherDataOnUi = (data) => {
  console.log(data);
  const countryName = document.getElementById("country-name");
  const temp = document.getElementById("temp");
  const weatherSitutation = document.getElementById("weather-situtation");
  const weatherIcon = document.getElementById("weather-icon");
  const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  countryName.innerText = `${data.name}`;
  temp.innerHTML = `<span>${data.main.temp}&deg;C</span>`;
  weatherSitutation.innerText = `${data.weather[0].main}`;
  weatherIcon.setAttribute("src", url);
};
