init();

function init() {
    fetch("http://ssays.dk/kea/houses/wp-json/wp/v2/house")
        .then(response => response.json())
        .then(function (data) {
            dataReceived(data)
            //console.log(data)
        })
}

function dataReceived(houses) {
    houses.forEach(showHouse);
}

function showHouse(oneHouse) {
    console.log(oneHouse);
    // Find the template
    const template = document.querySelector("#houseTemplate").content;
    // clone the template
    const myCopy = template.cloneNode(true);

    // Fill out the template:
    myCopy.querySelector(".house_image").setAttribute("src", oneHouse.image.guid);

    // "http://ssays.dk/kea/common_interest_images/" + city.gsx$heroimage.$t + ".jpg"

    myCopy.querySelector(".adress").textContent = oneHouse.title.rendered;
    myCopy.querySelector(".city").textContent = oneHouse.city;
    myCopy.querySelector(".beds").textContent = oneHouse.beds;
    myCopy.querySelector(".baths").textContent = oneHouse.baths;
    myCopy.querySelector(".sq_feet").textContent = oneHouse.square_feet;

    // Append the template
    const parentElement = document.querySelector("main");
    parentElement.appendChild(myCopy);

}

// oneHouse.image.guid

// setAttribute("style", "background-image: url(" + dir + images[randomCount] + ");background-repeat: no-repeat;background-size: 388px 388px");
