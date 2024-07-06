function getInfo() {
    const BASE_URL = "http://localhost:3030/jsonstore/bus/businfo/";

    function createLiItem(bus, time) {
        const li = document.createElement("li");
        li.textContent = `Bus ${bus} arrives in ${time} minutes`;
        return li;
    }

    document.getElementById("submit").addEventListener("click", onSubmit);
    const stopIdRef = document.getElementById("stopId");
    const stopName = document.getElementById("stopName");
    const busesList = document.getElementById("buses");

    async function onSubmit(ev) {
        ev.preventDefault();
        const stopId = stopIdRef.value;
        const fullPath = BASE_URL + stopId;

        try {
            const response = await fetch(fullPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            stopName.textContent = data.name;

            // Clear the previous list of buses
            busesList.innerHTML = '';

            // Iterate over the buses object and create li items
            for (const [bus, time] of Object.entries(data.buses)) {
                const li = createLiItem(bus, time);
                busesList.appendChild(li);
            }

        } catch (error) {
            console.error("Error fetching data:", error);
            stopName.textContent = "Error";
            busesList.innerHTML = '';
        }
    }
}
