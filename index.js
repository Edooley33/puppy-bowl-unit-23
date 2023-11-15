// Sample data (you will fetch this data from your API)
const playersData = [
    { id: 1, name: "Buddy", breed: "Golden Retriever" },
    { id: 2, name: "Daisy", breed: "Beagle" },
    // Add more players here
];

const playerCardsContainer = document.getElementById("player-cards");
const playerInfoContainer = document.getElementById("player-info");

// Function to render player cards
function renderPlayerCards() {
    playerCardsContainer.innerHTML = '';
    playersData.forEach(player => {
        const card = document.createElement("div");
        card.className = "player-card";
        card.innerHTML = `
            <h3>${player.name}</h3>
            <p>Breed: ${player.breed}</p>
            <button class="view-details" data-id="${player.id}">View Details</button>
            <button class="remove-player" data-id="${player.id}">Remove</button>
        `;
        playerCardsContainer.appendChild(card);
    });
}

// Function to render player details
function renderPlayerDetails(player) {
    playerInfoContainer.innerHTML = '';
    playerInfoContainer.innerHTML = `
        <h3>${player.name}</h3>
        <p>Breed: ${player.breed}</p>
    `;
}

// Event listener for "Add Puppy" button
const addPlayerForm = document.getElementById("add-player-form");
addPlayerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const playerName = document.getElementById("player-name").value;
    const playerBreed = document.getElementById("player-breed").value;
    // Add logic to send the new player data to your API and update the roster
    // For now, we'll just add the new player to the sample data
    playersData.push({ name: playerName, breed: playerBreed });
    renderPlayerCards();
});

// Event delegation for "View Details" button
playerCardsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("view-details")) {
        const playerId = parseInt(event.target.getAttribute("data-id"));
        const player = playersData.find(p => p.id === playerId);
        if (player) {
            renderPlayerDetails(player);
        }
    }
});

// Event delegation for "Remove" button
playerCardsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-player")) {
        const playerId = parseInt(event.target.getAttribute("data-id"));
        const playerIndex = playersData.findIndex(p => p.id === playerId);
        if (playerIndex !== -1) {
            playersData.splice(playerIndex, 1);
            renderPlayerCards();
            playerInfoContainer.innerHTML = '';
        }
    }
});

// Initial rendering
renderPlayerCards();
