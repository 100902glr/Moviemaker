// Example data for Batman's vehicles
const vehicles = [
    {
        name: "Batmobile",
        description: "The iconic car used by Batman, equipped with various gadgets and weapons.",
        image: "../media/batmobile.png",  // Replace with actual image path
        batteryPercentage: "95%",  // Example battery percentage
        otherDetails: "Reinforced armor, rocket launchers, stealth mode capabilities."  // Example other details
    },
    {
        name: "Batcycle",
        description: "A high-speed motorcycle used by Batman for agile pursuits and narrow escapes.",
        image: "../media/batcycle.jpg",  // Replace with actual image path
        batteryPercentage: "85%",  // Example battery percentage
        otherDetails: "Built-in grappling hook, night vision optics."  // Example other details
    },
    {
        name: "Batwing",
        description: "An aerial vehicle resembling a bat, used for flying and surveillance.",
        image: "../media/batwing.jpg",  // Replace with actual image path
        batteryPercentage: "90%",  // Example battery percentage
        otherDetails: "Stealth mode, onboard computer system."  // Example other details
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
