let limitUsers = document.querySelector(".users");
let limitAge = document.querySelector(".limitAge");
let formUsers = document.querySelector(".formUsers");
let sortedCards = document.querySelector(".sortedCards");
let cards = document.querySelector(".cards");
let cardWrapper = document.querySelector(".cards .cardWrapper");


formUsers.addEventListener('submit', function(event) {
    event.preventDefault();

    cardWrapper.innerHTML = "";
    sortedCards.querySelector('.cardWrapper').innerHTML = "";


    fetch("https://dummyjson.com/users")
    .then(response => response.json())
    .then(data => filterUsers(data.users.slice(0, limitUsers.value)));

    function filterUsers(users){
        users.forEach(user =>{

            let card = document.createElement('div');
            card.className = "card";

           let userId = document.createElement("h3");
           userId.className = "userId";
           userId.textContent = `ID: ${user.id}`;

           let userName = document.createElement("h3");
           userName.className = "userName";
           userName.textContent =`Name: ${user.firstName}` ;

           let userAge = document.createElement("h3");
           userAge.className = "userAge";
           userAge.textContent = `Age: ${user.age}`;

           let userGender = document.createElement("h3");
           userGender.className = "userGender";
           userGender.textContent = `Gender: ${user.gender}`;

           card.append(userId, userName, userAge, userGender);
           cardWrapper.appendChild(card);
});


users.forEach(user => {
    if (user.age > limitAge.value) {
        let card = document.createElement("div");
        card.className = "card";


        let userId = document.createElement('h3');
            userId.className = "userId";
            userId.textContent = `ID: ${user.id}`;

            let userName = document.createElement("h3");
            userName.className = "userName";
            userName.textContent =`Name: ${user.firstName}` ;

            let userAge = document.createElement('h3');
            userAge.className = "userAge";
            userAge.textContent = `Age: ${user.age}`;

            let userGender = document.createElement("h3");
            userGender.className = "userGender";
            userGender.textContent = `Gender: ${user.gender}`;


            card.append(userId, userName, userAge, userGender);
            sortedCards.querySelector(".cardWrapper").appendChild(card);

    }
});

}

});





