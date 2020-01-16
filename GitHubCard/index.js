/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/
// AXIOS CALL TO MY GITHUB
const cardsContainer = document.querySelector(".cards");

const createCard = data => {
  console.log("function data", data);
  //CREATE ELEMENTS
  const entireCard = document.createElement("div");
  const avatar = document.createElement("img");
  const cardInfo = document.createElement("div");
  const realName = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const linkAddress = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  //CREATING CLASS NAMES
  entireCard.classList.add("card");
  cardInfo.classList.add("card-info");
  realName.classList.add("name");
  userName.classList.add("username");

  //ADDING CONTENT TO ELEMENTS
  avatar.src = data.avatar_url;
  realName.textContent = data.name;
  userName.textContent = data.login;
  location.textContent = data.location;
  linkAddress.href = data.html_url;
  linkAddress.textContent = data.html_url;
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = data.bio;

  //APPENDING ELEMENTS
  entireCard.appendChild(avatar);
  entireCard.appendChild(cardInfo);
  cardInfo.appendChild(realName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(linkAddress);

  return entireCard;
};

axios
  .get("https://api.github.com/users/david-pok")
  .then(response => {
    console.log("GITHUB PROFILE", response.data);
    cardsContainer.appendChild(createCard(response.data));
  })
  .catch(error => {
    console.log("CUSTOM ERROR MESSAGE GOES HERE", error);
  });

// axios
//   .get("https://dog.ceo/api/breed/mastiff/images/random/12")
//   .then(response => {
//     console.log(response);
//     response.data.message.forEach(item => {
//       const newDog = dogCard(item);
//       entryPoint.append(newDog);
//     });
//   })
//   .catch(error => {
//     console.log("the data was not returned", error);
//   });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];
//AXIOS CALL TO MY FOLLOWERS OR FOLLOWING
followersArray.forEach(data => {
  axios
    .get(`https://api.github.com/users/${data}`)
    .then(response => {
      console.log(response);
      cardsContainer.appendChild(createCard(response.data));
    })
    .catch(error => {
      console.log("CUSTOM ERROR MESSAGE GOES HERE", error);
    });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
