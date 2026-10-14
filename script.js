const totalSlots = 4;

let parkingSlots = [false, false, false, false];

const parkingGrid = document.getElementById("parkingGrid");
const slotSelect = document.getElementById("slotSelect");
const message = document.getElementById("message");

function displaySlots() {
    parkingGrid.innerHTML = "";

    parkingSlots.forEach((occupied, index) => {
        const slot = document.createElement("div");

        slot.className = occupied
            ? "slot full"
            : "slot empty";

        slot.innerHTML = `
            <h3>Parking Slot ${index + 1}</h3>
            <div class="car">${occupied ? "🚗" : "🅿️"}</div>
            <p>${occupied ? "Occupied" : "Available"}</p>
        `;

        parkingGrid.appendChild(slot);
    });

    updateSummary();
}

function updateSummary() {
    const occupiedCount = parkingSlots.filter(Boolean).length;
    const availableCount = totalSlots - occupiedCount;

    document.getElementById("total").textContent = totalSlots;
    document.getElementById("available").textContent = availableCount;
    document.getElementById("occupied").textContent = occupiedCount;
}

document.getElementById("parkBtn").addEventListener("click", () => {
    const index = Number(slotSelect.value);

    if (parkingSlots[index]) {
        message.textContent =
            `Slot ${index + 1} is already occupied!`;
        return;
    }

    parkingSlots[index] = true;

    displaySlots();

    message.textContent =
        `Vehicle parked successfully in Slot ${index + 1}.`;
});

document.getElementById("removeBtn").addEventListener("click", () => {
    const index = Number(slotSelect.value);

    if (!parkingSlots[index]) {
        message.textContent =
            `Slot ${index + 1} is already empty!`;
        return;
    }

    parkingSlots[index] = false;

    displaySlots();

    message.textContent =
        `Vehicle removed from Slot ${index + 1}.`;
});

displaySlots();
