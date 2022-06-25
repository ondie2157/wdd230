const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=san+jose+del+monte%2C+bulacan%2C+philippines&units=Imperial&appid=499b2f2e9f946f9bcd69ab88f78113d2";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject);

        document.querySelector('#current-temp').textContent = jsonObject.main.temp;

        const iconsrc = `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
        const desc = jsonObject.weather[0].description;

        document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;

    });