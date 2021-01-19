// All the Variables we will be working with
const main = document.getElementById("main");
const addUser = document.getElementById("add-user");
const double = document.getElementById("double");
const showMillie = document.getElementById("show-millionaires");
const sort = document.getElementById("sort");
const calculateWealthTotal = document.getElementById("calculate-wealth");

// this is where the data for the people and their money will be stored
let data = [];

// Create the functionality for the APP
// fetch random user and add  money
// async is a better way of calling the fetch API
async function getRandomUser() {
//   const res = await fetch("https://randomuser.me/api/1.3/");
//   const data = await res.json();

fetch(
    `https://v6.exchangerate-api.com/v6/1fc3a53e3285ffb4990d7d56/latest/${currency_one}`
  )
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      //   we now have to connect the rate of the first currency
      //  to align with the value of the second currency
      const rate = data.conversion_rates[currency_two];

      //   this will display the exchange rate info on the screen
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
      //   to.fixed()  this is a method thats used in rounding data into decimal values.
    });
}
getRandomUser();
getRandomUser();
getRandomUser();


