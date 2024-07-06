function solve() {
  const BASE_URL = "http://localhost:3030/jsonstore/bus/schedule/";
  let currentStop = {
    name: "Depot",
    next: "depot",
  };

  const departButton = document.getElementById("depart");
  const arriveButton = document.getElementById("arrive");
  const infoText = document.querySelector("#info span");

  async function depart() {
    const fullPath = BASE_URL + currentStop.next;

    try {
      const response = await fetch(fullPath);
      const data = await response.json();
      infoText.textContent = `Next stop ${data.name}`;
      currentStop = data;
      departButton.disabled = true;
      arriveButton.disabled = false;
    } catch (error) {
      infoText.textContent = "Error";
      departButton.disabled = true;
      arriveButton.disabled = true;
    }
  }

  function arrive() {
    infoText.textContent = `Arriving at ${currentStop.name}`;
    departButton.disabled = false;
    arriveButton.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

// Ensure the script runs after the DOM content is fully loaded
let result = solve()


