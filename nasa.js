// NASA API Scripts
// Your API key
const apiKey = 'g4duXxzSamHDGSobbLkaaHgOmtHpti1G7kJoVqnR';

// Function to get a random date
function getRandomDate(start, end) {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Function to fetch APOD data
async function getData(apiKey, date = '') {
    const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log("NASA APOD Data", data);
        displayData(data);
    } catch (error) {
        console.error('Error fetching the APOD:', error);
    }
}

// Function to display the APOD data
const displayData = data => {
    document.getElementById("title").textContent = data.title;
    document.getElementById("picture").src = data.url;
    document.getElementById("explanation").textContent = data.explanation;
};

// Function to clear the displayed data
function clearDisplayData() {
    document.getElementById("title").textContent = "";
    document.getElementById("picture").src = "";
    document.getElementById("explanation").textContent = "";
}

// Fetch and display the APOD when the page loads
window.onload = () => getData(apiKey);

// Add event listener to the button to request a new image
document.getElementById("new-image-button").addEventListener("click", () => {
    clearDisplayData();
    const randomDate = getRandomDate(new Date(1995, 5, 16), new Date()); // APOD API starts from June 16, 1995
    getData(apiKey, randomDate);
});




// Issue with the NASA API key, then this will appear in Postman
// {
//     "error": {
//         "code": "OVER_RATE_LIMIT",
//         "message": "You have exceeded your rate limit. Try again later or contact us at https://api.nasa.gov:443/contact/ for assistance"
//     }
// }
