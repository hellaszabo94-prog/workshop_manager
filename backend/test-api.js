const API_URL = "http://localhost:3001/api/workshops";

async function getWorkshops() {
    try {
        console.log("Fetching workshops...");

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(
                `HTTP error! Status: ${response.status}`
            );
        }

        const workshops = await response.json();

        console.log("Workshops received:");
        
        workshops.forEach((workshop) => {
            console.log(`${workshop.title} - ${workshop.price} EUR`);
        });

    } catch (error) {
        console.error("Failed to fetch workshops:", error.message);
    }
}

getWorkshops();