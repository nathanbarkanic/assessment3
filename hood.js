
    const restaurants = ["Burger Bench", "Burgeon", "Plan 9", "Stone Brewing"];
    const randomButton = document.getElementById("random");
   
    function displayRandomRestaurant() {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const randomRestaurant = restaurants[randomIndex]
    alert("Your random restaurant is: " + randomRestaurant);
    }
    randomButton.addEventListener("click", displayRandomRestaurant)
