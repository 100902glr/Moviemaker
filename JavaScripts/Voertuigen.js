const vehicles = [
    {
        name: "Batmobile",
        description: "The iconic car used by Batman, equipped with various gadgets and weapons.",
        image: "../media/batmobile.png",
        batteryPercentage: "85%",
        otherDetails: "Reinforced armor, rocket launchers, stealth mode capabilities."
    },
    {
        name: "Batcycle",
        description: "A high-speed motorcycle used by Batman for agile pursuits and narrow escapes.",
        image: "../media/batcycle.png",
        batteryPercentage: "69%",
        otherDetails: "Built-in grappling hook, night vision optics."
    },
    {
        name: "Arkham Mobile",
        description: "An advanced Batmobile designed for tactical operations in urban environments.",
        image: "../media/Arkhammobile.png",
        batteryPercentage: "92%",
        otherDetails: "AI-assisted navigation, deployable drones, advanced defensive systems."
    }
];

// Function to display vehicle information
function displayVehicles() {
    const vehicleContainer = document.getElementById('vehicle-info');

    vehicles.forEach((vehicle, index) => {
        const vehicleDiv = document.createElement('div');
        vehicleDiv.classList.add('vehicle');

        vehicleDiv.innerHTML = `
            <h2>${vehicle.name}</h2>
            <p>${vehicle.description}</p>
            <img src="${vehicle.image}" alt="${vehicle.name}" onclick="openModal(${index})">
        `;

        vehicleContainer.appendChild(vehicleDiv);
    });
}

// Function to open the modal with clicked image
function openModal(index) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalBattery = document.getElementById('modalBattery');
    const modalOtherDetails = document.getElementById('modalOtherDetails');

    modal.style.display = "block";
    modalImg.src = vehicles[index].image;
    modalTitle.textContent = vehicles[index].name;
    modalDescription.textContent = vehicles[index].description;
    modalBattery.textContent = vehicles[index].batteryPercentage;
    modalOtherDetails.textContent = vehicles[index].otherDetails;

    // Close the modal when the user clicks on <span> (x)
    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
}

// Call the function to display vehicles when the page loads
window.onload = displayVehicles;
