function getUserDataAndDisplay() {
     return fetch('https://randomuser.me/api/')
          .then((response) => {
               return response.json();
          })
          .then((data) => {
               const result = data.results[0]; // Get the first user's data

               const profilecard = document.createElement('div'); // Create a new profile card element
               profilecard.classList.add('profile-card');

               profilecard.innerHTML = `
                <div class="profile-picture">
                  <img src="${result.picture.medium}" alt="Profile Picture">
                </div>
                <div class="profile-name">${result.name.first}</div>
                <div class="profile-email">${result.email}</div>
                <button class="profile-button">Follow</button>
              `;

               document.getElementById('profile-container').appendChild(profilecard); // Add the profile card to the container
          })
          .catch((e) => {
               console.log(e);
          });
}

const numberOfProfileCards = 10;

// Create and display 10 profile cards for 10 users
for (let i = 0; i < numberOfProfileCards; i++) {
     getUserDataAndDisplay();
}

