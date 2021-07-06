let n = 0;
let interval = 5500; // frequency of interval's trigger time as "ms"
let instagramUser = 0;
let totalUser = document.querySelector('.search-results h3').innerText; // getting the innerText of the h3 which represents the total users found by search
totalUser = Number(totalUser.slice(0, totalUser.indexOf(' ')).replace(',', '')); // seperating the number part of h3 and parsing it to number
let loadUsers = setInterval(() => {
    let loadBtn = document.querySelector('.text-center > a'); // selecting the "load more user" button
    // let loadedUser = (document.querySelectorAll('.search-results .row  .col-xs-12 a').length - 1) / 2; // calculating the "loaded user number" by the number of the divs of the "user cards"
    let loadedUser = document.querySelectorAll('.influencer-card > a').length;
    if (loadBtn.className === 'connect-to-instagram login-button') { // checking if the button is not "load more users"
        clearInterval(loadUsers);
        console.log('all users has been loaded. \ntotal number:' + loadedUser);
        let instaLinks = document.querySelectorAll('#search-results a') // selecting the user cards
        let users = [];
        for (link of instaLinks) {
            let name = link.href; // selecting the instagram account link
            if (name.includes('instagram')) {
                users += ("@" + name.slice((name).lastIndexOf('/') + 1, name.length) + "\n"); // parsing the account name and adding it to a string
                instagramUser++;
            }
        }
        console.log("total instagram users: " + instagramUser + "\n");
        console.log(users);
        //console.log(total instagram user: ${instagramUser})
        return;
    }
    loadBtn.scrollIntoView();
    loadBtn.click();

    n++;
    console.log(`click count: ${ n }\ntotal users loaded: ${ loadedUser }`);

}, interval);