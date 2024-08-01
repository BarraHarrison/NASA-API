// NASA API Scripts

// Your API key
const apiKey = 'g4duXxzSamHDGSobbLkaaHgOmtHpti1G7kJoVqnR';

// API endpoint
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;


// Function to fetch the APOD data
async function fetchAPOD() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        displayAPOD(data);
    } catch (error) {
        console.error('Error fetching the APOD:', error);
    }
}

// Function to display the APOD data
function displayAPOD(data) {
    const titleElement = document.getElementById('title');
    const imageElement = document.getElementById('image');
    const descriptionElement = document.getElementById('description');

    titleElement.textContent = data.title;
    imageElement.src = data.url;
    imageElement.alt = data.title;
    descriptionElement.textContent = data.explanation;
}

// Fetch and display the APOD when the page loads
window.onload = fetchAPOD;


// Issue with the NASA API key, then this will appear in Postman
// {
//     "error": {
//         "code": "OVER_RATE_LIMIT",
//         "message": "You have exceeded your rate limit. Try again later or contact us at https://api.nasa.gov:443/contact/ for assistance"
//     }
// }
