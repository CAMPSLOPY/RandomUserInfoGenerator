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
  const res = await fetch("https://randomuser.me/api/1.3/");
  const data = await res.json();
  //   we created the user const to attach the data to the results of the called API
  const user = data.results[0];

  //   we now access the API results by creating a new user
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  //   we are adding the newUser object to a function called addData
  addData(newUser);
}

// add new obj to data array

function addData(obj) {
  // we are going to push the newUser which is an obj into this function using
  // push()
  data.push(obj);

  // lets add the created DOM function to this
  updateDOM();
}

function updateDOM(providedData = data) {
  // the (= data means the if the parameter (provideddata is
  //  empty then it should return the data array)

  // WE HAVE TO CLEAR THE MAIN DIV FIRST
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach((item) => {
    // now we have to create a new div element inside the main section in our HTML
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong> ${item.name}</strong> ${item.money}`;
    main.appendChild(element);
  });
}
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
