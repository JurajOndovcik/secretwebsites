// script.js
const dataContainer = document.getElementById("data-container");

// Fetch the JSON data
fetch("websites.json")
    .then(response => response.json())
    .then(data => {
        // Iterate through the data and create HTML elements for each entry
        data.forEach(item => {
            const entry = document.createElement("div");
            entry.classList.add("entry");

            entry.innerHTML = `
                <div class="list">
                    <div class="websites">
                        <h2 class="heading2">${item.name}</h2>
                        <p>URL: <a href=${item.url}>${item.url}</a></p>
                        <p>Description: ${item.description}</p>
                        <br>   
                    </div>   
                </div>
            `;

            dataContainer.appendChild(entry);
        });
    })
    .catch(error => console.error("Error fetching JSON data:", error));
