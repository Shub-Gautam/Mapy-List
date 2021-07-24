let cords = [];

const get_cords = function () {
  const data = navigator.geolocation.getCurrentPosition((position) => {
    const { longitude } = position.coords;
    const { latitude } = position.coords;
    // console.log(latitude, longitude);
    cords = [latitude, longitude];
    // console.log(cords);
  });
};

get_cords();
console.log(cords);

var map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([51.5, -0.09])
  .addTo(map)
  .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
  .openPopup();
