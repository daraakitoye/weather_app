const api = "e8e355cfc1e43c33c5d30fc66fd9e5bf";

window.addEventListener("load", () => {
  let long;
  let lat;
  // Getting geo location of user
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
      console.log(base);
    });
  }
});
