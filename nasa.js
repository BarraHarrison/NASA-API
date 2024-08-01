// NASA API Scripts
// Your API key
const apiKey = 'g4duXxzSamHDGSobbLkaaHgOmtHpti1G7kJoVqnR';

// API endpoint
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

async function getData(apiKey){
    return fetch(apiURL)
    .then(response => response.json())
    .then(data => (
        console.log("NASA APOD Data", data),
        displayData(data)
    ))
    .catch(error => {
        console.error(error);
    });
}


const displayData = data => {
    document.getElementById("title").textContent = data.title;
    document.getElementById("picture").src = data.url;
    document.getElementById("explanation").textContent = data.explanation;
};

function clearDisplayData() {
    document.getElementById("title").textContent = "";
    document.getElementById("picture").src = "";
    document.getElementById("explanation").textContent = "";
}

//  Fetch and display the APOD when the page loads
window.onload = () => getData(apiKey);












// First Attempt
// Function to fetch the APOD data
// async function fetchAPOD() {
//     try {
//         const response = await fetch(apiURL);
//         const data = await response.json();
//         displayAPOD(data);
//     } catch (error) {
//         console.error('Error fetching the APOD:', error);
//     }
// }

// // Function to display the APOD data
// function displayAPOD(data) {
//     const titleElement = document.getElementById('title');
//     const imageElement = document.getElementById('image');
//     const descriptionElement = document.getElementById('description');

//     titleElement.textContent = data.title;
//     imageElement.src = data.url;
//     imageElement.alt = data.title;
//     descriptionElement.textContent = data.explanation;
// }

// // Fetch and display the APOD when the page loads
// window.onload = fetchAPOD;

